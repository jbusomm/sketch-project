for (i = 0; i <= 255; i++) {
  const container = document.querySelector(".container");
  const square = document.createElement("div");
  square.style.width = "1px";
  square.style.height = "1px";
  square.style.background = "red";
  container.appendChild(square);
}

console.log("Hello World!");
