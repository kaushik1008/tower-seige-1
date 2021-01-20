const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;


function preload(){

    polygon_img=loadImage("polygon.png")

}

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(600,height,1200,20);
    platform=new Ground(240,320,10,10);

    //creating multiple boxes here
    //level 3
    box1=new Box(310,235,30,40);
    box2=new Box(340,235,30,40);
    box3=new Box(370,235,30,40);
    box4=new Box(400,235,30,40);
    box5=new Box(430,235,30,40);
    box6=new Box(470,235,30,40);
    box7=new Box(500,235,30,40);

    //level 2
    box8=new Box(340,195,30,40);
    box9=new Box(370,195,30,40);
    box10=new Box(400,195,30,40);
    box11=new Box(430,195,30,40);
    box12=new Box(470,195,30,40);
    
    //level 1
    box13=new Box(370,155,30,40);
    box14=new Box(400,155,30,40);
    box15=new Box(430,155,30,40);
    
    //level top
    box16=new Box(400,115,30,40);
  
    polygon=Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingshot=new slingshot(this.polygon,{x:100,y:200});
}



   function draw(){
background("black")
Engine.update(engine);

fill("lime"); 
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();

fill("lightblue");
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();

fill("orange");
block13.display();
block14.display();
block15.display();

fill("red")
block16.display();

fill("yellow")
platform.display();

ground.display();

imageMode(CENTER);

    image(polygon_img,polygon.position.x,polygon.position.y,40,40);
    polygon.display();

   }
   
   function mouseDragged(){
    Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
  }
  
  
  function mouseReleased(){
    polygon.fly();
  }
  
  function keyPressed(){
      if(keyCode === 33)
      {
          Matter.Body.setPosition(player.body,{x:235, y:420})
          slingshot.attach(polygon.body);
      }
  }
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
    
