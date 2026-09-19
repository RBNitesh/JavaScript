function fun1(fun2) {
  setTimeout(() => {
    console.log("inside fun1");
    fun2();
  }, 1000);
}

function fun2(fun3) {
  setTimeout(() => {
    console.log("inside fun2");
    fun3();
  }, 1000);
}

function fun3(end) {
  setTimeout(() => {
    console.log("inside fun3");
    end();
  }, 1000);
}

fun1(() => {
  fun2(() => {
    fun3(() => {
      console.log("end of callback hell");
    });
  });
});
