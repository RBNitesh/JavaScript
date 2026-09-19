function checkCondition(msg = "nothing there in name") {
  this.msg = msg;
  this.name = "CheckCondition";
}

checkCondition.prototype = Error.prototype;

try {
  if (4 != 5) throw new checkCondition("4 is not equal to 5");
} catch (err) {
  console.log(err.msg);
} finally {
  console.log(`Oh my god, error is catched finally.`);
}
