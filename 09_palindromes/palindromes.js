const palindromes = function (a) {
    a = a.toLowerCase();
    let regex = /[\W_]/g;
    a = a.replace(regex, "");
    console.log(a);
    let reverseString = "";
    for (let i = a.length-1; i >= 0; i--) {
        reverseString += a[i];
    }
    console.log(reverseString)

    if (reverseString == a) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
