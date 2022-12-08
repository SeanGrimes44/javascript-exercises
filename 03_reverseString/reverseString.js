const reverseString = function(stringToReverse) {
    let answer = "";
    for (let i = stringToReverse.length; i >= 0; i--) {
        answer += stringToReverse.charAt(i);
    }
    return answer;
};

// Do not edit below this line
module.exports = reverseString;
