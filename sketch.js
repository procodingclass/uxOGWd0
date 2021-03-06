var PLAY = 1;
var END = 0;
var gameState = PLAY;

var trex, trexRunning;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;
var obstaclesGroup,
  obstacle1,
  obstacle2,
  obstacle3,
  obstacle4,
  obstacle5,
  obstacle6;

var score;

function preload() {
  trexRunning = loadAnimation("trex1.png", "trex2.png", "trex3.png");
  groundImage = loadImage("ground2.png");
  cloudImage = loadImage("cloud.png");

  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
  obstacle5 = loadImage("obstacle5.png");
  obstacle6 = loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50, 180, 20, 50);
  trex.addAnimation("running", trexRunning);
  trex.scale = 0.5;

  ground = createSprite(200, 180, 400, 20);
  ground.addImage("ground", groundImage);
  ground.x = ground.width / 2;
  ground.velocityX = -4;

  invisibleGround = createSprite(200, 190, 400, 10);
  invisibleGround.visible = false;

  // create Obstacles and Cloud groups
  obstaclesGroup = new Group();
  cloudsGroup = new Group();

  score = 0;
}

function draw() {
  background(180);
  
  if (gameState === PLAY) {
    //move the ground
    ground.velocityX = -4;

    
    // Add infinte Ground ( Copy the code block from below)
    //Hint : Checkout step 2 image inside screenshots folder



    // Trex Jump ( Copy the code block from below)
    //Hint : Checkout step 3 image inside screenshots folder



    //spawn the clouds ( Copy the code block from below)
    //Hint : Checkout step 4 image inside screenshots folder


    //Change game state when trex collide with obstacle
    //Hint : Checkout step 5 image inside screenshots folder


  } else if (gameState === END) {
    //stop the ground
    ground.velocityX = 0;

    // set obstaclesGroup velocity to 0
    //Hint : Checkout step 6 image inside screenshots folder


  }

  // Add infinte Ground
  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  // Trex Jump
  if (keyDown("space") && trex.y >= 100) {
    trex.velocityY = -12;
  }

  //add Gravity
  trex.velocityY = trex.velocityY + 0.8;

  //spawn the clouds
  spawnClouds();

  //spawn obstacles on the ground
  spawnObstacles();

  trex.collide(invisibleGround);

  drawSprites();
}

function spawnObstacles() {
  if (frameCount % 60 === 0) {
    var obstacle = createSprite(600, 165, 10, 40);
    obstacle.velocityX = -6;

    // //generate random obstacles
    var rand = Math.round(random(1, 6));
    switch (rand) {
      case 1:
        obstacle.addImage(obstacle1);
        break;
      case 2:
        obstacle.addImage(obstacle2);
        break;
      case 3:
        obstacle.addImage(obstacle3);
        break;
      case 4:
        obstacle.addImage(obstacle4);
        break;
      case 5:
        obstacle.addImage(obstacle5);
        break;
      case 6:
        obstacle.addImage(obstacle6);
        break;
      default:
        break;
    }

    //assign scale and lifetime to the obstacle
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;

    //adding obstacles to the group
    obstaclesGroup.add(obstacle);
  }
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600, 100, 40, 10);
    cloud.y = Math.round(random(10, 60));
    cloud.addImage(cloudImage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;

    //assign lifetime to the variable
    cloud.lifetime = 134;

    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;

    //adding cloud to the group
    cloudsGroup.add(cloud);
  }
}
