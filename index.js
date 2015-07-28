var _ = require('underscore');

module.exports = function(password) {
  var rules = [{
    rule: /.{8,24}/,
    message: '密码长度要在8-24位之间，且必须包含字母和数字'
  }, {
    rule: /[a-zA-Z]+/,
    message: '密码长度要在8-24位之间，且必须包含字母和数字'
  }, {
    rule: /[0-9]+/,
    message: '密码长度要在8-24位之间，且必须包含字母和数字'
  }];
  var err = null;
  rules.every(function(item) {
    if (_.isFunction(item.rule) && !(item.rule(password))) {
      err = {
        message: item.message
      };
      return false;
    } else if (!password.match(item.rule)) {
      err = {
        message: item.message
      };
      return false;
    }
    return true;
  });
  return err;
};

// console.log(module.exports('asd3fghjkkl'))
