const _ = require("lodash");
const fs = require("fs");

(() => {
  const arr = fs.readFileSync("input").toString().split("\n\n");

  // const groups = arr
  //   .map((answers) => {
  //     return answers.replace(/\n/g, "").split("");
  //   })
  //   .map((answers) => {
  //     return _.uniqBy(answers); // dedupe
  //   });

  const groups = arr
    .map((answers) => {
      return answers.split("\n").map((i) => i.split(""));
    })
    .map((answers) => {
      return _.intersection(...answers);
    });

  console.log(groups.reduce((prev, answers) => prev + answers.length, 0));
})();
