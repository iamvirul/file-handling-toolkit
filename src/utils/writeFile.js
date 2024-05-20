const fs = require('fs');

function writeFile(filePath, data, append = false) {
    return new Promise((resolve, reject) => {
        const writeMode = append ? 'a' : 'w';
        fs.writeFile(filePath, data, { encoding: 'utf8', flag: writeMode }, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

module.exports = writeFile;
