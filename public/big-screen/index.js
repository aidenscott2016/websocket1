document.addEventListener("DOMContentLoaded", () => {
  connection.onmessage = (message) => {
    console.log(message);
    const pre = document.getElementById("pre");
    pre.textContent = pre.textContent + '\n' + message.data;
    pre.style.backgroundColor = message.data;
  };
});
