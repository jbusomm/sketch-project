for (i = 0; i < 256; i++) {
  const container = document.querySelector(".container");
  const square = document.createElement("div");
  square.style.width = "8px";
  square.style.height = "8px";
  square.style.background = "red";
  square.style.color = "white";
  square.style.display = "flex";
  square.classList.add("square-div");
  container.appendChild(square);
}

console.log("Hello World!");
