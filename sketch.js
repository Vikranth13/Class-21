var wall1, wall2, wall3, wall4;
var thickness1, thickness2, thickness3, thickness4;
var bullet1, bullet2, bullet3, bullet4;
var b1state = 0;
var b2state = 0;
var b3state = 0;
var b4state = 0;
var speed1, speed2, speed3, speed4;
var weight1, weight2, weight3, weight4; 
var divider1, divider2, divider3, divider4; 
var damagee1, damagee2, damagee3, damagee4; 

function setup()
{
  createCanvas(400,400);
  
  
  
  thickness1 = random(22,83);
  thickness2 = random(22,83);
  thickness3 = random(22,83);
  thickness4 = random(22,83);

  wall1 = createSprite(40, 100, 60, thickness1);
  wall1.shapeColor = "white";
  wall1.velocityY = 0;

  wall2 = createSprite(140, 100, 60, thickness2);
  wall1.shapeColor = "white";
  wall1.velocityY = 0;

  wall3 = createSprite(260, 100, 60, thickness3);
  wall1.shapeColor = "white";
  wall1.velocityY = 0;

  wall4 = createSprite(360, 100, 60, thickness4);
  wall1.shapeColor = "white";
  wall1.velocityY = 0;

  speed1 = random(-223,-321);
  speed2 = random(-223,-321);
  speed3 = random(-223,-321);
  speed4 = random(-223,-321);
  
  weight1 = random(-30,-52);
  weight2 = random(-30,-52);
  weight3 = random(-30,-52);
  weight4 = random(-30,-52);
  
  damagee1 = (0.5*weight1*speed1*speed1)/(thickness1*thickness1*thickness1);
  damagee2 = (0.5*weight2*speed2*speed2)/(thickness2*thickness2*thickness2);
  damagee3 = (0.5*weight3*speed3*speed3)/(thickness3*thickness3*thickness3);
  damagee4 = (0.5*weight4*speed4*speed4)/(thickness4*thickness4*thickness4);
  
  
  bullet1 = createSprite(20,370,10,20);
  bullet1.shapeColor = "yellow";

  bullet2 = createSprite(140, 370,10,20);
  bullet2.shapeColor = "yellow";

  bullet3 = createSprite(260,370,10,20);
  bullet3.shapeColor = "yellow";

  bullet4 = createSprite(380,370,10,20);
  bullet4.shapeColor = "yellow";

  divider1 = createSprite(80,200,10,400);
  divider1.shapeColor = "blue";
  
  divider2 = createSprite(200,200,10,400);
  divider2.shapeColor = "blue";
  
  divider3 = createSprite(320,200,10,400);
  divider3.shapeColor = "blue";
  
  
  
}
function draw()
{
  background(0);
  
  b1state = 1;
  b2state = 1;
  b3state = 1;
  b4state = 1;
  
  if(b1state === 1)
  {
    bullet1.velocityY = speed1/20;
  }
  if(Math.abs(bullet1.y-wall1.y)<wall1.height/2+bullet1.height/2)
  {
    b1state = 2;
    damage1();
    
  }
  if(b1state === 2 )
  {
      bullet1.velocityY = 0;     
  }

  if(b2state === 1)
  {
    bullet2.velocityY = speed2/20;
  }
  if(Math.abs(bullet2.y-wall2.y)<wall2.height/2+bullet2.height/2)
  {
    b2state = 2;
    damage2();
  }
  if(b2state === 2 )
  {
      bullet2.velocityY = 0;
  }

  if(b3state === 1)
  {
    bullet3.velocityY = speed3/20;
  }
  if(Math.abs(bullet3.y-wall3.y)<wall3.height/2+bullet3.height/2)
  {
    b3state = 2;
    damage3();
  }
  if(b3state === 2 )
  {
      bullet3.velocityY = 0;
  }

  if(b4state === 1)
  {
    bullet4.velocityY = speed4/20;
  }
  if(Math.abs(bullet4.y-wall4.y)<wall4.height/2+bullet4.height/2)
  {
    b4state = 2;
    damage4();
  }
  if(b4state === 2 )
  {
      bullet4.velocityY = 0;  
  }

  drawSprites();

}
function damage1()
{
  if(damagee1 > -10)
  {
    wall1.shapeColor = "green";
  }

  if(damagee1 < -10)
  {
    wall1.shapeColor = "red";
  }
}

function damage2()
{
  if(damagee2 > -10)
  {
    wall2.shapeColor = "green";
  }

  if(damagee2 < -10)
  {
    wall2.shapeColor = "red";
  }
}

function damage3()
{
  if(damagee3 > -10)
  {
    wall3.shapeColor = "green";
  }

  if(damagee3 < -10)
  {
    wall3.shapeColor = "red";
  }
}

function damage4()
{
  if(damagee4 > -10)
  {
    wall4.shapeColor = "green";
  }

  if(damagee4 < -10)
  {
    wall4.shapeColor = "red";
  }
}