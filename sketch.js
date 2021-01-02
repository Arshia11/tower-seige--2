const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var engine, world, ground, polygonObj,polygonImg


function preload(){
polygonImg=loadImage("polygon.png")
}





function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  


ground = new Ground(600,590,1200,20);
stand=new Ground(440,400,290,15)
stand2=new Ground(880,250,250,15)




box1=new Box(320,370,)
box2=new Box(360,370)
box3=new Box(400,370)
box4=new Box(440,370)
box5= new Box(480,370)
box6= new Box(520,370)
box7=new Box(560,370)

box8=new Box(360,303)
box9=new Box(400,303)
box10=new Box(440,303)
box11=new Box(480,303)
box12=new Box(520,303)

box13=new Box(400,243)
box14=new Box(440,243)
box15=new Box(480,243)


box16=new Box(440,183)



box17=new Box(800,220)
box18=new Box(840,220)
box19=new Box(880,220)
box20=new Box(920,220)
box21=new Box(960,220)

box22=new Box(840,153)
box23=new Box(880,153)
box24=new Box(920,153)
polygonObj = Bodies.circle (300, 500, 25);
  World.add(world, polygonObj);
  
  slingShot = new SlingShot(this.polygonObj, {x:105, y:300});

  
fill("pink")

box25=new Box(880,93)


}
  

  


 


function draw() {
  background("skyblue");  
  rectMode(CENTER)
  Engine.update(engine);
  
  ground.display();
  stand.display();
  stand2.display();
  fill("pink")
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  fill("lightgreen")
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  fill("turquoise")
  box13.display();
  box14.display();
  box15.display();
  fill("red")
  box16.display();
  fill("lightgreen")
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  fill("turquoise")
  box22.display();
  box23.display();
  box24.display();
  fill("red")
  box25.display();
  
  imageMode(CENTER);
  image(polygonImg, polygonObj.position.x, polygonObj.position.y, 55, 55);
  slingShot.display();
  
}

function mouseDragged() {
  Matter.Body.setPosition(this.polygonObj, {x: mouseX, y: mouseY});
}

function mouseReleased() {
  slingShot.fly();
}

function keyPressed(){
  if(keyCode===32){
    slingShot.attach(this.polygonObj)
  }
}