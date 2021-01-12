const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var balls=[]
var plinkos=[]
var division=[]
var dspace=300

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
   ground= new Ground(200,780,780,30)
   for(var k=0; k<= width;k+80){
     division.push(new Division(k,height-dspace/2,10,dspace))
   }
   for(var j=40;j<=width-10;j=j+50) {
    balls.push(new Balls(j,j))

   }
   if(frameCount%60===0){
     plinkos.push(new Plinkos(random(width/2-10,width/2+10,10,10)))
   }
}

function draw() {
  background("black"); 
  for(k=0;k<division.length;k++){
    division[k].display()
  }
  for(j=0;j<ball.length;j++){
    ball[j].display()
  }
  if(frameCount%60===0){
    plinkos.display()
  }

  drawSprites();
}