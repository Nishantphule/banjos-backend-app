const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
const menuRouter = require("./controllers/menus")
require("dotenv").config();
const serverless = require('serverless-http');

const app = express();
app.use(cors());
app.use(express.json());


mongoose.set('strictQuery', false);

console.log("Connecting to Backend Database")

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Connected to Database.")

    })
    .catch((error) => {
        console.log(error)
    })

app.get("/home", (req, res) => {
    res.status(200).json('<h1>Welcome to the Banjos App</h1>');
})

app.use("/menu", menuRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})

const handler = serverless(app)

module.export = handler;