//Servidor Web 
//Ariana Espinoza 181297

const express = require("express");

const winston = require("winston");

const logger = winston.createLogger({
  level: "warn",
  format: winston.format.json(),
  transports: [
    new winston.transports.File({
      filename: "logs.txt"
    })
  ]
});

const app = express();

app.use(express.json());

app.use(express.static("./public"));

app.get("/hola", holaMundo, (req, res) => {
    logger.warn("Hello");
    res.send("Done");
  });

app.post("/estoEsUnaPrueba", (req, res) => {
  res.send("Esto es una prueba de funcionamiento");
});

const decirHola = (req, res, next) => {
  logger.info("decirHola");
  next();
};

app.get("/hola/:holaMundo", (req, res, next) => {
  const nombre = req.params.holaMundo;
  res.send(`Hola ${holaMundo}`);
});

  // Almacenar DB
  const data = req.body;
  data.text = text;
  res.json(data);


app.get("/ejemplo", (req, res, next) => {
  res.redirect("/hola");
});

app.use((error, req, res, next) => {
  console.log("Ocurrió un error");
  next(error);
});

app.use((error, req, res, next) => {
  res.status(400).json({ error });
});
