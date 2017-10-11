 class Speler {

  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.height = height;
    this.width = width;
    this.isUp = false;

  }


  jump() {

    let animation = requestAnimationFrame(() => this.jump());
    this.y -= 1;
    if (this.isUp)
    {
      if (this.y < 350)
      {
        this.y = 450;
        this.isUp = false;
        cancelAnimationFrame(animation);
      }
    }

  }
}





