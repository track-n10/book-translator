# DOCX Chapter Web Application

This project is a web application that allows users to upload a DOCX file, specify a summary to divide the document into chapters, and generate a web page for each chapter. Each chapter page maintains the original text format and includes a button to copy the content to the clipboard.

## Features

- Upload a DOCX file.
- Specify a summary to divide the document into chapters.
- Generate individual web pages for each chapter.
- Copy chapter content to the clipboard with a button.

## Project Structure

```
docx-chapter-webapp
├── public
│   └── index.html          # Main HTML file
├── src
│   ├── components
│   │   ├── ChapterPage.tsx # Component to display chapter content
│   │   └── CopyButton.tsx   # Component for copying content to clipboard
│   ├── utils
│   │   └── docxParser.ts    # Utility to parse DOCX files
│   ├── styles
│   │   └── main.css         # CSS styles for the application
│   ├── App.tsx              # Main application component
│   └── index.tsx            # Entry point for the React application
├── package.json             # npm configuration file
├── tsconfig.json            # TypeScript configuration file
└── README.md                # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd docx-chapter-webapp
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Usage

1. Start the development server:
   ```
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000`.

3. Upload a DOCX file and specify the summary to divide the document into chapters.

4. Navigate through the generated chapter pages and use the copy button to copy content as needed.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.