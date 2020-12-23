var speed, weight, car, wall, deformation;
function setup() {
  createCanvas(1600,400);

  //random values for speed and weight
  speed = random(55,90);
  weight = random(400,1500);

  //create car and wall
  car = createSprite(50,200,50,50);
  wall = createSprite(1500, 200, 60, 200);
  wall.shapeColor = color(80,80,80);
  car.shapeColor = color(255,0,255);

  //move car with speed
  car.velocityX = speed;

  //insert deformation equation 
  deformation = (0.5 * weight * speed * speed)/22500;
}

function draw() {
  background(255,255,255);  

   //detect collision
  if(wall.x - car.x <= car.width/2 + wall.width/2){ //&& car.x - wall.x <= car.width/2 + wall.width/2){
      car.velocityX = 0;
      if(deformation < 100){
        car.shapeColor = color(0,255,0);
      }
      else if(deformation >= 100 && deformation <= 180){
        car.shapeColor = color(255,255, 0);
      }
      else if(deformation >180){
        car.shapeColor = color(255,0,0);
      }
    
  }

  
  console.log(deformation);

  drawSprites();

 // Text(deformation, 100,100);
}