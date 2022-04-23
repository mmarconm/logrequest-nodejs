const express = require("express");
const multer = require("multer");
const crypto = require("crypto");
const dotenv = require("dotenv");

dotenv.config();

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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

// Error handler middleware
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send({
        status: 500,
        message: err.message,
        body: {},
    });
});