import React, { useState } from 'react';
import ChapterPage from './components/ChapterPage';
import CopyButton from './components/CopyButton';
import { parseDocx } from './utils/docxParser';

const App: React.FC = () => {
    const [chapters, setChapters] = useState<string[]>([]);
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    };

    const handleParseDocx = async () => {
        if (file) {
            const chapterContents = await parseDocx(file);
            setChapters(chapterContents);
        }
    };

    return (
        <div>
            <h1>DOCX Chapter Divider</h1>
            <input type="file" accept=".docx" onChange={handleFileChange} />
            <button onClick={handleParseDocx}>Parse DOCX</button>
            {chapters.map((chapter, index) => (
                <div key={index}>
                    <ChapterPage text={chapter} />
                    <CopyButton text={chapter} />
                </div>
            ))}
        </div>
    );
};

export default App;