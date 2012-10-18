Function.prototype.flipping = function () {
  var f = this;
  return function () {
    var args = Array.prototype.slice.call(arguments);
    // flip arguments when called
    return f.apply(this, args.reverse());
  };
};
