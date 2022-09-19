var adicao = function (x, y) {
  return x + y;
};

var multiplicacao = function (x, y) {
  return x * y;
};

var calc = function (operacao, x, y) {
  return operacao(x, y);
};

console.log(calc(multiplicacao, 10, 20));
