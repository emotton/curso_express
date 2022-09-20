const express = require("express");
const port = 3000;

const app = express();

let pessoa = {
  nome: "Eduardo",
  idade: 52,
  sexo: "M",
};

app.get("/banana", (req, res) => {
  res.send("OK Banana");
});

app.post("/banana", (req, res) => {
  res.send("OK Banana Post");
});

app.delete("/banana", (req, res) => {
  res.send("OK Banana Delete");
});

app.get("/pijama", (req, res) => {
  res.send("OK Pijama");
});

app.get("/pessoa", (req, res) => {
  res.send(pessoa);
});

app.listen(port, () => {
  console.log("Servidor está rodando");
});
