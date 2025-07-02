const express = require("express");
const { Server } = require("socket.io");
const { createServer } = require("node:http");
const cors = require("cors");

const app = express();
app.use(express.static("public"));
app.use(cors({ origin: "*" }))
const server = createServer(app);
const io = new Server(server);

io.on("connection", socket => {
    console.log(socket.id);
})

server.listen(8082, () => console.log("Listening on port 8082"))