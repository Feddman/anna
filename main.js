const canvas = document.getElementById('stage');
const startBtn = document.getElementById('start');
const field = canvas.getContext('2d');

let speler = new Speler(225, 450, 50, 50, "brown");
let obstacle = new Obstacle(440, 475, 60, 25,'red');

startBtn.addEventListener('click', function(){
  obstacle.move(field);
});

canvas.addEventListener('click', function(){
  speler.jump(field);
} );
