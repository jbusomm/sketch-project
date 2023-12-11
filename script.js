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
    square.classList.add("square");
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

function cleanCanvas() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

const changeSizeBtn = document.querySelector(".canvasBtn");
changeSizeBtn.addEventListener("click", (e) => {
  userSize = prompt("Change the canvas size", "50");
  if (userSize < 16) {
    alert(`${userSize} is too small. It has to be bigger than 16.`);
  } else if (userSize > 80) {
    alert(`${userSize} is too big. It has to be smaller than 80.`);
  } else {
    cleanCanvas();
    canvasGen(userSize);
  }
});

console.log("Hello World!");
