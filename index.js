const express = require("express");
const multer = require("multer");
const crypto = require("crypto");

const app = express();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "media/");
    },
    filename: function (req, file, cb) {
        // cb(null, file.originalname);
        crypto.randomBytes(16, (err, hash) => {
            if (err) cb(err);

            const filename = `${hash.toString("hex")}-${
                file.originalname
            }`;
            cb(null, filename);
        });
    },
});

const upload = multer({ storage });

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home");
});

app.post("/upload", upload.single("file"), (req, res) => {
    res.send("arquivo enviado");
});

app.listen(3000, () => {
    console.log("Servidor Rodando");
});
