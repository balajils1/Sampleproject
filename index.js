
var _ = require('underscore');

module.exports = {
  sayHello: sayHello
};

function sayHello() {
  var words = ['Hello', 'World!'];
  var message = '';
  _.each(words, function(word) {
    message += word + ' ';
  });
  return message;
}
