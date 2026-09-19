// * handliing asynchronous tasks using Callback *
// function myFunction(name, fun) {
//   setTimeout(() => {
//     const data = { name: name, age: 21 };
//     fun(data); // callback
//   }, 3000);
// }
// const printData = (data) => console.log(data);
// myFunction("rayan", printData);

// * handliing asynchronous tasks using Promise *
function mydata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { name: "Rohit", age: 23 };
      resolve(data);
    }, 2000);
  });
}

mydata()
  .then((data) => {
    console.log("Data:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
