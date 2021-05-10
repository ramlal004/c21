
var fixedRect, movingRect;
var car, wall;

function setup() {
  createCanvas(1200,800);
 
 
  car = createSprite(200, 400,30,30);
  car.shapeColor = "green";
  car.velocityX=3 
  wall= createSprite(800, 400, 50, 200);
  wall.shapeColor = "green";
  
  
}

function draw() {
  background(0,0,0);  


  if(isTouching(car,wall)){
    car.shapeColor = "blue";
    wall.shapeColor = "blue";
  }
  
  else {
    car.shapeColor = "green";
    wall.shapeColor = "green"
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}

function isTouching(movingRect,fixedRect){
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}


