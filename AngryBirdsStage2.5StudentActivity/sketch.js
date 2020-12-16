const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var response ;
var bg = "sprites/bg2.jpg"
var gameState = "ONSTRING"
var Scorecard
var textSize
function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
     backgroundchange();

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    log6 = new Log(100,100,200,PI/2);

    chain = new Chain(bird.body ,{x:200,y:50} , 10, 0.04)

     Scorecard =   0

   

}

function draw(){
    if(backgroundImg)
    
    background(backgroundImg);
    Engine.update(engine);
    textSize(30)
    text("SCORE = "+ Scorecard , 800,50)
   
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    log6.display();
    chain.display();
   

    
}

function mouseDragged(){
if(gameState!== "LAUNCHED"){
Matter.Body.setPosition(bird.body,{x:mouseX , y:mouseY})

}
}

function mouseReleased(){
chain.fly();
//mouseDragged=false
gameState = "LAUNCHED"


}

function keyPressed(){
if(keyCode===32){
    bird.projectory = []
    Matter.Body.setPosition(bird.body,{x:200 , y:50})
chain.attach(bird.body)

gameState ="ONSTRING"


}

}

async function backgroundchange(){
var response =await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
console.log(response)
var responseJson = await response.json();
console.log(responseJson)
var time = responseJson.datetime
console.log(time)
var hour = time.slice(11,13)
console.log(hour)
if(hour>=6 && hour<=19){
bg = "sprites/bg.png"

} else {
    bg = "sprites/bg2.jpg"
}
backgroundImg = loadImage(bg)
}
