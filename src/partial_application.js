Function.prototype.partial = function () {
  var args = Array.prototype.slice.call(arguments);
  var f = this;
  return function () {
    var innerArgs = Array.prototype.slice.call(arguments);
    return f.apply(this, args.concat(innerArgs));
  };
};
