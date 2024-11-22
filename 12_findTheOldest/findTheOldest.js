const findTheOldest = function (array) {
  const orderedArray = array.toSorted((firstPerson, nextPerson) => {
    birthYearOne = firstPerson.yearOfBirth;
    deathYearOne = firstPerson.yearOfDeath || new Date().getFullYear();
    birthYearTwo = nextPerson.yearOfBirth;
    deathYearTwo = nextPerson.yearOfDeath || new Date().getFullYear();

    return deathYearTwo - birthYearTwo - (deathYearOne - birthYearOne);
  });
  return orderedArray[0];
};

// Do not edit below this line
module.exports = findTheOldest;