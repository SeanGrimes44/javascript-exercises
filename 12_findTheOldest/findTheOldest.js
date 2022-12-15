const findTheOldest = function(people) {
    const sortedPeople = people.sort(function(a, b) {
        if (!a.hasOwnProperty("yearOfDeath")) {
            a.yearOfDeath = new Date().getFullYear();
        }
        if (!b.hasOwnProperty("yearOfDeath")) {
            b.yearOfDeath = new Date().getFullYear();
        }
        if (a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth) {
            return -1;
        }
        else {
            return 1;
        }
    });
    return sortedPeople[0];
};

// Do not edit below this line
module.exports = findTheOldest;
