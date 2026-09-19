// passing default parameter
const fun = (val, data = 10) => val + data;

console.log(fun(5, 13));

// immediately invoked
(function () {
  console.log("immediately invoked.");
})();

// callback function
function num(n, callback) {
  return callback(n);
}

const double = (n) => n * 2;

// console.log(typeof double); // output: function

console.log(num(5, double));
