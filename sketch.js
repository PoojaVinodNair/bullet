var bullet,wall,thickness;
var speed,weight;




function setup() {
  createCanvas(1600,400);
  
  bullet=createSprite(50,200,20,10);
  
  wall=createSprite(1500,200,thickness,height/2);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet.velocityX=speed;
}

function draw() {
  background(255,255,255);

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5 *weight *speed *speed/(thickness*thickness*thickness);
    if(damage>10)
        {
          bullet.shapeColor=color(255,0,0);
        }
    
        
        if(damage<10)
        {
          bullet.shapeColor=color(0,255,0);
        }
    }  
  
  
  drawSprites();
 
}
function hasCollided(bullet,wall){
 
 var bulletRightEdge=bullet.x+bullet.width;
 var wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){

    return true
  }else{
  return false;
  }

}