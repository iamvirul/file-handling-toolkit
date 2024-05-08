```markdown
# File Handling Toolkit

File Handling Toolkit is a Node.js package that provides utility functions for handling files, including reading and writing text files.

## Installation

You can install the File Handling Toolkit package via npm:

```bash
npm install file-handling-toolkit
```

## Usage

### Read a File

```javascript
const { readFile } = require('file-handling-toolkit');

// Example: Read a text file
readFile('example.txt')
  .then(data => {
    console.log('File content:', data);
  })
  .catch(error => {
    console.error('Error reading file:', error);
  });
```

### Write to a File

```javascript
const { writeFile } = require('file-handling-toolkit');

// Example: Write data to a text file
const data = 'Hello, world!';
writeFile('output.txt', data)
  .then(() => {
    console.log('Data written to file successfully!');
  })
  .catch(error => {
    console.error('Error writing to file:', error);
  });
```

## API Reference

### `readFile(filePath: string): Promise<string>`

Reads the contents of a file and returns a Promise that resolves with the file content as a string.

- `filePath`: Path to the file to be read.

### `writeFile(filePath: string, data: string): Promise<void>`

Writes data to a file and returns a Promise that resolves when the operation completes successfully.

- `filePath`: Path to the file to write.
- `data`: Data to be written to the file.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
