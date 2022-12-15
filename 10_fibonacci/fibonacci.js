const fibonacci = function(a) {
    let aInt = Number(a);
    let answer = 0;
    if (aInt < 0) {
        return "OOPS";
    }
    if (aInt <= 2) {
        return 1;
    }
    let one = 1;
    let two = 1;
    let top = 0;
    for (let i = 2; i < aInt; i++) {
        top = one + two;
        one = two;
        two = top;
    }
    return top;
};

// Do not edit below this line
module.exports = fibonacci;
