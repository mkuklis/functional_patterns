function globalize(methodName) {
  return function (obj) {
    return obj[methodName]();
  }
}
