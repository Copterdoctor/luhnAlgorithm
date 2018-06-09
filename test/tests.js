var assert = require("chai").assert;
var check = require("../index");

describe("index", function () {
  it("should return true if input number passed luhn test", function () {
    var num = 79927398713;
    var result = check(num);
    assert.isTrue(result);
  });
  
  it("should return false if input number did not pass luhn test", function () {
    var num = 79927398714;
    var result = check(num);
    assert.isFalse(result);
  });
});