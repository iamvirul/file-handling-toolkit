const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

function readCsvToArray(filePath) {
  return new Promise((resolve, reject) => {
    const results = [];
    const absolutePath = path.resolve(filePath);

    const stream = fs.createReadStream(absolutePath)
      .on('error', (error) => {
        if (error.code === 'ENOENT') {
          reject(new Error(`File not found: ${absolutePath}`));
        } else {
          reject(error);
        }
      })
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', (error) => reject(error));
  });
}

module.exports = {
  readCsvToArray
};
