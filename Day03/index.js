const fs = require("fs");

(() => {
  const matrix = fs
    .readFileSync("input")
    .toString()
    .split("\n")
    .map((row) => row.split(""));

  matrix.shift();

  let index = 0;

  const count = matrix.reduce((treesAcc, row) => {
    index += 3;

    if (row[index % row.length] === "#") {
      return treesAcc + 1;
    }

    return treesAcc;
  }, 0);

  console.log(count);
})();
