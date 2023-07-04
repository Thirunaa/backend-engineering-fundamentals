const fs = require("fs");

const func = () => {
  console.log("Log 1");
  fs.readFile("sampleText.txt", (err, data) => console.log(data.toString()));
  console.log("Log 2");
};

module.exports = { func };
