const fs = require('fs');
const path = require('path');
const { readCsvToArray } = require('../src/utils/csvReadFile');

describe('readCsvToArray', () => {
  const mockCsvPath = path.resolve(__dirname, 'mockFiles', 'test.csv');

  beforeAll(() => {
    const mockCsvContent = `name,age,city
Alice,30,New York
Bob,25,Los Angeles
Charlie,35,Chicago`;

    fs.writeFileSync(mockCsvPath, mockCsvContent);
  });

  afterAll(() => {
    if (fs.existsSync(mockCsvPath)) {
      fs.unlinkSync(mockCsvPath);
    }
  });

  test('should read a CSV file and convert it to an array of objects', async () => {
    const expectedResult = [
      { name: 'Alice', age: '30', city: 'New York' },
      { name: 'Bob', age: '25', city: 'Los Angeles' },
      { name: 'Charlie', age: '35', city: 'Chicago' }
    ];

    const result = await readCsvToArray(mockCsvPath);
    expect(result).toEqual(expectedResult);
  });

  test('should throw an error if the CSV file does not exist', async () => {
    const nonExistentPath = path.resolve(__dirname, 'mockFiles', 'nonexistent.csv');

    await expect(readCsvToArray(nonExistentPath)).rejects.toThrow('File not found:');
  });
});
