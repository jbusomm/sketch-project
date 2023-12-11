for (i = 0; i <= 255; i++) {
  const container = document.querySelector(".container");
  const square = document.createElement("div");
  square.style.width = "16px";
  square.style.height = "16px";
  square.style.background = "white";
  container.appendChild(square);
  square.addEventListener("mouseover", function (e) {
    if (e.buttons == 1) {
      square.style.backgroundColor = "black";
    }
  });
}

console.log("Hello World!");
