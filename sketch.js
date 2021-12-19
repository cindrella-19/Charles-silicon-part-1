
var gameState = "start";

var welcomePage, welcomePageImg;
var playButton, playButtonImg;
var controlButton, controlButtonImg, controlInformation, controlInformationImg;
var closeButton, closeButtonImg;
var storyButton, storyButtonImg, story, storyImg;
//----------------------------------------------------------------------------------------
var gameSound;
//----------------------------------------------------------------------------------------
var scoreImg;
var oneScore = 0;
var twoScore = 0;
var threeScore = 0
//----------------------------------------------------------------------------------------
var edges;
//----------------------------------------------------------------------------------------

//these are common for everything levels
var FinishFlagImg;
var FinishFlagTouchingSound;
var levellockImg;
var heartImg;
var jumpObImg;
//----------------------------------------------------------------------------------------
var forest, forestImg;
var InsLevelOneGround;
var InsLevelOneTrack1, InsLevelOneTrack2, InsLevelOneTrack3;
var levelOneTrackImg;
var levelOneGem1, levelOneGem2, levelOneGem3, levelOneGem4,
    levelOneGem5, levelOneGem6, levelOneGem7, levelOneGem8,
    levelOneGem9, levelOneGem10, levelOneGem11;
var levelOneGem1Img, levelOneGem2Img, levelOneGem3Img, levelOneGem4Img, levelOneGem5Img;
var FinishFlagInswall;
//----------------------------------------------------------------------------------------


//---------------------------------------------------------------------------------------------------------
var player;
var player1;
var player2;
var playerStand;
var playerSideWays;
//-----------------------------------------------------------------------------------------------------------
var treasure,treasure1,treasure2;
var treasureImg;
var treausreCollectingSound;

function preload(){
    //welcomepage;
           welcomePageImg = loadImage("images/backgrounds/background4.jpg");

    //level-1 images;
           forestImg = loadImage("images/backgrounds/background3.jpg");
           levelOneTrackImg = loadImage("images/track/rockPath.png");

    //scoreimg;
           scoreImg = loadImage("images/gems/point.png");
    //FLAG;
           FinishFlagImg = loadImage("images/flags/finishflag.png");
    //lockImg;
           levellockImg = loadImage("images/track/lock.png"); 
    //lockkeyimg;      
           levellockKeyImg = loadImage("images/key.png");   
           
          

    // endPage images;
           endImg = loadImage("images/backgrounds/endpage.png");       

    //character
           playerStand = loadImage("images/c/PIRATE1.png");
           playerSideWays = loadAnimation("images/c/PIRATE4.png");

    //buttons;
          playButtonImg = loadImage("images/buttons/playred.png");
          controlButtonImg = loadImage("images/buttons/controlred.jpg");
          controlInformationImg = loadImage("images/backgrounds/arrowkeys.png");
          closeButtonImg = loadImage("images/buttons/close button.png");
          storyButtonImg = loadImage("images/buttons/storyred.jpg");
          storyImg = loadImage("images/backgrounds/map.jpg");


    //loading gems images;
          levelOneGem1Img = loadImage("images/gems/line1gem1.png");
          levelOneGem2Img = loadImage("images/gems/line1gem2.png");
          levelOneGem3Img = loadImage("images/gems/line1gem3.png");
          levelOneGem4Img = loadImage("images/gems/line1gem4.png");
          levelOneGem5Img = loadImage("images/gems/line1gem5.png");

        

    //treasure;
          treasureImg = loadImage("images/t/treasureImg.png");

    //soundloading-------------------------------------------------------------
   
      gameSound = loadSound("images/sounds/startS.mp3");
      loseSound = loadSound("images/sounds/lose.mp3");
      crystalCollectSound = loadSound("images/sounds/collect.mp3");
      treausreCollectingSound = loadSound("images/sounds/treasureCollectingSound.mp3");
      prisonOpenSound = loadSound("images/sounds/prisonopen.wav");
      FinishFlagTouchingSound = loadSound("images/sounds/finishsound.wav");
      blackHoleSound = loadSound("images/sounds/blackholesound.wav");
      burningSound = loadSound("images/sounds/burningSound.mp3");

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  edges = createEdgeSprites();

  gameSound.loop();
  
  start();
  controlPageSprite();
  storyPageSprite();
  levelOneSprite();
 // levelTwoSprite();
 // levelThreeSprite();
  EndSprite();

}

