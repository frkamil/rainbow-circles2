// Global Variables
let mouseX;
let mouseY;

let keyPressed = {};
let mouseIsPressed = false;

// Event Stuff
document.addEventListener("mousemove", mousemoveLibHandler);
document.addEventListener("keydown", keydownLibHandler);
document.addEventListener("keyup", keyupLibHandler);
document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);

function mousemoveLibHandler(e) {
  // Get rectangle info about canvas location
  let cnvRect = cnv.getBoundingClientRect();

  // Calc mouse coordinates using mouse event and canvas location info
  mouseX = Math.round(e.clientX - cnvRect.left);
  mouseY = Math.round(e.clientY - cnvRect.top);
}

function keydownLibHandler(e) {
  keyPressed[e.code] = true;
}

function keyupLibHandler(e) {
  keyPressed[e.code] = false;
}

function mousedownHandler(event) {
  mouseIsPressed = true;
}

function mouseupHandler(event) {
  mouseIsPressed = false;
}

function dist(x1, y1, x2, y2) {
  return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}

function constrain(val, low, high) {
  if (val > high) {
    val = high;
    return val;
  } else if (val < low) {
    val = low;
    return val;
  } else {
    return val;
  }
}
