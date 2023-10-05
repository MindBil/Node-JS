const express = require("express");
const app = express();
const port = 3000;

const users = ["Rokas", "Tomas", "Gedas"];

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.get("/api/users", (req, res) => {
    res.send(users);
});

app.get("/fruits", (req, res) => {
    res.send(["Apple", "banana"]);
})

app.listen(port, () => {
    console.log(`App listening on ${port}`);
})