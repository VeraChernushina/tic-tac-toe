const server = require("http").createServer();

const io = require("socket.io")(server, {
  cors: {
    origin: "http://127.0.0.1:5173",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.emit("hello", "world");
  socket.on("play", (index) => {
    console.log("server received", index);
    socket.broadcast.emit("play", index);
  });
});

server.listen(3000);
