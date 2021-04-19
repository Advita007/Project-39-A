var PLAY1 = 1 
var PLAY2 = 2
var PLAY3 = 3
var PLAY4 = 4
var END1 = 0
var END2 = 0.5
var END3 = 0.6
var END4  = 0.7
var STOP = 0.8;

var INTRO;
var gameState = INTRO;

var trex, trex_1, trex_2, trex_3;
var ground, invisibleGround, groundImage;

var cloudsGroup, cloudImage;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;




var gameOverRed, gameOverGreen, gameOverTurquoise, gameOverPurple, restart;
var restart, restart1, restart2, restart3;
var level1, level2, level3, level4;

var bg;

var score = 0;

var livesLeft1 = 3;

var diamond, diamond_Img;


localStorage["HighestScore"] = 0;

function preload(){
  trex_Img = loadImage("Trex.png");
  trex_1_Img = loadImage("Trex_1.png");
  trex_2_Img = loadImage("Trex_2.png");
  trex_3_Img = loadImage("Trex_3.png");

  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
  
  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
  obstacle5 = loadImage("obstacle5.png");
  obstacle6 = loadImage("obstacle6.png");
  
  gameOverGreenImg = loadImage("Game Over Green.png");
  gameOverRedImg = loadImage("Game Over Red.png");
  gameOverTurquoiseImg = loadImage("Game Over turquoise.png");
  gameOverPurpleImg = loadImage("Game Over Purple.png");

  restartImg = loadImage("restart.png");
  restart1Img = loadImage("restart1.png");
  restart2Img = loadImage("restart2.png");
  restart3Img = loadImage("restart4.png");

  Start_Img = loadImage("Start.png");
  Start1_Img = loadImage("Start1.png");
  Start2_Img = loadImage("Start2.png");
  Start3_Img = loadImage("Start3.png");

  level1_Img = loadImage("Fire Level 1.png");
  level2_Img = loadImage("Fire Level 2.png");
  level3_Img = loadImage("Fire Level 3.png");
  level4_Img = loadImage("Fire Level 4.png");

  diamond_Img = loadImage("Diamond.png");
  bg = loadImage("Bg.jpg");
}

function setup() {
  createCanvas(1500, 700);
  
  trex = createSprite(400,230,20,50);
  trex.visible = false;
  trex.scale = 0.5;
  trex_1 = createSprite(1000,230,20,50);
  trex_1.visible = false;
  trex_1.scale = 0.5;
  trex_2 = createSprite(400,430,50,50);
  trex_2.visible = false;
  trex_2.scale = 0.65;
  trex_3 = createSprite(1000,430,20,50);
  trex_3.visible = false;
  trex_3.scale = 0.65;


  Start = createSprite(300,600,50,50);
  Start.addImage("trex", Start_Img);
  Start.visible = false;
  Start.scale = 0.65;

  Start1 = createSprite(550,600,50,50);
  Start1.addImage("trex_1", Start1_Img);
  Start1.visible = false;
  Start1.scale = 0.65;

  Start2 = createSprite(800,600,50,50);
  Start2.addImage("trex_2", Start2_Img);
  Start2.visible = false;
  Start2.scale = 0.65;

  Start3 = createSprite(1050,600,50,50);
  Start3.addImage("trex_3", Start3_Img);
  Start3.visible = false;
  Start3.scale = 0.65;

  trex.addImage("green", trex_Img);
  trex_1.addImage("turquoise", trex_1_Img);
  trex_2.addImage("red", trex_2_Img);
  trex_3.addImage("purple", trex_3_Img);
  trex.scale = 0.55;

  
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -(6 + 3*score/100);
  ground.visible = false;
  
  gameOverRed = createSprite(300,100);
  gameOverRed.addImage(gameOverRedImg);

  gameOverGreen = createSprite(300,100);
  gameOverGreen.addImage(gameOverGreenImg);

  gameOverPurple = createSprite(300,100);
  gameOverPurple.addImage(gameOverPurpleImg);

  gameOverTurquoise = createSprite(300,100);
  gameOverTurquoise.addImage(gameOverTurquoiseImg);

  restart = createSprite(300,140);
  restart.addImage(restartImg);

  restart1 = createSprite(300,140);
  restart1.addImage(restart1Img);

  restart2 = createSprite(300,140);
  restart2.addImage(restart2Img);

  restart3 = createSprite(300,140);
  restart3.addImage(restart3Img);
  
  gameOverRed.scale = 0.5;
  gameOverGreen.scale = 0.5;
  gameOverPurple.scale = 0.5;
  gameOverTurquoise.scale = 0.5;

  restart.scale = 0.5;
  restart1.scale = 0.5;
  restart2.scale = 0.5;
  restart3.scale = 0.5;

  gameOverRed.visible = false;
  gameOverGreen.visible = false;
  gameOverPurple.visible = false;
  gameOverTurquoise.visible = false;

  restart.visible = false;
  restart1.visible = false;
  restart2.visible = false;
  restart3.visible = false;

  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  cloudsGroup = new Group();
  obstaclesGroup = new Group();

  level1 = createSprite(200,175,10,10);
  level1.addImage(level1_Img);
  level1.scale = 0.65;
  level1.visible = false;

  level2 = createSprite(800,195,10,10);
  level2.addImage(level2_Img);
  level2.scale = 0.65;
  level2.visible = false;

  level3 = createSprite(225,375,10,10);
  level3.addImage(level3_Img);
  level3.scale = 0.65;
  level3.visible = false;

  level4 = createSprite(800,375,10,10);
  level4.addImage(level4_Img);
  level4.scale = 0.65;
  level4.visible = false;

  diamond = createSprite(1300,50,10,10);
  diamond.addImage(diamond_Img);
  diamond.scale = 0.15;

  score = 0;
  livesLeft = 0;

}


