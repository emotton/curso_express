var PI = 3.14;

var adicao = function (x, y) {
  return x + y;
};

var multiplicacao = function (x, y) {
  return x * y;
};

var areaCirc = function (raio) {
  return PI * Math.pow(raio, 2);
};

var calc = function (operacao, x, y) {
  return operacao(x, y);
};

console.log(calc(multiplicacao, 10, 20));
