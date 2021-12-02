const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const Port = process.env.PORT || 8000;

app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello, this is node express server with basic setup.");
});

app.listen(Port, () => {
    console.log(`Server running on Port http://localhost:${Port}`);
});