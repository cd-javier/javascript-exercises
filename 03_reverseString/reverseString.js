const reverseString = function(string) {
    let stringReversed = [];
    for (i = string.length; i >= 0; i--) {
        stringReversed.push(string[i])
    }
    return stringReversed.join('')
};

// Do not edit below this line
module.exports = reverseString;
