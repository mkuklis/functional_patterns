Function.prototype.curry = function () {
  var fn = this;
  var args = Array.slice(arguments, 0);
  return function () {
    return fn.apply(this, args.concat(Array.slice(arguments, 0)));
  };
};
