const express = require("express");
const http = require("http");
const { v4: uuidV4 } = require("uuid");
const cors = require("cors");
const socket = require("socket.io");

const PORT = process.env.PORT || 9000;

const app = express();
const server = http.createServer(app);
const io = socket(server);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

server.listen(PORT, () => {
    console.log("listening to port : ", PORT);
});
