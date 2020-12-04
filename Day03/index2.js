const fs = require("fs");

function treeCount({ down, right }, matrix) {
  let count = 0;
  let x = 0;

  for (let y = 0; y < matrix.length; y = y + down) {
    if (matrix[y][x % matrix[0].length] === "#") {
      count++;
    }

    x += right;
  }

  return count;
}

(() => {
  const matrix = fs
    .readFileSync("input")
    .toString()
    .split("\n")
    .map((row) => row.split(""));

  const move = [
    { right: 1, down: 1 },
    { right: 3, down: 1 },
    { right: 5, down: 1 },
    { right: 7, down: 1 },
    { right: 1, down: 2 },
  ];

  console.log(
    move.reduce((prev, current) => prev * treeCount(current, matrix), 1)
  );
})();
