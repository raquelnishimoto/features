const solve = (strArray) => {
  return strArray.reduce((longest, word) => {
    return longest.split('').reduce((acc, letter, idx) => {
      if (word.split('')[idx]) {
        acc += letter.toLowerCase() === word.split('')[idx].toLowerCase() ?
          letter : '';
      }
      return acc;
    }, '');
  });
};


console.log(solve(["test", "testing", "tester"]));