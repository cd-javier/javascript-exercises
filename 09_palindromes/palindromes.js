const palindromes = function (word) {
  const alpha = "abcdefghijklmnopqrstuvwxyz0123456789";

  const finalWord = word
    .toLowerCase()
    .split("")
    .filter((letter) => alpha.includes(letter))
    .join("");

  const reversed = finalWord.split("").reverse().join('');

  return finalWord === reversed;
};


// Do not edit below this line
module.exports = palindromes;
