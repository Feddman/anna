class Game {

  constructor(field, speler, obstacle) {
    this.field = field;
    this.speler = speler;
    this.obstacle = obstacle;
    this.started = false;
  }

  draw() {
    field.fillStyle = speler.color;
    field.fillRect(speler.x, speler.y, speler.width, speler.height);

    field.fillStyle = obstacle.color;
    field.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
  }

  update() {
    this.clear();
    this.obstacle.move();
    this.draw();
    if ( this.speler.x + this.speler.width > this.obstacle.x &&
         this.obstacle.x + this.obstacle.width > this.speler.x)
    {

      if (  (this.speler.y + this.speler.height > this.obstacle.y) )
      {
          this.end();
      }

    }



      var that = this;
      requestAnimationFrame( function() {
        if (that.started)
        {
          that.update();
        }
      });



  }

  start() {
    this.started = true;
    requestAnimationFrame(() => this.update() );
  }

  clear() {
    this.field.clearRect(0,0, this.field.canvas.width, this.field.canvas.height);
  }

  end() {
    this.started = false;

    alert('game has ended');
    this.clear();
  }


}