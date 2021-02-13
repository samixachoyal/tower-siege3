const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var polygon,polygonImg;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block16;
var ground;
var ground2;
var sling;
var backgroundImg;
var score = 0;

function preload(){

polygonImg = loadImage("polygon.png");

getTime();

}

function setup(){

createCanvas(1500,925);
engine = Engine.create();
world = engine.world;


//lower
block1 = new Box(900,770,30,40);
block2 = new Box(870,770,30,40);
block3 = new Box(840,770,30,40);
block4 = new Box(810,770,30,40);
block5 = new Box(930,770,30,40);
block6 = new Box(960,770,30,40);
block7 = new Box(990,770,30,40);
//3
block8 = new Box(900,730,30,40);
block9 = new Box(870,730,30,40);
block10= new Box(840,730,30,40);
block11= new Box(930,730,30,40);
block12= new Box(960,730,30,40);
//2
block13= new Box(900,690,30,40);
block14= new Box(870,690,30,40);
block15= new Box(930,690,30,40);
ground = new Ground(900,800,300,20);
ground2 = new Ground(750,915,1500,20);
//top
block16= new Box(900,650,30,40);

polygon = Bodies.circle(150,200,20);
polygon.scale = 0.15;

World.add(world,polygon);

sling = new Slingshot(this.polygon,{x:300, y:463});


Engine.run(engine);

}

function draw(){

    if(backgroundImg)
background(backgroundImg)
fill("white");
textSize(20)
text("SCORE:"+score,750,40);

imageMode(CENTER)
image(polygonImg,polygon.position.x,polygon.position.y,50,50)
getTime();
fill(rgb(78,71,255))
block1.display();
block1.score();
block2.display();
block2.score();
block3.display();
block3.score();
block4.display();
block4.score();
block5.display();
block5.score();
block6.display();
block6.score();
block7.display();
block7.score();
fill(rgb(253,155,24))
block8.display();
block8.score();
block9.display();
block9.score();
block10.display();
block10.score();
block11.display();
block11.score();
block12.display();
block12.score();
fill(rgb(255,68,70))
block13.display();
block13.score();
block14.display();
block14.score();
block15.display();
block15.score();
fill(rgb(69,255,86))
block16.display();
block16.score();
ground.display();
ground2.display();
sling.display();
drawSprites();

}

function mouseDragged(){

    Matter.Body.setPosition(this.polygon,{x: mouseX, y: mouseY})
}

function mouseReleased(){

    sling.fly();
}

function keyPressed(){
    if(keyCode===32){
        sling.attach(this.polygon);
    }
}

 async function getTime(){
    var response = await fetch("http://worldtimeapi.org/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=00 && hour<=12){
        bg = "pink";
    }
    else{
        bg = "black";
    }
backgroundImg = bg
}