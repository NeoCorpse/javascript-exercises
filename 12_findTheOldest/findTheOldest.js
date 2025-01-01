const findTheOldest = function (people) {
  return people.reduce((former, current) => {
    let formerAge =
      "yearOfDeath" in former
        ? former.yearOfDeath - former.yearOfBirth
        : new Date().getFullYear() - former.yearOfBirth;
    let currentAge =
      "yearOfDeath" in current
        ? current.yearOfDeath - current.yearOfBirth
        : new Date().getFullYear() - current.yearOfBirth;
    return currentAge > formerAge ? current : former;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
