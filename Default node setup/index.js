// to setup project - npm install nodemon express cors
// then - npm run dev

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const port = 3000;

app.get("/", (req, res) => {
    res.send("Server is working");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});