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
    //Save previous circle x and y
    this.px = this.x;
    this.py = this.y;
    this.x += randomInt(-3, 4);
    this.y += randomInt(-3, 4);

    if (KeyAIsPressed) {
      this.x -= 4
    } else if (KeyWIsPressed) {
      this.y -= 4
    } else if (KeyDIsPressed) {
      this.x += 4
    } else if (KeySIsPressed) {
      this.y += 4
    } 

    if (this.x > 800 - this.r) {
      this.x = 800 - this.r;
    } else if (this.x < + this.r) {
      this.x = 0 + this.r;
    } else if (this.y < 0 + this.r) {
      this.y = 0 + this.r;
    } else if (this.y > 600- this.r) {
      this.y = 600 - this.r;
    }
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

  setColor() {
    if (Digit1IsPressed) {
      this.color = "red";
    } else if (Digit2IsPressed) {
      this.color = "orange";
    } else if (Digit3IsPressed) {
      this.color = "Gold";
    } else if (Digit4IsPressed) {
      this.color = "green";
    } else if (Digit5IsPressed) {
      this.color = "blue";
    } else if (Digit6IsPressed) {
      notCrazy = false;
      this.color = randomRGB();
      this.x += randomInt(-6, 7);
      this.y += randomInt(-6, 7);
      document.body.style.backgroundColor = randomRGB();
    } else if (Digit7IsPressed) {
      this.color = "violet";
    } else if (Digit8IsPressed) {
      this.color = "indigo";
    } else if (Digit9IsPressed) {
      this.color = "pink";
    } else if (Digit0IsPressed) {
      this.color = "black";
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
