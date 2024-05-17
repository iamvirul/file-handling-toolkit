// __tests__/fileHandling.test.js
const path = require('path');
const { readFile, writeFile } = require('file-handling-toolkit');

// Mock data for testing
const exampleFilePath = path.resolve(__dirname, 'mockFiles','example.txt');
const exampleFileOutPath = path.resolve(__dirname, 'mockFiles','testOutput.txt');
const exampleData = 'Hello, world!';


describe('File Handling Toolkit', () => {
    test('readFile should read a file and return its contents', async () => {
        const data = await readFile(exampleFilePath);
        expect(data).toEqual(exampleData);
    });

    test('writeFile should write data to a file', async () => {
        await writeFile(exampleFileOutPath, exampleData);
        const data = await readFile(exampleFileOutPath);
        expect(data).toEqual(exampleData);
    });
});
