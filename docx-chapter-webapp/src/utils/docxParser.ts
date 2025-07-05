import { Packer, Document, Paragraph } from 'docx';
import { readFileSync } from 'fs';
import { parseStringPromise } from 'xml2js';

export async function parseDocx(filePath: string, summary: string): Promise<string[]> {
    const data = readFileSync(filePath);
    const zip = new Packer().unzip(data);
    const xml = await zip.file('word/document.xml').async('string');
    
    const result = await parseStringPromise(xml);
    const chapters: string[] = [];
    
    // Logic to extract chapters based on the summary
    const paragraphs = result['w:document']['w:body'][0]['w:p'];
    let currentChapter: string = '';

    paragraphs.forEach((para: any) => {
        const text = para['w:r'][0]['w:t'][0];
        if (isChapterStart(text, summary)) {
            if (currentChapter) {
                chapters.push(currentChapter);
            }
            currentChapter = text; // Start a new chapter
        } else {
            currentChapter += ' ' + text; // Append to current chapter
        }
    });

    if (currentChapter) {
        chapters.push(currentChapter); // Push the last chapter
    }

    return chapters;
}

function isChapterStart(text: string, summary: string): boolean {
    // Implement logic to determine if the text indicates a new chapter based on the summary
    return summary.split(',').some(chapter => text.includes(chapter.trim()));
}