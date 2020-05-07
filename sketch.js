const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var  snake;
var  i = 20;
var  food;
var  w;
var  h;

function setup() {
  createCanvas(400, 400);
  w = floor(width / i);
  h = floor(height / i);
  frameRate(5);
  snake = new Snake();
  foodLocation();
}

function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } else if (key == ' ') {
    snake.grow();
  }

}

function draw() {
  
  background(220);
  //Engine.update(engine);
  
  scale(i);
  if (snake.eat(food)) {
    foodLocation();
  }
  snake.update();
  snake.show();


  if (snake.endGame()) {
    print("END GAME");
    background(255, 0, 0);
    noLoop();
  }

  noStroke();
  fill(200, 123, 120);
  rect(food.x, food.y, 1, 1);
}


