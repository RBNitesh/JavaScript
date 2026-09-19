function fun1(/*fun2*/) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("inside fun1");
      // fun2();
      resolve();
    }, 1000);
  });
}

function fun2(/*fun3*/) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("inside fun2");
      // fun3();
      resolve();
    }, 1000);
  });
}

function fun3(/*end*/) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("inside fun3");
      // end();
      resolve();
    }, 1000);
  });
}

// callback
// fun1(() => {
//   fun2(() => {
//     fun3(() => {
//       console.log("end of callback hell");
//     });
//   });
// });

// handling asynchronous tasks using Promise
fun1()
  .then(fun2)
  .then(fun3)
  .then(() => console.log(`All funs are executed.`))
  .catch((err) => console.err("No no ... ", err));
