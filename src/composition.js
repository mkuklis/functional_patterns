Function.prototype.composition = function (g) {
  var f = this;
  return function () {
    var args = Array.prototype.slice.call(arguments);
    // when called, nest g's return in a call to f
    return f.call(this, g.apply(this, args));
  };
};
