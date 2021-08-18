var bgImage, bg;
var tank, tankImage;
var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10;
var ballImage, ball, ballGroup;
var target, blockImage;

var count;

function preload(){
  bgImage = loadImage("bg.jpg");
  tankImage = loadImage("tank.png");
  blockImage = loadImage("block.jpg");
  ballImage = loadImage("ball.png");
}

function setup() {
  createCanvas(1800,800);
  
  bg = createSprite(1000,800);
  bg.addImage(bgImage);
  bg.scale = 20;
  bg.velocityX = -5;

  tank = createSprite(300,700);
  tank.addImage(tankImage);
  tank.scale = 0.3;

  create(b1,1500,400);

  create(b2,1580,365);
  create(b3,1580,435);

  create(b4,1650,330);
  create(b5,1650,400);
  create(b6,1650,470);

  create(b7,1730,295);
  create(b8,1730,365);
  create(b9,1730,435);
  create(b10,1730,505);

  

  count = 0;


}

function draw() {
  background(255,255,255);  

  if (bg.x < 800){
    bg.x = 1000
  }

  if (keyDown(UP_ARROW)&& tank.y >100 && tank.y <715){
    tank.y -= 5;
  }

  if (keyDown(DOWN_ARROW)&& tank.y >100 && tank.y <715){
    tank.y += 5;
  }

  if(keyDown(RIGHT_ARROW)&& count<= 12){
    createBall();
    ball.y = tank.y
    count = count + 1;
  }
 
  
  

  drawSprites();
}

function create(v, x, y){
  v = createSprite(x,y,60,60);
  v.addImage(blockImage);
  v.scale = 0.2;

}

function createBall(){
  ball = createSprite(tank.x, tank.y, 20,20);
  ball.addImage(ballImage);
  ball.scale = 0.15;
  ball.velocityX = 10;
  
  ball.lifetime = 180;
  return ball;

  
  
  }

