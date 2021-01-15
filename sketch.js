const Engine = Matter.Engine;

const World = Matter.World;

const Body = Matter.Body;

const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;

var engine, world;

var ground1, BlockBlue1, BlockBlue2, BlockBlue3, BlockBlue4, BlockBlue5, BlockBlue7;

var BlockPink1, BlockPink2, BlockPink3, BlockPink4, BlockPink5, BlockPink6, BlockPink7;

var BlockBlue8, BlockBlue9, BlockBlue10, BlockBlue11, BlockBlue12, BlockBlue13, BlockBlue14;

var polygon1;

function setup() {

  createCanvas(1200, 500);

  engine = Engine.create();

  world = engine.world

  Stand  = new  Ground(280,315,250,10); 
  stand2 = new  Ground(700,200,200,10);

  //first level
  BlockBlue1 = new Box(300,275,30,40);

  BlockBlue2 = new Box(330,275,30,40);

  BlockBlue3 = new Box(360,275,30,40);

  BlockBlue4 = new Box(390,275,30,40);

  BlockBlue5 = new Box(420,275,30,40);

  BlockBlue6 = new Box(450,275,30,40);

  BlockBlue7 = new Box(480,275,30,40);

  //second level
  BlockPink1 = new BoxPink(330,235,30,40);

  BlockPink2 = new BoxPink(360,235,30,40);

  BlockPink3 = new BoxPink(390,235,30,40);

  BlockPink4 = new BoxPink(420,235,30,40);

  BlockPink5 = new BoxPink(450,235,30,40);


  //third level
  
  BlockPink6 = new BoxGreen(360,195,30,40);

  BlockPink7 = new BoxGreen(390,195,30,40);

  BlockBlue8  = new BoxGreen(420,195,30,40);

  BlockBlue9  = new BoxBlack(390,155,30,40);

  //otherside
  box10 = new Box(730,180,20,20)
  box11 = new Box(750,180,20,20)
  box12 = new Box(770,180,20,20)
  box13 = new Box(790,180,20,20)
  box14 = new Box(810,180,20,20)
  box15 = new Box(830,180,20,20)
  box16 = new Box(850,180,20,20)

  box17 = new BoxPink(750,160,20,20)
  box18 = new BoxPink(770,160,20,20)
  box19 = new BoxPink(790,160,20,20)
  box20 = new BoxPink(810,160,20,20)
  box21 = new BoxPink(830,160,20,20)

  box22 = new BoxGreen(770,140,20,20)
  box23 = new BoxGreen(790,140,20,20)
  box24 = new BoxGreen(810,140,20,20)

  box25 = new BoxBlack(790,120,20,20)


  polygon_1 = new poly(110, 100, 20, 20);

  sling = new SlingShot(polygon_1.body, { x: 70, y: 90 });

  Engine.run(engine);

}

function draw() {
  background(56, 44, 44);
  Stand.display();
  
  stand2.display();


  BlockBlue1.display();

  BlockBlue2.display();

  BlockBlue3.display();

  BlockBlue4.display();

  BlockBlue5.display();

  BlockBlue6.display();

  BlockBlue7.display();

  BlockPink1.display ();

  BlockPink2.display ();

  BlockPink3.display ();

  BlockPink4.display ();

  BlockPink5.display ();

  BlockPink6.display ();

  BlockPink7.display ();

  BlockBlue8.display ();

  BlockBlue9.display ();

  box10.display();

 box11.display();

  box12.display();

  box13.display();

  box14.display();
  
  box15.display();

  box16.display();

  box17.display();

  box18.display();

  box19.display();
  
  box20.display();

  box21.display();

  box22.display();
  
  box23.display();

  box24.display();

  box25.display();

  polygon_1.display();

  sling.display();
}

function mouseDragged() {
  Matter.Body.setPosition(polygon_1.body, { x: mouseX, y: mouseY })
}

function mouseReleased() {
  sling.fly();
}

