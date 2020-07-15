function setup() {
  createCanvas(1600,800);
  fixedRect = createSprite(400, 200, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(600,67,80,50)
  movingRect.shapeColor = "green";
  fixedRect1 = createSprite(500, 40, 50, 80);
  fixedRect1.shapeColor = "green";
  movingRect1 = createSprite(500,760,80,50);
  movingRect1.shapeColor = "green";
}

function draw() {
  background(0,0,0);  

movingRect.x = World.mouseX;
movingRect.y = World.mouseY;

fixedRect1.velocityY = 5;
movingRect1.velocityY = -5;

fixedRect1.debug = true;
movingRect1.debug = true;

 if (isTouching(fixedRect,movingRect)){
   fixedRect.shapeColor = "red";
   movingRect.shapeColor = "red";
 }else{
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
 }
edges = createEdgeSprites();
fixedRect1.bounceOff(edges);
movingRect1.bounceOff(edges);
  bounceOff(fixedRect1,movingRect1);
  drawSprites();
}

function isTouching(object1,object2){
  if(object1.x - object2.x < (object1.width + object2.width)/2 
  && object2.x - object1.x < (object1.width + object2.width)/2
  && object1.y - object2.y < (object1.height + object2.height)/2
  && object2.y - object1.y < (object1.height + object2.height)/2){
    return true;
  }else{
    return false;
  }
}

function bounceOff(object3,object4){

if((object3.x - object4.x < (object3.width + object4.width)/2) 
&& (object4.x - object3.x < (object3.width + object4.width)/2)){
  object3.velocityX = object3.velocityX * (-1);
 object4.velocityX = object4.velocityX * (-1);
}
if((object3.y - object4.y < (object3.height + object4.height)/2)
&& (object4.y - object3.y < (object3.height + object4.height)/2)){
  object3.velocityY = object3.velocityY * (-1);
  object4.velocityY = object4.velocityY * (-1);
}
}
