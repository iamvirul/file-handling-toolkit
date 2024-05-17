const readFile = require('./utils/readFile');
const writeFile = require('./utils/writeFile');
const { readCsvToArray } = require('./utils/csvReadFile');

module.exports = {
    readFile,
    writeFile,
    readCsvToArray
};
