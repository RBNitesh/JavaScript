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
// fun1()
//   .then(fun2)
//   .then(fun3)
//   .then(() => console.log(`All funs are executed.`))
//   .catch((err) => console.err("No no ... ", err))
//   .finally(() => {});

// handling asynchronous tasks using async/await
// async function executeAsyncTasks() {
//   await fun1();
//   await fun2();
//   await fun3();
//   console.log(`All tasks are executed successfully.`);
// }

// executeAsyncTasks();

function mydata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { name: "Rohit", age: 23 };
      resolve(data);
    }, 2000);
  });
}

(async function executeAsyncTasks() {
  const data = await mydata();
  console.log(data);
})();
