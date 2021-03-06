const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });

let colour = "red"

const broadcastToConnectedClients = (wss, ws, command) =>
  [...wss.clients]
    .filter((c) => c != ws && c.readyState === WebSocket.OPEN)
    .forEach((c) => {
      console.log("echoing ", command.colour);
      colour = command.colour
      c.send(colour);
    });

wss.on("connection", (ws) => {
  ws.on("message", (message) => {
    console.log("received: %s", message);
    const command = JSON.parse(message);
    if (command.colour) {
      broadcastToConnectedClients(wss, ws, command);
    }
  });

  ws.send(colour);
});
console.log("connected to: ", wss.address());

