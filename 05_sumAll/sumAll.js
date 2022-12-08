const sumAll = function(firstNumber, secondNumber) {
    if (typeof(firstNumber) != "number" || typeof(secondNumber) !== "number") {
        return "ERROR";
    }
    if (firstNumber < 0 || secondNumber < 0) {
        return "ERROR";
    }
    let startNumber = 0;
    let endNumber = 0;
    if (firstNumber < secondNumber) {
        startNumber = firstNumber;
        endNumber = secondNumber
    }
    else {
        startNumber = secondNumber;
        endNumber = firstNumber;
    }
    let answer = 0;
    for (let i = startNumber; i <= endNumber; i++) {
        answer += i;
    }
    return answer;
};

// Do not edit below this line
module.exports = sumAll;
