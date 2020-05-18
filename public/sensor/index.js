"use strict";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("button").addEventListener("click", () => {
    DeviceOrientationEvent.requestPermission()
      .then((response) => {
          console.log("test")
        if (response == "granted") {
          window.addEventListener("deviceorientation", function (event) {
            console.log(event.alpha + " : " + event.beta + " : " + event.gamma);
          });
        }
      })
      .catch(console.error);
  });
});
