//Make a Circle Class
class Circle {
  //Constructor Method (Function inside of a class)
  constructor(initX, initY, initR, initColor) {
    this.x = initX;
    this.y = initY;
    this.startx = initX;
    this.starty = initY;
    this.r = initR;
    this.color = initColor;
    this.thickness = 5;
  }

  // METHODS (Function/Behavior)
  draw() {
    ctx.lineWidth = this.thickness;
    ctx.strokeStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.stroke();
  }

  move() {
    if (keyPressed["KeyA"]) {
      this.x += -5;
    } else if (keyPressed["KeyD"]) {
      this.x += 5;
    } else if (keyPressed["KeyS"]) {
      this.y += 5;
    } else if (keyPressed["KeyW"]) {
      this.y += -5;
    } else {
      this.x += randomInt(-2, 3);
      this.y += randomInt(-2, 3);
    }
    this.x = constrain(this.x, 0 + this.r, cnv.width - this.r);
    this.y = constrain(this.y, 0 + this.r, cnv.height - this.r);
  }
  // function dist(x1, y1, x2, y2) {
  //   return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  // }

  towardsMouse() {
    // Save previous circle x and y
    this.rise = mouseY - this.y;
    this.run = mouseX - this.x;
    this.d = Math.sqrt(this.run ** 2 + this.rise ** 2);
    this.dx = (this.run / this.d) * 3;
    this.dy = (this.rise / this.d) * 3;
    this.x = this.x + this.dx;
    this.y = this.y + this.dy;
  }

  key() {
    if (keyPressed["Digit1"]) {
      this.color = "red";
    } else if (keyPressed["Digit2"]) {
      this.color = "orange";
    } else if (keyPressed["Digit3"]) {
      this.color = "Gold";
    } else if (keyPressed["Digit4"]) {
      this.color = "green";
    } else if (keyPressed["Digit5"]) {
      this.color = "blue";
    } else if (keyPressed["Digit7"]) {
      this.color = "violet";
    } else if (keyPressed["Digit8"]) {
      this.color = "indigo";
    } else if (keyPressed["Digit9"]) {
      this.color = "pink";
    } else if (keyPressed["Digit0"]) {
      this.color = "black";
    } else if (keyPressed["KeyR"]) {
      circleArray = [];
    }

    if (keyPressed["Digit6"]) {
      notCrazy = false;
      this.color = randomRGB();
      if (!mouseIsPressed) {
        this.x += randomInt(-6, 7);
        this.y += randomInt(-6, 7);
      }
      document.body.style.backgroundColor = randomRGB();
    } else {
      notCrazy = true;
    }
  }

  mousepressed() {
    if (mouseIsPressed) {
      this.towardsMouse();
    } else {
      this.move();
    }
  }
}
