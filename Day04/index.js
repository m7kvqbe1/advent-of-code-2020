const fs = require("fs");

(() => {
  const arr = fs
    .readFileSync("input")
    .toString()
    .split("\n\n")
    .map((item) => item.replace(/\n/g, " ").split(" "));

  const expected = {
    byr: (i) => {
      return parseInt(i) >= 1920 && parseInt(i) <= 2002;
    },
    iyr: (i) => {
      return parseInt(i) >= 2010 && parseInt(i) <= 2020;
    },
    eyr: (i) => {
      return parseInt(i) >= 2020 && parseInt(i) <= 2030;
    },
    hgt: (i) => {
      if (i?.includes("cm")) {
        return parseInt(i) >= 150 && parseInt(i) <= 193;
      }

      if (i?.includes("in")) {
        return parseInt(i) >= 59 && parseInt(i) <= 76;
      }

      return false;
    },
    hcl: (i) => {
      return i?.match(/^#[0-9A-F]{6}$/i);
    },
    ecl: (i) => {
      return ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(i);
    },
    pid: (i) => {
      return i?.match(/^[0-9]{9}$/);
    },
  };

  // const expected = [
  //   "byr", // (Birth Year)
  //   "iyr", // (Issue Year)
  //   "eyr", // (Expiration Year)
  //   "hgt", // (Height)
  //   "hcl", // (Hair Color)
  //   "ecl", // (Eye Color)
  //   "pid", // (Passport ID)
  //   // "cid", // (Country ID)
  // ];

  const passports = arr.map((item) => {
    return item.reduce((prev, field) => {
      const parts = field.split(":");
      return { ...prev, [parts[0]]: parts[1] };
    }, {});
  });

  console.log(
    passports.filter((item) => {
      // return expected.every((field) => item[field]);

      return Object.keys(expected).every((field) =>
        expected[field](item[field])
      );
    }).length
  );
})();
