//Key Stuff
let Digit1IsPressed = false;
let Digit2IsPressed = false;
let Digit3IsPressed = false;
let Digit4IsPressed = false;
let Digit5IsPressed = false;
let Digit6IsPressed = false;
let Digit7IsPressed = false;
let Digit8IsPressed = false;
let Digit9IsPressed = false;
let Digit0IsPressed = false;
let KeyAIsPressed = false;
let KeyWIsPressed = false;
let KeySIsPressed = false;
let KeyDIsPressed = false;
let mouseIsPressed = false;
let notCrazy = true;

document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyupHandler);
function keydownHandler(event) {
  console.log(event.code);

  if (event.code == "Digit1") {
    Digit1IsPressed = true;
  } else if (event.code == "Digit2") {
    Digit2IsPressed = true;
  } else if (event.code == "Digit3") {
    Digit3IsPressed = true;
  } else if (event.code == "Digit4") {
    Digit4IsPressed = true;
  } else if (event.code == "Digit5") {
    Digit5IsPressed = true;
  } else if (event.code == "Digit6") {
    Digit6IsPressed = true;
    notCrazy = false;
  } else if (event.code == "Digit7") {
    Digit7IsPressed = true;
  } else if (event.code == "Digit8") {
    Digit8IsPressed = true;
  } else if (event.code == "Digit9") {
    Digit9IsPressed = true;
  } else if (event.code == "KeyD") {
    KeyDIsPressed = true;
  } else if (event.code == "KeyW") {
    KeyWIsPressed = true;
  } else if (event.code == "KeyA") {
    KeyAIsPressed = true;
  } else if (event.code == "KeyS") {
    KeySIsPressed = true;
  }
}

function keyupHandler(event) {
  if (event.code == "Digit1") {
    Digit1IsPressed = false;
  } else if (event.code == "Digit2") {
    Digit2IsPressed = false;
  } else if (event.code == "Digit3") {
    Digit3IsPressed = false;
  } else if (event.code == "Digit4") {
    Digit4IsPressed = false;
  } else if (event.code == "Digit5") {
    Digit5IsPressed = false;
  } else if (event.code == "Digit6") {
    Digit6IsPressed = false;
    notCrazy = true;
  } else if (event.code == "Digit7") {
    Digit7IsPressed = false;
  } else if (event.code == "Digit8") {
    Digit8IsPressed = false;
  } else if (event.code == "Digit9") {
    Digit9IsPressed = false;
  } else if (event.code == "Digit0") {
    Digit0IsPressed = false;
  } else if (event.code == "KeyW") {
    KeyWIsPressed = false;} 
  else if (event.code == "KeyA") {
    KeyAIsPressed = false;}
   else if (event.code == "KeyS")
    {KeySIsPressed = false;
      
    }else if (event.code == "KeyD")
      {KeyDIsPressed = false;}
}

//Mouse stuff
document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);
document.addEventListener("mousemove", mousemoveHandler);

function mousedownHandler(event) {
  mouseIsPressed = true;
}

function mouseupHandler(event) {
  mouseIsPressed = false;
}

function mousemoveHandler(event) {
  //Update mouseX and mouseY
  let cnvRect = cnv.getBoundingClientRect();
  mouseX = event.x - cnvRect.x;
  mouseY = event.y - cnvRect.y;
}
