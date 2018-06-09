var assert = require("chai").assert;
var luhnNumber = require("../index");

describe("index", function () {
  it("should return true if input number is correct", function () {
    var num = 79927398713;
    var result = luhnNumber(num);
    assert.isTrue(result);
  });
  it("should return true if input number is correct", function () {
    var num = 5330909440163485;
    var result = luhnNumber(num);
    assert.isTrue(result);
  });
  it("should return true if input number is correct", function () {
    var num = 4423881460380;
    var result = luhnNumber(num);
    assert.isTrue(result);
  });
  it("should return true if input number is correct", function () {
    var num = 6226995465300412;
    var result = luhnNumber(num);
    assert.isTrue(result);
  });
  
  it("should return false if input number is incorrect", function () {
    var num = 79927398714;
    var result = luhnNumber(num);
    assert.isFalse(result);
  });
  it("should return false if input number is incorrect", function () {
    var num = 79927345398714;
    var result = luhnNumber(num);
    assert.isFalse(result);
  });
  it("should return false if input number is incorrect", function () {
    var num = 7992734714;
    var result = luhnNumber(num);
    assert.isFalse(result);
  });
  it("should return false if input number is incorrect", function () {
    var num = 7992734539871412341234;
    var result = luhnNumber(num);
    assert.isFalse(result);
  });
});