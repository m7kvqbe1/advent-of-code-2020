const fs = require("fs");

(() => {
  const arr = fs
    .readFileSync("input")
    .toString()
    .split("\n")
    .map((item) => parseInt(item));

  for (x of arr) {
    for (y of arr) {
      for (z of arr) {
        if (2020 - x - y - z === 0) {
          console.log(x, y, z, x * y * z);
          return;
        }
      }
    }
  }
})();
