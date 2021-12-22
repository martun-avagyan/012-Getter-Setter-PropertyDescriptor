"use strict";

const getBestStudent = function (obj) {
  const [...entries] = Object.entries(obj);
  let highScore = -Infinity;
  let winner;
  for (let i = 0; i < entries.length; i++) {
    let average =
      entries[i][1].reduce((acc, el) => acc + el) / entries[i][1].length;

    if (average > highScore) {
      highScore = average;
      winner = entries[i][0];
    }
  }
  return winner;
};
const myObj = {
  John: [100, 100, 100],
  Bob: [100, 70, 80],
  Pete: [100, 100, 80],
  Kenny: [0, 0, 0],
  Kyle: [100, 99, 100],
};

console.log(getBestStudent(myObj));
