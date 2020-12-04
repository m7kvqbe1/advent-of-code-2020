const fs = require("fs");

(() => {
  const arr = fs.readFileSync("input").toString().toLowerCase().split("\n");

  let count = 0;

  for (x of arr) {
    const [min, max] = x.split(" ")[0].split("-");
    const letter = x.split(":")[0].split(" ")[1];

    const password = x.split(" ")[2];

    // console.log(min, max, letter, password);

    // const regex = new RegExp(letter, "g");
    // const matches = (password.match(regex) || []).length;

    // // if (matches >= min && matches <= max) {
    // //   count += 1;
    // //   console.log(x, "valid");
    // // }

    const positionOne = password.charAt(parseInt(min) - 1);
    const positionTwo = password.charAt(parseInt(max) - 1);

    const occurances = [positionOne, positionTwo].filter((item) => {
      console.log([positionOne, positionTwo], item, letter);
      return item === letter;
    }).length;

    if (occurances === 1) {
      count += 1;
      console.log(x, "valid", password.length);
    }
  }

  console.log(count);
})();
