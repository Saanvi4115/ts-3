const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var polygon;
var ground, ground2, ground3;
var chain;
var score=0;
var bg;
var block01, block02, block03, block04, block05, block06, block07, block08, block09;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(400,315,300,20);
    ground3 = new Ground(150,200,250,20);
    ground2 = new Ground(600,height,1200,20);

    block1 = new Block(300,275,30,40);
    block2 = new Block(330,275,30,40);
    block3 = new Block(360,275,30,40);
    block4 = new Block(390,275,30,40);
    block5 = new Block(420,275,30,40);
    block6 = new Block(450,275,30,40);
    block7 = new Block(480,275,30,40);
    block8 = new Block(330,235,30,40);
    block9 = new Block(360,235,30,40);
    block10 = new Block(390,235,30,40);
    block11 = new Block(420,235,30,40);
    block12 = new Block(450,235,30,40);
    block13 = new Block(360,195,30,40);
    block14 = new Block(390,195,30,40);
    block15 = new Block(420,195,30,40);
    block16 = new Block(390,155,30,40);

    block01 = new Block(80,155,30,40);
    block02 = new Block(110,155,30,40);
    block03 = new Block(140,155,30,40);
    block04 = new Block(170,155,30,40);
    block05 = new Block(200,155,30,40);
    block06 = new Block(110,110,30,40);
    block07 = new Block(140,110,30,40);
    block08 = new Block(170,110,30,40);
    block09 = new Block(140,70,30,40);

    polygon = new Polygon(1000,200,50);
    chain = new Chain(polygon.body,{x:1000,y:200});    
}

function draw(){
   if (bg){
     background(bg)
    }
    Engine.update(engine);
    stroke("black")
    textSize(30);
    fill("green");
    text("Score: "+score,width-400,50);

    
    polygon.display();
    ground.display();
    ground3.display();
    chain.display();

    block01.display();
    block02.display();
    block03.display();
    block04.display();
    block05.display();
    block06.display();
    block07.display();
    block08.display();
    block09.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();


    block01.score();
    block02.score();
    block03.score();
    block04.score();
    block05.score();
    block06.score();
    block07.score();
    block08.score();
    block09.score();

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();

    backGroundColour();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    chain.fly()
}

function keyPressed(){
  if(keyCode === 32){
    chain.attach(polygon.body);

  }
}

async function backGroundColour() {
  var response = await fetch(" http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var response2 = await response.json()
  console.log(response2)
  var dt = response2.datetime
  var hour = dt.slice(11, 13)

  if (hour > 6 && hour < 18) {
     bg = 0
  } else {
     bg = 255
  }
console.log(bg)

}
