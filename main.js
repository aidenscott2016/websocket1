const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", function (ws) {
  ws.on("message", function (message) {
    console.log("received: %s", message);
    const command = JSON.parse(message);
    if (command.colour) {
      [...wss.clients]
        .filter((c) => c != ws && c.readyState === WebSocket.OPEN)
        .map((c) => {
          console.log(c);
          console.log("echoing ", command.colour);
          return c.send(command.colour);
        });
    }
  });

  ws.send("red");
});
console.log("connected to: ", wss.address());
