class Obstacle {

  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.height = height;
    this.width = width;

  }


  move() {
    this.x -= 2;
  }

}