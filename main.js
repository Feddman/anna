const canvas = document.getElementById('stage');
const startBtn = document.getElementById('start');
const clearBtn = document.getElementById('clear');
const jumpBtn = document.getElementById('jump');

const field = canvas.getContext('2d');

let speler = new Speler(225, 450, 50, 50, 'black');
let obstacle = new Obstacle(400, 480, 70, 20, 'green');

let game = new Game(field, speler, obstacle);


startBtn.addEventListener('click', function() {
  game.start();
});

clearBtn.addEventListener('click', function() {
  game.clear();
});

jumpBtn.addEventListener('click', function() {
  game.speler.isUp = true;
  requestAnimationFrame(function(){
    game.speler.jump();
  });
});
