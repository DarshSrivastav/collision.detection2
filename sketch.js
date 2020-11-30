const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,wall,bullet




function setup() {
  createCanvas(400,400);
 engine=Engine.create();
 world=engine.world

 
 bullet=new Bullet(200,300,50,50)

wall=new Wall(200,390,400,20)
 }


function draw() {
  background(0);  
  Engine.update(engine)
  
 bullet.display()
 
 wall.display()
  drawSprites();
}