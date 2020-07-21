var trex,trexRunning,ground,

function preload() {
trexRunning = loadAnimation("trex1.png","trex3.png","trex4.png")

}

function setup() {
  createCanvas(400, 400);
  trex = createSprite(200,200,30,20)
  trex.addAnimation("trex1",trexRunning);
  trex.scale = 0.6
  ground = createSprite(200,390,400,10);

}

function draw() {
  background(220);
  if(keyDown("space")){
  trex.velocityY = -10
  }
  trex.velocityY = trex.velocityY+1
  
  trex.collide(ground)
  
  
  drawSprites();
}