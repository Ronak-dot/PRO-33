const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var gameState = "onSling";
var bg = "snow1.png";
var score = 0;

var boy,boy2;
var snowball,string;

function preload() {
  bg;
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    boy = new Boy(800,200,20,20);
    boy2 = new Boy2(800,800,20,20);
    snowball = new Snowball(800,230,30);
    string = new String(boy.body,snowball.body);


  
}

function draw(){
  background(bg);

  boy.display();
  boy2.display();
  string.display();
  snowball.display();
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(snowball.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    string.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       string.attach(snowball.body);
    }
    gameState = "onString";

    Matter.Body.setPosition(snowball.body,{x:200,y:50});
}