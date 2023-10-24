const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
//const cors = require("cors");

const server = express();

server.use(morgan("dev"));
server.use(express.json());
//server.use(cors());


//server.use((req, res, next) => {
//    console.log("Hola, estoy pasando por el nidiware");
//    next();
//});
//server.get("/",(req, res) =>{
//    res.status(200).send("OK");
//});


server.use(router);

//server.get('/countries', (req, res) =>{
//    res.status(200).send("llegue al countries");
//});


module.exports = server;
