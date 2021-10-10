
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stiker;


function preload(){

	backgroundimg = loadImage("images/carromb.png");
}
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

//coin red
cr1= new coinr(200,200,20,20);

//coin white
cw1= new coinw(220,200,20,20);
cw2= new coinw(180,200,20,20);
cw3= new coinw(200,180,20,20);
cw4= new coinw(200,220,20,20);
cw5= new coinw(240,220,20,20);
cw6= new coinw(240,180,20,20);
cw7= new coinw(160,180,20,20);
cw8= new coinw(160,220,20,20);
cw9= new coinw(220,240,20,20);
cw10= new coinw(180,240,20,20);
cw11= new coinw(180,160,20,20);
cw12= new coinw(220,160,20,20);

//coin black
cb1= new coinb(220,180,20,20);
cb2= new coinb(220,220,20,20);
cb3= new coinb(180,180,20,20);
cb4= new coinb(180,220,20,20);


cb5= new coinb(240,160,20,20);
cb6= new coinb(160,160,20,20);
cb7= new coinb(200,160,20,20);
cb8= new coinb(160,200,20,20);
cb9= new coinb(240,200,20,20);
cb10= new coinb(160,240,20,20);
cb11= new coinb(200,240,20,20);
cb12= new coinb(240,240,20,20);

//goals
g1= new goal(30,370,25,25);
g2= new goal(370,370,25,25);
g3= new goal(30,30,25,25);
g4= new goal(370,30,25,25);

//stiker
stiker = new Stiker(200,325,17,17);

//bounce
lower = new border(200,390,400,10);
uper = new border(200,10,400,10);
right = new border(10,200,10,400);
left = new border(390,200,10,400);

	/*1
    var ground_options ={
        isStatic: true
    }
    coin = Bodies.rectangle(150,150,50,50,ground_options);
    World.add(world,coin);*/
}

function draw(){
    background(backgroundimg);
    Engine.update(engine);
    rectMode(CENTER);

stiker.display();
lower.display();
uper.display();
right.display();
left.display();
g1.display();
g2.display();
g3.display();
g4.display();
cr1.display();
cw1.display();
cw2.display();
cw3.display();
cw4.display();
cb1.display();
cb2.display();
cb3.display();
cb4.display();
cw5.display();
cw6.display();
cw7.display();
cw8.display();
cw9.display();
cw10.display();
cw11.display();
cw12.display();
cb5.display();
cb6.display();
cb7.display();
cb8.display();
cb9.display();
cb10.display();
cb11.display();
cb12.display();

    //rect(coin.position.x,coin.position.y,50,50);


}