function draw() {
  background(0);
  drawSprites();  

  if(gameState === "start"){
       stroke("black");
       strokeWeight(4);
       fill("orange");
       textSize(70);
       textFont("monotype corsiva");
       text("Pirates Caribbean World",windowWidth-1100,windowHeight-520);
       startlevel();
  }

  if(gameState === "level-1"){
       levelOne();   
  }

 
  if(gameState === "control"){
       controlPage();
  }

  if(gameState === "story"){
       storyPage();
  }
  
  if(gameState === "end"){
     End();
  }

}

function start(){
  welcomePage = createSprite(width/2,height/2+100,windowWidth,windowHeight);
  welcomePage.addImage("welcomepage",welcomePageImg);
  welcomePage.scale = 0.8;
  welcomePage.visible = false;

  playButton = createSprite(windowWidth-770,windowHeight-350);
  playButton.addImage("startbutton",playButtonImg);
  playButton.scale = 0.2;
  playButton.visible = false;

  controlButton = createSprite(windowWidth-770,windowHeight-220);
  controlButton.addImage("controlsArea",controlButtonImg);
  controlButton.scale = 0.1;
  controlButton.visible = false;

  storyButton = createSprite(windowWidth-770,windowHeight-100);
  storyButton.addImage("storyInformation",storyButtonImg);
  storyButton.scale = 0.2;
  storyButton.visible = false;

  //introSound.play();

}

function controlPageSprite(){

  controlInformation = createSprite(width/2,height/2,windowWidth,windowHeight);
  controlInformation.addImage(controlInformationImg);
  controlInformation.visible = false;

  closeButton = createSprite(windowWidth-100,windowHeight-550,50,50);
  closeButton.addImage("option",closeButtonImg);
  closeButton.scale = 0.3;
  closeButton.visible = false;

}
function storyPageSprite(){

  story = createSprite(width/2-350,height/2-130);
  story.addImage(storyImg);
  story.visible = false;

}
function levelOneSprite(){
  forest = createSprite(width/2,height/2,windowWidth,windowHeight);
  forest.addImage("level-1",forestImg);
  forest.scale = 1;
  forest.visible = false;

  player = createSprite(windowWidth-1300,windowHeight-600,50,50);
  player.addAnimation("running",playerStand);  
  player.scale = 0.4;
  player.visible = false;

  InsLevelOneGround = createSprite(windowWidth-775 ,windowHeight-10,1550,30);
  InsLevelOneGround.shapeColor = "red";
  InsLevelOneGround.visible = false;

  InsLevelOneTrack1 = createSprite(windowWidth-1207,windowHeight-475,300,30);
  InsLevelOneTrack2 = createSprite(windowWidth-600,windowHeight-300,300,30);
  InsLevelOneTrack3 = createSprite(windowWidth-300,windowHeight-300,300,30);

  InsLevelOneTrack1.visible = false;
  InsLevelOneTrack2.visible = false;
  InsLevelOneTrack3.visible = false;

  levelOneGem1 = createSprite(windowWidth-1100,windowHeight-510,20,20);
  levelOneGem1.addImage(levelOneGem1Img);
  levelOneGem1.scale = 0.5;
  levelOneGem1.visible = false;

  levelOneGem2 = createSprite(windowWidth-1112,windowHeight-60,20,20);
  levelOneGem2.addImage(levelOneGem2Img);
  levelOneGem2.scale = 0.5;
  levelOneGem2.visible = false;

  levelOneGem3 = createSprite(windowWidth-1080,windowHeight-60,20,20);
  levelOneGem3.addImage(levelOneGem3Img);
  levelOneGem3.scale = 0.5;
  levelOneGem3.visible = false;

  levelOneGem4 = createSprite(windowWidth-1050,windowHeight-60,20,20);
  levelOneGem4.addImage(levelOneGem4Img);
  levelOneGem4.scale = 0.5;
  levelOneGem4.visible = false;

  levelOneGem5 = createSprite(windowWidth-800,windowHeight-60,20,20);
  levelOneGem5.addImage(levelOneGem5Img);
  levelOneGem5.scale = 0.5;
  levelOneGem5.visible = false;

  levelOneGem6 = createSprite(windowWidth-770,windowHeight-60,20,20);
  levelOneGem6.addImage(levelOneGem1Img);
  levelOneGem6.scale = 0.5;
  levelOneGem6.visible = false;

  levelOneGem7 = createSprite(windowWidth-740,windowHeight-60,20,20);
  levelOneGem7.addImage(levelOneGem2Img);
  levelOneGem7.scale = 0.5;
  levelOneGem7.visible = false;

  levelOneGem8 = createSprite(windowWidth-600,windowHeight-60,20,20);
  levelOneGem8.addImage(levelOneGem3Img);
  levelOneGem8.scale = 0.5;
  levelOneGem8.visible = false;

  levelOneGem9 = createSprite(windowWidth-470,windowHeight-60,20,20);
  levelOneGem9.addImage(levelOneGem4Img);
  levelOneGem9.scale = 0.5;
  levelOneGem9.visible = false;

  levelOneGem10 = createSprite(windowWidth-440,windowHeight-60,20,20);
  levelOneGem10.addImage(levelOneGem5Img);
  levelOneGem10.scale = 0.5;
  levelOneGem10.visible = false;

  levelOneGem11 = createSprite(windowWidth-410,windowHeight-60,20,20);
  levelOneGem11.addImage(levelOneGem3Img);
  levelOneGem11.scale = 0.5;
  levelOneGem11.visible = false;

  treasure = createSprite(windowWidth-450,windowHeight-336,50,50);
  treasure.addImage(treasureImg);
  treasure.scale = 0.15;
  treasure.visible = false;

  FinishFlagInswall = createSprite(windowWidth-80,windowHeight-75,50,100);
  FinishFlagInswall.visible = false;
  
}

