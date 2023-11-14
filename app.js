const express = require("express");
const ruta = require("./src/routes/routes");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./src/views"));

app.use("/", ruta);

app.use((req, res, next) => {
  res
    .status(404)
    .send(
      `<h1>Recurso no encontrado  <a href="/">Regresar a la pagina principal</a> </h1>`
    );
});

app.listen(port, () => console.log(`Server listening on localhost:${port}`));
