var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
 
  fixedRect=createSprite(400, 200, 80, 50);
  fixedRect.shapeColor="green";
  fixedRect.velocityX=4;

  movingRect=createSprite(600,200,50,80);
  movingRect.shapeColor="green";
  movingRect.velocityX=-4;
}

function draw() {
  background(0,0,0); 
  
 // movingRect.x=mouseX;
 // movingRect.y=mouseY;

  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 
    &&fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 
    &&movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
    &&fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
    
      fixedRect.velocityX=-4;
      movingRect.velocityX=4;
  }
  else {
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
  }
  
  drawSprites();
}