function startlevel(){
 
   welcomePage.visible = true;
   playButton.visible = true;
   controlButton.visible = true;
   storyButton.visible = true;
 
   if(mousePressedOver(playButton)){
     gameState = "level-1";
 
   }
   if(mousePressedOver(controlButton)){
        gameState = "control";
   }
   if(mousePressedOver(storyButton)){
        gameState = "story";
   }
   
 }
 
 function controlPage(){
   welcomePage.visible = false;
   playButton.visible = false;
   controlButton.visible = false;
   storyButton.visible = false;
   
   closeButton.visible = true;
   controlInformation.visible = true;
   
   if(mousePressedOver(closeButton)){
      gameState = "start";
      controlInformation.visible = false;
      closeButton.visible = false;
   }
 }
 
 function storyPage(){
   welcomePage.visible = false;
   playButton.visible = false;
   controlButton.visible = false;
   storyButton.visible = false;
 
 
   closeButton.visible = true;
   story.visible = true;
 
   if(mousePressedOver(closeButton)){
      gameState = "start";
      closeButton.visible = false;
      story.visible = false;
   }
   
   textSize(45)
   fill(255,0,0);
   text(" Write story here",windowWidth-600,windowHeight-400);
   
 }
 
 function playerScore(){
 
    if(player.isTouching(levelOneGem1)){
       oneScore = oneScore + 1
       levelOneGem1.destroy();
       crystalCollectSound.play();
    }
    if(player.isTouching(levelOneGem2)){
       oneScore = oneScore + 1
       levelOneGem2.destroy();
       crystalCollectSound.play();
    }
    if(player.isTouching(levelOneGem3)){
       oneScore = oneScore + 1
       levelOneGem3.destroy();
       crystalCollectSound.play();
    }
    if(player.isTouching(levelOneGem4)){
       oneScore = oneScore + 1
       levelOneGem4.destroy();
       crystalCollectSound.play();
    }
    if(player.isTouching(levelOneGem5)){
       oneScore = oneScore + 5;
       levelOneGem5.destroy();
       crystalCollectSound.play();
    }
    if(player.isTouching(levelOneGem6)){
       oneScore = oneScore + 1
       levelOneGem6.destroy();
       crystalCollectSound.play();
    }
    if(player.isTouching(levelOneGem7)){
       oneScore = oneScore + 1
       levelOneGem7.destroy();
       crystalCollectSound.play();
    }
    if(player.isTouching(levelOneGem8)){
       oneScore = oneScore + 1
       levelOneGem8.destroy();
       crystalCollectSound.play();
    }
    if(player.isTouching(levelOneGem9)){
       oneScore = oneScore + 1
       levelOneGem9.destroy();
       crystalCollectSound.play();
    }
    if(player.isTouching(levelOneGem10)){
       oneScore = oneScore + 5;
       levelOneGem10.destroy();
       crystalCollectSound.play();
    }
    if(player.isTouching(levelOneGem11)){
       oneScore = oneScore + 1;
       levelOneGem11.destroy();
       crystalCollectSound.play();
    }
    
    if(oneScore === 19){
      if(player.isTouching(FinishFlagInswall)){
       // gameState = "level-2";
        FinishFlagTouchingSound.play();
     }
    }
    if(oneScore !== 19){
      if(player.isTouching(FinishFlagInswall)){
        textSize(50);
        textFont("cooper");
        fill("red");
        text("Note! Catch all crystals",windowWidth-1000,windowHeight-500);
      }
    }
 
 }
 function levelOne(){
 
   player.collide(edges);
 
   image(scoreImg,windowWidth-1000,windowHeight-700,60,40);
 
   textSize(35)
   fill(255);
   text(" " + oneScore,windowWidth-940,windowHeight-670);
 
   welcomePage.destroy();
   playButton.destroy();
   controlButton.destroy();
   storyButton.destroy();
 
 
   forest.visible = true;
 
   InsLevelOneGround.visible = true;
   
   player.collide(InsLevelOneGround);
   
   player.collide(InsLevelOneTrack1);
   player.collide(InsLevelOneTrack2);
   player.collide(InsLevelOneTrack3);
 
   levelOneGem1.visible = true;
   levelOneGem2.visible = true;
   levelOneGem3.visible = true;
   levelOneGem4.visible = true;
   levelOneGem5.visible = true;
   levelOneGem6.visible = true;
   levelOneGem7.visible = true;
   levelOneGem8.visible = true;
   levelOneGem9.visible = true;
   levelOneGem10.visible = true;
   levelOneGem11.visible = true;
 
   treasure.visible = true;
 
   player.visible = true;
     
 
   
   //track one ;
   image(levelOneTrackImg,windowWidth-1380,windowHeight-540,levelOneTrackImg.width,levelOneTrackImg.height);
   //track two;
   image(levelOneTrackImg,windowWidth-750,windowHeight-366,levelOneTrackImg.width,levelOneTrackImg.height);
   //track three;
   image(levelOneTrackImg,windowWidth-470,windowHeight-366,levelOneTrackImg.width,levelOneTrackImg.height);
 
   //ground;
    image(levelOneTrackImg,windowWidth-1550,windowHeight-77,levelOneTrackImg.width,levelOneTrackImg.height);
    image(levelOneTrackImg,windowWidth-1230,windowHeight-77,levelOneTrackImg.width,levelOneTrackImg.height);
    image(levelOneTrackImg,windowWidth-910,windowHeight-77,levelOneTrackImg.width,levelOneTrackImg.height);
    image(levelOneTrackImg,windowWidth-585,windowHeight-77,levelOneTrackImg.width,levelOneTrackImg.height);
    image(levelOneTrackImg,windowWidth-300,windowHeight-77,levelOneTrackImg.width,levelOneTrackImg.height);
 
   //finishflag;
   image(FinishFlagImg,windowWidth-140,windowHeight-128,60,100);
 
   playerScore();
 
 
   if(keyDown("right") || keyDown("D")){
     player.x = player.x + 10;
     player.addAnimation("running",playerSideWays);
     player.mirrorX(+1);
     player.setCollider("rectangle",0,0,302,390);
     player.scale = 0.4;
  }
  
 
   if(keyDown("left") || keyDown("A")){
      player.x = player.x - 10;
      player.addAnimation("running",playerSideWays);
      player.mirrorX(-1);
      player.scale = 0.4;
      
  }
   //console.log(player.y);
   if(keyDown("UP_ARROW") || keyDown("W")){
     if(player.y >=90 && player.y <=250 || (player.y >=365 && player.y <=500) || (player.y >=500 && player.y < 800)){
       player.velocityY = -13;
     }
     
   }
     player.velocityY = player.velocityY + 0.8;
     
   if(player.isTouching(treasure)){
       treasure.destroy();
       treausreCollectingSound.play();   
   }
 }
 
 function player1Life(){
   if(player1.isTouching(levelTwoRounderOB)){
     levelTwoLife = levelTwoLife - 1;
     player1.x = windowWidth-100;
     player1.y = windowHeight-600;
     loseSound.play();
  }
  if(player1.isTouching(levelTwoOB1)){
     levelTwoLife = levelTwoLife - 1;
     player1.x = windowWidth-100;
     player1.y = windowHeight-600;
     loseSound.play();
  }
  if(player1.isTouching(levelTwoOB2)){
     levelTwoLife = levelTwoLife - 1;
     player1.x = windowWidth-100;
     player1.y = windowHeight-600;
     loseSound.play();
  }
  if(player1.isTouching(levelTwoOB3)){
    levelTwoLife = levelTwoLife - 1;
    player1.x = windowWidth-100;
    player1.y = windowHeight-600;
    loseSound.play();
  }
  if(player1.isTouching(levelTwoSnakeOB)){
     levelTwoLife = levelTwoLife - 1;
     player1.x = windowWidth-100;
     player1.y = windowHeight-600;
     loseSound.play();
  }
  if(levelTwoLife === 2){
     lev2Heart3.destroy();
  }
  if(levelTwoLife === 1){
     lev2Heart2.destroy();
  }
  if(levelTwoLife === 0){
     lev2Heart1.destroy();
     gameOver.visible = true;
     resetButton.visible = true;
     player1.destroy();
     levelTwoSnakeOB.velocityX = 0;
     levelTwoRounderOB.rotation = levelTwoRounderOB.rotation = 0;
 
     if(mousePressedOver(resetButton)){
         gameState = "level-2";
         levelTwoLife = 3;
         twoScore = 0;
         snakeScore = 0;
         gameOver.destroy();
         resetButton.destroy();
         levelTwoSprite();
     }
  }
 
 }
 function player1Score(){
    if(player1.isTouching(levelTwoGem1)){
       twoScore = twoScore + 1;
       levelTwoGem1.destroy();
       crystalCollectSound.play();
    }
    if(player1.isTouching(levelTwoGem2)){
       twoScore = twoScore + 1;
       levelTwoGem2.destroy();
       crystalCollectSound.play();
    }
    if(player1.isTouching(levelTwoGem3)){
       twoScore = twoScore + 1;
       levelTwoGem3.destroy();
       crystalCollectSound.play();
    }
    if(player1.isTouching(levelTwoGem4)){
       twoScore = twoScore + 1;
       levelTwoGem4.destroy();
       crystalCollectSound.play();
    }
    if(player1.isTouching(levelTwoGem5)){
       twoScore = twoScore + 1;
       levelTwoGem5.destroy();
       crystalCollectSound.play();
    }
    if(player1.isTouching(levelTwoGem6)){
       twoScore = twoScore + 1;
       levelTwoGem6.destroy();
       crystalCollectSound.play();
    }
    if(player1.isTouching(levelTwoGem7)){
       twoScore = twoScore + 1;
       levelTwoGem7.destroy();
       crystalCollectSound.play();
    }
    if(player1.isTouching(levelTwoGem8)){
       twoScore = twoScore + 1;
       levelTwoGem8.destroy();
       crystalCollectSound.play();
    }
    if(player1.isTouching(levelTwoGem9)){
       twoScore = twoScore + 1;
       levelTwoGem9.destroy();
       crystalCollectSound.play();
    }
    if(player1.isTouching(levelTwoGem10)){
       twoScore = twoScore + 1;
       levelTwoGem10.destroy();
       crystalCollectSound.play();
    }
    if(player1.isTouching(levelTwoGem11)){
       twoScore = twoScore + 1;
       levelTwoGem11.destroy();
       crystalCollectSound.play();
    }
    if(player1.isTouching(levelTwoGem12)){
       twoScore = twoScore + 1;
       levelTwoGem12.destroy();
       crystalCollectSound.play();
    }
    if(player1.isTouching(levelTwoGem13)){
       twoScore = twoScore + 1;
       levelTwoGem13.destroy();
       crystalCollectSound.play();
    }
    if(player1.isTouching(levelTwoGem14)){
       twoScore = twoScore + 1;
       levelTwoGem14.destroy();
       crystalCollectSound.play();
    }
    if(player1.isTouching(levelTwoGem15)){
       twoScore = twoScore + 1;
       levelTwoGem15.destroy();
       crystalCollectSound.play();
    }
    if(player1.isTouching(levelTwoGem16)){
       twoScore = twoScore + 1;
       levelTwoGem16.destroy();
       crystalCollectSound.play();
    }
    if(player1.isTouching(levelTwoGem17)){
       twoScore = twoScore + 1;
       levelTwoGem17.destroy();
       crystalCollectSound.play();
    }
 
    if(twoScore === 17){
       if(player1.isTouching(levelTwoFinishFlag)){
          gameState = "level-3";
          FinishFlagTouchingSound.play();
      }
    }
    if(twoScore !== 17){
      if(player1.isTouching(levelTwoFinishFlag)){
       textSize(100);
       textFont("cooper");
       fill("red");
       text("Note! Catch all crystals",windowWidth-1000,windowHeight-300);
      }
    }
 
 }
 function EndSprite(){
    endBg = createSprite(windowWidth/2-10,windowHeight/2,windowWidth,windowHeight);
    endBg.addImage(endImg);
    endBg.scale = 1.1;
    endBg.visible = false;
 }

