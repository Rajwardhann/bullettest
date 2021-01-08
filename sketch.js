var bullet , speed;
var wall , weight;
var thickness;
var gamestate = "waiting";

function setup(){
  createCanvas(800,400);
  bullet = createSprite(100,200,30,5);
  bullet.shapeColor = ("white");
  bullet.velocityX = 0;
  
  thickness = random(22,83);

  wall = createSprite(700,200,thickness,200);
  wall.shapeColor = ("black");
}

function draw(){
  background("cyan");
  speed = random(223,321);
  weight = random(30,52);

  
    
    if(gamestate === "waiting")
    {
      fill("green");
      textSize(50);
      text("Press Space To Test",150,200);
      if(keyDown("space"))
      {
      bullet.velocityX = speed;
      gamestate = "test"
      }

    }
    

  

  Damage();
  
  
  if((gamestate === "test") && bullet.x - wall.x > (bullet.x + wall.x)/2) 
  { 
    
    bullet.velocityX = 0;

    if(damage > 10 )
    {
      wall.shapeColor = "red";
    }

    if(damage < 10)
    {
      wall.shapeColor = "green";

    }
   
  }

  
 
  



  drawSprites();
}

function Damage(){
   damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness) 

}