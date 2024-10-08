// JS OOP CIRCLES START CODE

// Set up canvas and context variables
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;
notCrazy = true;

// Global Variables
let circleArray = [];

// Main Draw Function after page load
window.addEventListener("load", draw);

function draw() {
  // ***** LOGIC *****

  //Circle movement
  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].mousepressed();
  }

  // ***** DRAWING *****
  // Clear background

  if (notCrazy) {
    document.body.style.backgroundColor = "white";
    ctx.clearRect(0, 0, cnv.width, cnv.height);
  }

  // Draw Circles

  //SetColor
  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].key();
  }

  //Draw
  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].draw();
  }

  // Request Another Frame
  requestAnimationFrame(draw);
}
