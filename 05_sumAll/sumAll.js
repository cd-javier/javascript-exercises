const sumAll = function (numberOne, numberTwo) {
  if (!Number.isInteger(numberOne) || !Number.isInteger(numberTwo)) return 'ERROR';
  if (numberOne < 0 || numberTwo < 0) return "ERROR";
  const starter = numberOne < numberTwo ? numberOne : numberTwo;
  const finisher = numberOne > numberTwo ? numberOne : numberTwo;
  let sum = 0;
  for (let i = starter; i <= finisher; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
