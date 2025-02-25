// API signific Application Programming Interface
// POST, GET, PUT, DELETE
// CRUD - Create Read Update Delete
// Endpoint, uma rota que pode ser acessada atráves de uma API = "/"
// node --watch ele observa se houve alguma atualização durante o servidor que está ligado.
// Sempre que for importar o "express", incluir o método de importação mais recente dentro do package.json,
// que seria: "type": "module",
// Middleware - npm i cors

import express from "express";
import cors from "cors";
import { db } from "./connect.js";

const app = express();
const PORT = 3000;

app.use(cors()); // permite requisição de qualquer origem
// app.use(express.json());

app.get("/", (request, response) => {
  response.send("Só vamos trabalhar com os endpoints '/artists' e '/songs'");
});

// Toda vez que usar o await dentro de uma função, também tenho que chamar o async

app.get("/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.listen(PORT, () => {
  console.log(`Servidor está escutando na porta ${PORT}`);
});