function draw() {
  //trex.debug = true;
  background(bg);
  fill("black");
  textSize(25);
  textFont("Rockwell");
  
  text("Lives Left : " + livesLeft1, 1000, 100)
  


  ground.debug = true;

  

  if(gameState === INTRO){
  
    text("Welcome to the New and Challenging T-rex Game 😀!", 400, 40);
    text("This game has different levels. You can choose any level and play the game by clicking on the start button which has the colour", 30, 70);
    text("of your T-Rex!", 600, 100);
    text("Tip: Its a good idea to choose Level 4!", 475, 130);
    trex.visible = true;
    trex_1.visible = true;
    trex_2.visible = true;
    trex_3.visible = true;
    Start.visible = true;
    Start1.visible = true;
    Start2.visible = true;
    Start3.visible = true;
    level1.visible = true;
    level2.visible = true;
    level3.visible = true;
    level4.visible = true;
  

  }
 

  if(mousePressedOver(Start)){
   
    gameState = PLAY1;
    //score = 0;
  }
  if(mousePressedOver(Start1)){
    score = 0
    gameState = PLAY2;
  }
  if(mousePressedOver(Start2)){
    score = 0
    gameState = PLAY3;
  }
  if(mousePressedOver(Start3)){
    score = 0
    gameState = PLAY4;
  }



  if (gameState===PLAY1){
    console.log(trex.y);
   
    trex.y = 138;
    trex.x = 80;
    trex.scale = 0.3;
    console.log(ground.y);
    trex.visible = true;
    ground.visible = true;
    trex_1.visible = false;
    trex_2.visible = false;
    trex_3.visible = false;
    Start.visible = false;
    Start1.visible = false;
    Start2.visible = false;
    Start3.visible = false;
    level1.visible = false;
    level2.visible = false;
    level3.visible = false;
    level4.visible = false;
     
   text("Score: "+ score, 800,40); 
   score = score + 1
   ground.velocityX = -(6 + 3*score/100);
  
    if(keyDown("space")||keyDown("UP_ARROW")) {
      trex.y = trex.y-115;
    }
  
    trex.velocityY = trex.velocityY + 0.8
    trex.debug = true;
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    trex.collide(invisibleGround);
    spawnClouds();
    spawnObstacles();
  
    
    
     if(obstaclesGroup.isTouching(trex) && livesLeft1!==0){
      stop();
     }
      if(mousePressedOver(diamond) && livesLeft1!==0){
      livesLeft1 = livesLeft1 - 1;
      play();
    }


  if(obstaclesGroup.isTouching(trex) && livesLeft1 === 0){
  gameState = END1
  
}
console.log(gameState);


  }
     
  else if (gameState === END1) {
    gameOverGreen.visible = true;
    restart.visible = true;
    
    
    //set velcity of each game object to 0
    ground.velocityX = 0;
    trex.velocityY = 0;
    obstaclesGroup.setVelocityXEach(0);
    cloudsGroup.setVelocityXEach(0);
    
    //set lifetime of the game objects so that they are never destroyed
    obstaclesGroup.setLifetimeEach(-1);
    cloudsGroup.setLifetimeEach(-1);
    
    if(mousePressedOver(restart)) {
      reset1();
    }
  }

 
  


 if(gameState===PLAY2){
  console.log(trex_1.y);
  text("Score: "+ score, 800,40);
  trex_1.y = 180;
  trex_1.x = 60;
  trex_1.scale = 0.25;
  console.log(ground.y);
  trex_1.visible = true;
  ground.visible = true;
  trex.visible = false;
  trex_2.visible = false;
  trex_3.visible = false;
  Start.visible = false;
  Start1.visible = false;
  Start2.visible = false;
  Start3.visible = false;
  level1.visible = false;
  level2.visible = false;
  level3.visible = false;
  level4.visible = false;

  score = score + 1
  ground.velocityX = -(6 + 3*score/100);

  if(keyDown("space")||keyDown("UP_ARROW")) {
    trex_1.y = trex_1.y-125;
  }

  //trex.velocityY = trex.velocityY + 0.8
  trex_1.debug = true;

  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  trex_1.collide(invisibleGround);
  spawnClouds();
  spawnObstacles();
  

  if(obstaclesGroup.isTouching(trex_1)){
      gameState = END2;
  
  }
}
else if (gameState === END2) {
  gameOverGreen.visible = false;
  gameOverTurquoise.visible = true;
  restart.visible = false;
  restart1.visible = true;
  //text("Oops! Game Over! No worries, Press Enter to restart!",200,100)
  trex.visible = false;
  
  //set velcity of each game object to 0
  ground.velocityX = 0;
  trex_1.velocityY = 0;
  obstaclesGroup.setVelocityXEach(0);
  cloudsGroup.setVelocityXEach(0);
  
  //set lifetime of the game objects so that they are never destroyed
  obstaclesGroup.setLifetimeEach(-1);
  cloudsGroup.setLifetimeEach(-1);
  
  if(mousePressedOver(restart1)) {
    reset2();
  }
}

if(gameState===PLAY3){
  console.log(trex_2.y);
  text("Score: "+ score, 800,40);
  trex_2.y = 180;
  trex_2.x = 60;
  trex_2.scale = 0.35;
  console.log(ground.y);
  trex_2.visible = true;
  ground.visible = true;
  trex.visible = false;
  trex_1.visible = false;
  trex_3.visible = false;
  Start.visible = false;
  Start1.visible = false;
  Start2.visible = false;
  Start3.visible = false;
  level1.visible = false;
  level2.visible = false;
  level3.visible = false;
  level4.visible = false;
  score = score + 1
  ground.velocityX = -(6 + 3*score/100);

  if(keyDown("space")||keyDown("UP_ARROW")) {
    trex_2.y = trex_2.y-125;
  }

  //trex.velocityY = trex.velocityY + 0.8
  trex_2.debug = true;

  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  trex_2.collide(invisibleGround);
  spawnClouds();
  spawnObstacles();
  

  if(obstaclesGroup.isTouching(trex_2)){
      gameState = END3;
  }
}
else if (gameState === END3) {
  gameOverGreen.visible = false;
  gameOverTurquoise.visible = false;
  gameOverRed.visible = true;
  restart1.visible = false;
  restart2.visible = true;
  //text("Oops! Game Over! No worries, Press the R key to restart!",200,100)
  trex.visible = false;
  
  //set velcity of each game object to 0
  ground.velocityX = 0;
  trex_1.velocityY = 0;
  obstaclesGroup.setVelocityXEach(0);
  cloudsGroup.setVelocityXEach(0);
  
  //set lifetime of the game objects so that they are never destroyed
  obstaclesGroup.setLifetimeEach(-1);
  cloudsGroup.setLifetimeEach(-1);
  
  if(mousePressedOver(restart2)) {
    reset3();
  }
}
if(gameState===PLAY4){
  console.log(trex_3.y);
   text("Score: "+ score, 800,40);
  trex_3.y = 180;
  trex_3.x = 80;
  trex_3.scale = 0.35;
  console.log(ground.y);
  trex_3.visible = true;
  ground.visible = true;
  trex.visible = false;
  trex_1.visible = false;
  trex_2.visible = false;
  Start.visible = false;
  Start1.visible = false;
  Start2.visible = false;
  Start3.visible = false;
  level1.visible = false;
  level2.visible = false;
  level3.visible = false;
  level4.visible = false;

  score = score + 1
  ground.velocityX = -(6 + 3*score/100);

  if(keyDown("space")||keyDown("UP_ARROW")) {
    trex_3.y = trex_3.y-125;
  }

  //trex.velocityY = trex.velocityY + 0.8
  trex_3.debug = true;

  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  trex_3.collide(invisibleGround);
  spawnClouds();
  spawnObstacles();
  

  if(obstaclesGroup.isTouching(trex_3)){
      gameState = END4;
  }
}
else if (gameState === END4) {
  gameOverGreen.visible = false;
  gameOverTurquoise.visible = false;
  gameOverRed.visible = false;
  gameOverPurple.visible = true;
  restart.visible = false;
  restart1.visible = false;
  restart2.visible = false;
  restart3.visible = true;
  //text("Oops! Game Over! No worries, Press the A key to restart!",200,100)
  trex.visible = false;
  
  //set velcity of each game object to 0
  ground.velocityX = 0;
  trex_3.velocityY = 0;
  obstaclesGroup.setVelocityXEach(0);
  cloudsGroup.setVelocityXEach(0);
  
  //set lifetime of the game objects so that they are never destroyed
  obstaclesGroup.setLifetimeEach(-1);
  cloudsGroup.setLifetimeEach(-1);
  
  if(mousePressedOver(restart3)) {
    reset4();
  }
}


drawSprites();
}


