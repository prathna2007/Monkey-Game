
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score = 0;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
createCanvas (600,400);
  
  monkey = createSprite (80,315,20,20);
  monkey.addAnimation("m",monkey_running);
  monkey.scale = 0.1;
  

  ground = createSprite (400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
}


function draw() {
  
  background (255);
  stroke ("white");
  textSize (20);
  fill ("white");
  text ("Score:"+ score,500,50);
  
  stroke ("black");
  textSize (20);
  fill ("black");
  text ("Survival Time:"+survivalTime,100,50);
  
  drawSprites();
  
}






