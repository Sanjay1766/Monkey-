
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
 
  //create monkey
  monkey = createSprite(100,200);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;

  
  //create ground,invisible ground
  ground = createSprite(250,228,1000,10);
  ground.veloxityX = 10;
  invisibleGround = createSprite(200,230,400,10);
  invisibleGround.visible = false;
  
  obstacle = createSprite(268,205);
  obstacle.addImage(obstaceImage);
  obstacle.scale = 0.1;
  obstacle.velocityX = 5;
  obstacle.lifeTime = 100;
  
  
  
  
  

  
}


function draw() {
  
background("blue");
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  text("Score: "+ score, 500,50);
  
  //making the monkey collide with the ground
  monkey.collide(invisibleGround);
  
  //making the trex jump
  if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -12;    
    
    }
  
  spawnObstacle();
  spawnBanana();
  
  var survivalTime=0;
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score: "+score,500,50 );
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100,50);
  
  
  drawSprites();

  
}


function spawnObstacle() {
  //write code here to spawn the clouds
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(268,205);
    obstacle.addImage(obstaceImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    
  }
}

function spawnBanana() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    var banana = createSprite(194,84);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
     banana.velocityX = -3;
     banana.y = Math.round(random(80,120));
    banana.lifeTime = 100;
   
    
  }
}










