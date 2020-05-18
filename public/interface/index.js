document.addEventListener("DOMContentLoaded", () => {
  const connection = new WebSocket("ws://192.168.0.32:8080", []);
  connection.onopen = () => connection.send(JSON.stringify({ text: "ping" }));

  connection.onerror = (error) =>
    console.log("WebSocket Error " + JSON.stringify(error));
  document.getElementById("button").addEventListener("click", (e) => {
    e.preventDefault()
    const input = document.getElementById('input')
    console.log(input.value)
    connection.send(JSON.stringify({colour: input.value}))
  });
});
