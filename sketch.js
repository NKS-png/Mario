var mario;
var back;
var iwall;
var coin;
var cloud;
var coinGroup;
var obstacle;
var obstaclee;
var obstacleee;
var obsGroup,obs2Group,obs3Group;
var go;


function preload(){
  mario_running = loadAnimation("Capture1.png","Capture3.png","Capture4.png");
  backk = loadImage("backg.jpg");
  coinn = loadImage("coin.png");
  cloudd = loadImage("cloud.png");
  coins = loadSound("coin.wav");
  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  gO = loadImage("gameOver.png");
}

function setup(){
createCanvas(600,400);

mario = createSprite(50,310,10,10)
mario.addAnimation("1",mario_running);
mario.scale=0.5

back = createSprite(300,200,20,20);
back.addImage("2",backk)
back.scale=0.7

iwall=createSprite(200,350,900,10);
iwall.visible=false;

coinGroup = new Group();
obsGroup = new Group();
obs2Group = new Group();
obs3Group = new Group();

}
function draw(){
background("cyan");
back.velocityX=-3;
mario.depth=back.depth;
mario.depth=mario.depth+1;

if(back.x<30){
  back.x=300;
  back.velocityX=-3;
}
if(keyDown("space")&& mario.y>200){
  mario.velocityY=-16;
}
if(coinGroup.isTouching(mario)){
  coinGroup.destroyEach()
  coins.play()
}
if(obsGroup.isTouching(mario)||obs2Group.isTouching(mario)||obs3Group.isTouching(mario)){
  mario.x=-50;
  obsGroup.setVelocityXEach(0);
  obs2Group.setVelocityXEach(0);
  obs3Group.setVelocityXEach(0);
  back.velocityX=0;
  obsGroup.destroyEach(0);
  obs2Group.destroyEach(0);
  obs3Group.destroyEach(0);

  go= createSprite(300,200)
  go.addImage("10",gO)
}
coinnnn()
cloudy()
var ram =Math.round(random(1,3));
if(ram===1){
  obs1()
}else if(ram===2){
  obs2()
}else if(ram===3){
  obs3()
}
mario.velocityY = mario.velocityY + 0.8
mario.collide(iwall);

drawSprites();
if(mario.x===-50){
text("Press R To Reset",300,250)
}
if(keyDown("r")&& mario.x===-50){
  mario.x=50;
  mario.y=310
  obsGroup.destroyEach(0);
  obs2Group.destroyEach(0);
  obs3Group.destroyEach(0);
  go.destroy()
}
}
function coinnnn(){
  if(frameCount %200===0){
  coin = createSprite(620,Math.round(random(250,200)),10,10);
  coin.velocityX=-3
  coin.addImage("3",coinn);
  coin.scale=0.2;
  coin.lifetime=400;
  coinGroup.add(coin);
  }
}
function cloudy(){
  if(frameCount%60===0){
  cloud = createSprite(650,Math.round(random(20,100)),10,10)
  cloud.velocityX=-3;
  cloud.addImage("5",cloudd)
  cloud.scale=0.1
  cloud.lifetime=400;
  }
}
function obs1(){
  if(frameCount %110===0){
   obstacle = createSprite(620,300)
   obstacle.velocityX=-6;
   obstacle.addImage("6",obstacle1)
   obstacle.scale=0.35
   obstacle.lifetime = 500;
   obsGroup.add(obstacle);
  }
}
function obs2(){
  if(frameCount %110===0){
   obstaclee = createSprite(620,315)
   obstaclee.velocityX=-6;
   obstaclee.addImage("6",obstacle2)
   obstaclee.scale=0.35
   obstaclee.lifetime = 500;
   obs2Group.add(obstaclee);
  }
}
function obs3(){
  if(frameCount %110===0){
   obstacleee = createSprite(620,315)
   obstacleee.velocityX=-6;
   obstacleee.addImage("6",obstacle3)
   obstacleee.scale=0.35
   obstacleee.lifetime = 500;
   obs3Group.add(obstacleee);
  }
}