function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var cloud = createSprite(600,120,40,10);
    cloud.debug = true;
    cloud.y = Math.round(random(80,120));
    cloud.addImage(cloudImage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 200;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    cloudsGroup.add(cloud);
  }
  
}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    obstacle.debug = true;
    obstacle.velocityX = -(6 + 3*score/100);
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
              break;
      case 5: obstacle.addImage(obstacle5);
              break;
      case 6: obstacle.addImage(obstacle6);
              break;
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}

function reset1(){
  gameState = PLAY1;
  gameOverGreen.visible = false;
  restart.visible = false;
  restart1.visible = false;
  restart2.visible = false;
  restart3.visible = false;
  livesLeft1 = 3;
  
  obstaclesGroup.destroyEach();
  cloudsGroup.destroyEach();
  
 
  
  if(localStorage["HighestScore"]<score){
    localStorage["HighestScore"] = score;
  }
  console.log(localStorage["HighestScore"]);
  
  score = 0;
  
}

function reset2(){
  gameState = PLAY2;
  gameOverGreen.visible = false;
  gameOverTurquoise.visible = false;
  restart.visible = false;
  restart1.visible = false;
  restart2.visible = false;
  restart3.visible = false;
  
  obstaclesGroup.destroyEach();
  cloudsGroup.destroyEach();
  
 
  
  if(localStorage["HighestScore"]<score){
    localStorage["HighestScore"] = score;
  }
  console.log(localStorage["HighestScore"]);
  
  score = 0;
  
}
function reset3(){
  gameState = PLAY3;
  gameOverGreen.visible = false;
  gameOverTurquoise.visible = false;
  gameOverRed.visible = false;
  restart.visible = false;
  restart1.visible = false;
  restart2.visible = false;
  restart3.visible = false;
  obstaclesGroup.destroyEach();
  cloudsGroup.destroyEach();
  
 
  
  if(localStorage["HighestScore"]<score){
    localStorage["HighestScore"] = score;
  }
  console.log(localStorage["HighestScore"]);
  
  score = 0;
  
}
function reset4(){
  gameState = PLAY4;
  gameOverGreen.visible = false;
  gameOverTurquoise.visible = false;
  gameOverRed.visible = false;
  gameOverPurple.visible = false;

  restart.visible = false;
  restart1.visible = false;
  restart2.visible = false;
  restart3.visible = false;
  
  obstaclesGroup.destroyEach();
  cloudsGroup.destroyEach();
  
 
  
  if(localStorage["HighestScore"]<score){
    localStorage["HighestScore"] = score;
  }
  console.log(localStorage["HighestScore"]);
  
  score = 0;
  
}
function stop(){
    ground.velocityX=0
    obstaclesGroup.setVelocityXEach (0);
    cloudsGroup.setVelocityXEach(0);
    cloudsGroup.setLifetimeEach(-1);
    obstaclesGroup.setLifetimeEach(-1);
    score = 0;
    }
    function play(){
      ground.velocityX= -(6 + 3*score/100);
      obstaclesGroup.setVelocityXEach-(6 + 3*score/100);
      cloudsGroup.setVelocityXEach(-3);
      cloudsGroup.setLifetimeEach(-1);
      obstaclesGroup.setLifetimeEach(-1);
      
      }
  
