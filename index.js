var check = function (num) {
  var numArray = num.toString().split("");
  for (let i = numArray.length - 2; i > - 1; i -= 2) {
    var doubleNum = Number(numArray[i]) * 2;
    if (doubleNum > 9) {
      doubleNum -= 9;
      numArray[i] = doubleNum;
    }
    if (doubleNum < 10) {
      numArray[i] = doubleNum;
    }
  }
  var total = 0;
  for (let i = 0; i < numArray.length; i++) {
    total += Number(numArray[i]);
  }
  return total % 10 === 0;
}

module.exports = check;