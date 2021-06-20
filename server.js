const express = require("express");
const http = require("http");
const { v4: uuidV4 } = require("uuid");
const cors = require("cors");
const socket = require("socket.io");

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socket(server);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

io.on("connection", (socket) => {
    socket.on("self", socket.id);

    socket.on("call", ({ user, signalData, from, username }) => {
        io.to(user).emit("call", { signal: signalData, from, username });
    });

    socket.on("answer", (data) => {
        io.on(data.to).emit("answer", data.signal);
    });

    socket.on("end", () => {
        socket.broadcast.emit("callEnded");
    });
});

server.listen(PORT, () => {
    console.log("listening to port : ", PORT);
});
