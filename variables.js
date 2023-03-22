function add_1(a, b) {
  return a + b;
}

function sub_1(a, b) {
  return a - b;
}

function mul_1(a, b) {
  return a * b;
}

function div_1(a, b) {
  return a / b;
}

let result = mul_1(4, 3);
console.log(result);

const calculator = {
  add: function (num1, num2) {
    return num1 + num2;
  },
  sub: function (num1, num2) {
    return num1 - num2;
  },
  mul: function (num1, num2) {
    return num1 * num2;
  },
  div: function (num1, num2) {
    return num1 / num2;
  },
};

let resultCal = calculator.sub(3, 4);
console.log(resultCal);
