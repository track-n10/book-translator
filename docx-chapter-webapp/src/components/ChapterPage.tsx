import React from 'react';
import CopyButton from './CopyButton';

interface ChapterPageProps {
    chapterText: string;
}

const ChapterPage: React.FC<ChapterPageProps> = ({ chapterText }) => {
    return (
        <div className="chapter-page">
            <h2>Chapter</h2>
            <div className="chapter-content" dangerouslySetInnerHTML={{ __html: chapterText }} />
            <CopyButton textToCopy={chapterText} />
        </div>
    );
};

export default ChapterPage;