// thread-first works like '->' in clojure
// http://clojuredocs.org/clojure_core/clojure.core/-%3E 
function threadFirst() {
  var args = [];
  for (var i = 0, l = arguments.length; i < l; i++) {
    var arg = arguments[i]; 
    if (typeof arg == 'function') {
      args = arg.call(arg, args);
    } else if (Array.isArray(arg)) {
      Array.prototype.push.apply(args, arg);
    } 
    else args.push(arg);
  }
  return args;
}

// example

var result = threadFirst(
  [1, 2, 3],
  function (array) {
    return transform(array, 10, 11, 12);
  },
  function (array) {
    return array[0];
  }, 
  function (val) {
    return val * 2;
  },
  function (val) {
    return val;
  }
);

console.log(result);