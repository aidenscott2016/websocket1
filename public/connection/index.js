"use strict";

const connection = new WebSocket("ws://192.168.0.32:8080", []);
connection.onopen = () =>
  connection.send(JSON.stringify({ text: "ping" }));

connection.onerror = (error) =>
  console.log("WebSocket Error " + JSON.stringify(error));
