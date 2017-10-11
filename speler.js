 class Speler {

  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.height = height;
    this.width = width;
    this.isJumping = false;
    this.draw(field);
  }

  draw(field) {
    field.fillStyle = this.color;
    field.fillRect(this.x, this.y, this.width, this.height);
  }

  jump(field) {


    var that = this;
    let interval = setInterval(function(){

      field.clearRect(that.x - 1, that.y + 1, that.width + 1, that.height + 1);

      if (that.y >= 300) {
        that.y -= 1;
      } else {
        clearInterval( interval )
        that.y = 450;
      }
      that.draw(field);
    }, 4)

  }

}





