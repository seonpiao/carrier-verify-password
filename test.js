'use strict'

var assert = require("assert");
var checkPassword = require('./');

describe('Check password', function() {

  it('密码合法', function() {
    var result = checkPassword('asdksjd281');
    assert(result === null);
  });

  it('长度不够', function() {
    var result = checkPassword('asdks');
    assert(result);
  });

  it('不包含数字', function() {
    var result = checkPassword('asdkssd');
    assert(result);
  });

  it('不包含字母', function() {
    var result = checkPassword('12345678');
    assert(result);
  });

});
