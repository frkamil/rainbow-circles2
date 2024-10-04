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
      this.x += randomInt(-3, 4);
      this.y += randomInt(-3, 4);
    }
    this.x = constrain(this.x, 0 + this.r, cnv.width - this.r);
    this.y = constrain(this.y, 0 + this.r, cnv.height - this.r);
  }

  towardsCenter() {
    // Save previous circle x and y
    this.px = this.x;
    this.py = this.y;
    this.rise = 300 - this.y;
    this.run = 400 - this.x;
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
    }

    if (keyPressed["Digit6"]) {
      notCrazy = false;
      this.color = randomRGB();
      this.x += randomInt(-6, 7);
      this.y += randomInt(-6, 7);
      document.body.style.backgroundColor = randomRGB();
    } else {
      notCrazy = true;
    }
  }

  mousepressed() {
    if (mouseIsPressed) {
      this.towardsCenter();
    } else {
      this.move();
    }
  }
}
