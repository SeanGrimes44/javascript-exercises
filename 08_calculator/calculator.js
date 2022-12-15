const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
	let total = 0;
  for (let i = 0; i < a.length; i++) {
    total+= a[i];
  }
  return total;
};

const multiply = function(a) {
  let total = 1;
  for (let i = 0; i < a.length; i++) {
    total *= a[i];
  }
  return total;
};

const power = function(a, b) {
  let aStart = a;
	for (let i = 1; i < b; i++) {
    a *= aStart;
  }
  return a;
};

const factorial = function(a) {
	
  let ans = 1;
  for (let i = a; i > 0; i--) {
    ans *= i;
  }
  return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
