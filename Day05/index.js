const fs = require("fs");

function getRow(sequence) {
  let min = 0;
  let max = 127;

  for (let i = 0; i < 7; i++) {
    if (sequence[i] === "F") {
      max = Math.floor((max + min) / 2);
    } else {
      min = Math.ceil((max + min) / 2);
    }
  }

  return min;
}

function getCol(sequence) {
  let min = 0;
  let max = 7;

  for (let i = 7; i < 10; i++) {
    if (sequence[i] === "L") {
      max = Math.floor((max + min) / 2);
    } else {
      min = Math.ceil((max + min) / 2);
    }
  }

  return min;
}

(() => {
  const arr = fs.readFileSync("input").toString().split("\n");

  const passes = arr.map((sequence) => {
    const row = getRow(sequence);
    const col = getCol(sequence);

    return {
      sequence,
      row,
      col,
      id: row * 8 + col,
    };
  });

  // console.log(passes.sort((i, x) => x.id - i.id)[0].id);

  const high = passes.sort((i, x) => x.id - i.id)[0].id;
  const low = passes.sort((i, x) => i.id - x.id)[0].id;

  for (let i = low; i < high; i++) {
    if (!passes.find((pass) => pass.id === i)) {
      console.log(i);
      break;
    }
  }
})();
