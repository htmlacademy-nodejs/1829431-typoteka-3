'use strict';

const path = require(`path`);
const packageFile = require(`../../../package.json`);
const fs = require(`fs`).promises;

module.exports = {
  getLineWithIndentFromStart(str, indent, minIndent = 1) {
    const symbolsAfterStr = Math.max(indent - str.length, minIndent);
    return str + ` `.repeat(symbolsAfterStr);
  },

  getRootFileName() {
    return path.basename(packageFile.main);
  },

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  shuffle(someArray) {
    for (let i = someArray.length - 1; i > 0; i--) {
      const randomPosition = Math.floor(Math.random() * i);
      [someArray[i], someArray[randomPosition]] = [someArray[randomPosition], someArray[i]];
    }

    return someArray;
  },

  async loadFileData(fileName) {
    try {
      const data = await fs.readFile(fileName, `utf-8`);
      return data.split(`\n`);
    } catch (err) {
      throw new Error(`Не получилось получить данные из файла (${fileName})`);
    }
  }
};
