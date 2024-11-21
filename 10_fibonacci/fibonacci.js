const fibonacci = function (countArg) {
  let count;
  if (typeof countArg !== "number") {
    count = parseInt(countArg);
  } else {
    count = countArg;
  }
  if (countArg < 0) return "OOPS";

  let fibo = [0, 1];

  for (i = 0; i <= count; i++) {
    fibo.push(fibo[i] + fibo[i + 1]);
  }

  return fibo[count];
};

// Do not edit below this line
module.exports = fibonacci;
