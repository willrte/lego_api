const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const fs = require("fs");
/* ONLY ACCEPT */
let corsOptions = {
    origin: [
        "http://localhost:8080",
    ],
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
const PORT = process.env.PORT || 8082;
app.post("/api/update-db", (req, res) => {
    console.log(req.body);
    fs.writeFileSync("./database.json", JSON.stringify(req.body,null,4));
    res.send("Hello World");
});
app.get("/api/get-db", (req, res) => {
    res.send(fs.readFileSync("./database.json"));
});
app.listen(PORT, () => {
    console.log(`Server is running fine on port: ${PORT}`);
});
