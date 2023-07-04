const exp = require("constants");
const fs = require("fs");

const func = () => {
  console.log("Log 1");
  const res = fs.readFileSync("sampleText.txt");
  console.log("file:" + res);
  console.log("Log 2");
};

module.exports = { func };
