
var bird
var obstacle1Group;
var obstacle2Group;
var obstacle3Group;
var obstacle4Group;
var gameState;

var back,flappyBirdImage;
var gameOverImage;
var obstacles1,obstacles2,obstacle3,obstacle4;
function preload(){
  
  back=loadImage("blueSky.jpg")
  gameOverImage=loadImage("game.png");
  flappyBirdImage=loadImage("flappyBird.png");
 
}
function setup() {
  createCanvas(900,400);
  obstacle1Group=new Group();
  obstacle2Group=new Group();
  obstacle3Group=new Group();
  obstacle4Group=new Group();
  
 bird=createSprite(50,200,30,30);
 bird.addImage("flappyBird",flappyBirdImage);
 bird.scale=0.2;
 gameState="PLAY";


 
}

function draw() {
  background(back);
  //bird.debug=true;
  bird.setCollider("rectangle",0,0,300,300);
  
  if(gameState==="PLAY"){
    if(keyDown("space")){
      bird.velocityY=-4;
     }
    bird.velocityY=bird.velocityY+0.8;
    spawnObstacle();
    spawnBottomObstacle();
    
    if(obstacle1Group.collide(bird)||obstacle2Group.collide(bird)||obstacle3Group.collide(bird)||obstacle4Group.collide(bird)){
     gameState="END";
    }
    if(bird.y>400){
      gameState="END";
    }
  }
    if(gameState==="END"){
      gameOver=createSprite(500,200,20,20);

      gameOver.addImage("gameOver",gameOverImage);
      gameOver.scale=0.1;
      
      obstacle1Group.setVelocityXEach(0);
      obstacle2Group.setVelocityXEach(0);
      obstacle3Group.setVelocityXEach(0);
      obstacle4Group.setVelocityXEach(0);
      


    }
  
 
  
 drawSprites();
}
function spawnObstacle(){
  if(frameCount%50===0){
    obstacles1=createSprite(900,0,20,random(300,400));
    obstacles1.velocityX=-3;
    obstacles1.shapeColor="red";
    obstacle1Group.add(obstacles1);
  console.log(obstacles1.height);
   
  obstacles2=createSprite(850,0,20,random(250,350));
  obstacles2.velocityX=-3;
  obstacles2.shapeColor="yellow";
  obstacle2Group.add(obstacles2);
  console.log(obstacles2.height);
  }
}
function spawnBottomObstacle(){
  if(frameCount%50===0){
    obstacle3=createSprite(900,400,20,random(200,300));
  obstacle3.velocityX=-3;
  obstacle3.shapeColor="green";
  obstacle3Group.add(obstacle3);
  console.log(obstacle3.height);

  obstacle4=createSprite(850,400,20,random(150,250));
  obstacle4.velocityX=-3;
  obstacle4.shapeColor="pink";
  obstacle4Group.add(obstacle4);
  console.log(obstacle4.height);
  }
}