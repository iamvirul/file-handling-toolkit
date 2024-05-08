// __tests__/fileHandling.test.js

const { readFile, writeFile } = require('file-handling-toolkit');

// Mock data for testing
const exampleFilePath = 'example.txt';
const exampleData = 'Hello, world!';


describe('File Handling Toolkit', () => {
    test('readFile should read a file and return its contents', async () => {
        const data = await readFile(exampleFilePath);
        expect(data).toEqual(exampleData);
    });

    test('writeFile should write data to a file', async () => {
        await writeFile('testOutput.txt', exampleData);
        const data = await readFile('testOutput.txt');
        expect(data).toEqual(exampleData);
    });
});
