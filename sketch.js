
var car,car1,car2,car3;
var speed,weight;
var wall,wall1,wall2,wall3;
var border,border2,border3;

function setup() {
  createCanvas(400,500);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50, 100, 20,20);
  car.velocityX=speed;
  car.shapeColor="white";
  car1=createSprite(370, 200, 20,20);
  
  car2=createSprite(370, 300, 20,20);
 ;
  car3=createSprite(370, 400, 20,20);
 
  wall=createSprite(390,100,20,50);
  wall.shapeColor="grey";

  wall1=createSprite(390,200,20,50);
  wall1.shapeColor="grey";

  wall2=createSprite(390,300,20,50);
  wall2.shapeColor="grey";

  wall3=createSprite(390,400,20,50);
  wall3.shapeColor="grey";

  border=createSprite(200,250,400,5);
  border.shapeColor="white";

  border2=createSprite(200,350,400,5);
  border2.shapeColor="white";

  border3=createSprite(200,150,400,5);
  border3.shapeColor="white";
}

function draw() {
  background("black");  
  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;
    if(deformation>180){
      car1.shapeColor="red";
    }
    if(deformation<180 && deformation>100){
      car2.shapeColor="yellow"
    }
    if(deformation<100){
      car3.shapeColor="green";
    }
  }



  drawSprites();
}