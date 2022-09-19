var a = 10;
exibir();

// Função associada a uma variavel
var exibir = function () {
  console.log(a);
};

// Função anonima
function exibir2() {
  console.log(a);
}
