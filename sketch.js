var bullet, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 100, 50);
  bullet.shapeColor = "white";
  
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor=color(80,80,80);

  speed = random(55,90);
  weight = random(400,1500);
}

function draw() {
  background("black"); 
  
  bullet.velocityX = speed;

 if(wall.x - bullet.x < (bullet.width + bullet.width)/2)
{
  bullet.velocityX = 0; 
  var deformation = 0.5 * weight *speed * speed/22509;
  if(deformation > 180){
    bullet.shapeColor = color(255,0,0);
  }
  if(deformation < 180 && deformation > 100)
  {
    bullet.shapeColor = color(230,230,0);
  }

  if(deformation<100)
  {
    bullet.shapeColor = color(0,255,0);
  }

}
  drawSprites();
}
