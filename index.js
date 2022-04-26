const express = require("express");
const multer = require("multer");
const crypto = require("crypto");
const dotenv = require("dotenv");
const cors = require("cors");
// const path = require("path");

dotenv.config();

const app = express();

app.use(cors());

app.use("/", express.static(__dirname + "/public"));
app.use("/static", express.static(__dirname + "/public"));
app.use("/media", express.static(__dirname + "/public"));

app.set("view engine", "ejs"); // setting up the engine for html

const storage = multer.diskStorage({
    // This func configures the storage folder for multer and add a random hash for the name
    destination: function (req, file, cb) {
        cb(null, "public/media");
    },
    filename: function (req, file, cb) {
        // cb(null, file.originalname);
        crypto.randomBytes(16, (err, hash) => {
            if (err) cb(err);
            const filename = `${Date.now()}-${hash.toString("hex")}-${
                file.originalname
            }`;
            cb(null, filename);
        });
    },
});

const upload = multer({ storage }); // configure the multer with storage function
// const uploadMultiple  = upload.fields([{ name: "file", maxCount: 10 }, { name: "fImagens", maxCount: 10 }]);
const uploadMultiple = upload.fields([{ name: "file", maxCount: 1 }]);

app.get("/", (req, res, next) => {
    // main page where the user will upload the file
    res.render("request");
});

app.get("/success", (req, res) => {
    res.render("redirect");
});

app.post("/upload", uploadMultiple, (req, res, next) => {
    // Route where handle the file request to be uploaded
    if (req.files) {
        next();
    }
});

// configuration of the port and error handler
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
