const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res, next) => {
    res.render("home");
});

app.listen(3000, () => {
    console.log("Servidor Rodando");
});
