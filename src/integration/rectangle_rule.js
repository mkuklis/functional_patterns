function rectangle_rule(f) {
  return function (a, b, n) {
    var w, sum;

    a || (a = 0);
    b || (b = 1);
    n || (n = 1000);

    w = (b - a) / n;
    sum = 0;

    for (var i = 0; i < n; i++) {
      var xi = a + i * w;
      sum = sum + (w * f(xi));
    }

    return sum;
  }
}
