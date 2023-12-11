// for (i = 0; i <= 255; i++) {
//   const container = document.querySelector(".container");
//   const square = document.createElement("div");
//   square.style.width = "32px";
//   square.style.height = "32px";
//   square.style.background = "white";
//   container.appendChild(square);
//   square.addEventListener("mousedown", (e) => {
//     square.style.backgroundColor = "black";
//   });
//   square.addEventListener("mouseover", function (e) {
//     if (e.buttons == 1) {
//       square.style.backgroundColor = "black";
//     }
//   });
// }

const container = document.querySelector(".container");
function canvasGen(x) {
  totalPixels = x * x - 1;
  canvasPixels = 8 * x;
  for (i = 0; i <= totalPixels; i++) {
    const square = document.createElement("div");
    square.style.width = "8px";
    square.style.height = "8px";
    square.style.backgroundColor = "white";
    container.appendChild(square);
    container.style.width = canvasPixels + "px";
    container.style.height = canvasPixels + "px";
    square.addEventListener("mousedown", (e) => {
      square.style.backgroundColor = "black";
    });
    square.addEventListener("mouseover", function (e) {
      if (e.buttons == 1) {
        square.style.backgroundColor = "black";
      }
    });
  }
}
canvasGen(50);

console.log("Hello World!");
