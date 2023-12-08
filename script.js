for (i = 0; i <= 255; i++) {
  const container = document.querySelector(".container");
  const square = document.createElement("div");
  square.style.width = "16px";
  square.style.height = "16px";
  square.style.background = "red";
  container.appendChild(square);
}

console.log("Hello World!");
