const canvas = document.querySelector("canvas");
const clear = document.querySelector("#Clear");
const colorSelector = document.querySelector("#color");
const bgcolor = document.querySelector("#bgcolor");
const sizeSelector = document.querySelector("#size");
const ctx = canvas.getContext("2d");

let lastX = 0;
let lastY = 0;
let isDrawing = false;
let color = 0;
ctx.lineJoin = "round";
ctx.lineCap = "round";

function draw(e) {
  if (!isDrawing) return;

  ctx.strokeStyle = `${colorSelector.value}`;
  ctx.lineWidth = sizeSelector.value;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  [lastX, lastY] = [e.offsetX, e.offsetY];
  ctx.lineTo(lastX, lastY);

  ctx.stroke();
}

canvas.addEventListener("mousemove", draw);

canvas.addEventListener("mousedown", (e) => {
  [lastX, lastY] = [e.offsetX, e.offsetY];
  isDrawing = true;
});

clear.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

bgcolor.addEventListener("change", () => {
  canvas.style.background = `${bgcolor.value}`;
});

canvas.addEventListener("mouseup", () => {
  isDrawing = false;
});
canvas.addEventListener("mouseout", () => {
  isDrawing = false;
});

//change the values dynaically for all controls

// const controls = document.querySelectorAll("input");

// function handleUpdate() {
//   //console.log(this.value);
//   const suffix = this.dataset.sizing || "";
//   document.documentElement.style.setProperty(
//     `--${this.name}`,
//     this.value + suffix
//   );
// }

// controls.forEach((control) =>
//   control.addEventListener("mousemove", handleUpdate)
// );
// controls.forEach((control) => control.addEventListener("change", handleUpdate));
