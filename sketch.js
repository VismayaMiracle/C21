var fixedRect, movingRect;
var go1,go2,go3,go4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  go1=createSprite(100,200,30,30);
  go1.shapeColor = "purple";

  go2=createSprite(200,200,30,30);
  go2.shapeColor = "purple";

  go3=createSprite(400,600,30,30);
  go3.shapeColor = "purple";

  go4=createSprite(600,200,30,30);
  go4.shapeColor = "purple";
  
  movingRect.velocityX=-5;

}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
  
  if(isTouching(movingRect,go1)){
    movingRect.shapeColor = "red";
    go1.shapeColor = "red";
  }
  else{

    movingRect.shapeColor = "green";
    go1.shapeColor = "purple";
  }
  
  bounceoff(movingRect,go2)


  
  drawSprites();
}

