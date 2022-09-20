// requerendo, http de qualquer lugar

// Nucleo (Core) do Node
const http = require("http");

const port = 3000;

const requestHandler = function (request, response) {
  if (request.url == "/banana") {
    response.end(
      "<h1>Banana eh voce !!!</h1><script>var botao = document.createElement('BUTTON');botao.innerHTML = 'Clica aqui mane';document.body.appendChild(botao);</script>"
    );
  } else if (request.url == "/pijama") {
    response.end("<h1>Listrado!</h1>");
  } else {
    response.end("Bem vindo !");
  }
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log("Algo de errado não está certo", err);
  }

  console.log(`Servidor está rodando na porta ${port}`);
});
