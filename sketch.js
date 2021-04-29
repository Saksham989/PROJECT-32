const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg="sunrise1.png"
var bg="sunrise2.png"
var bg="sunrise3.png"
var bg="sunrise4.png"
var bg="sunrise5.png"
var bg="sunrise6.png"
var bg="sunset7.png"
var bg="sunset8.png"
var bg="sunset9.png"
var bg="sunset10.png"
var bg="sunset11.png"
var bg="sunset12.png"
var time;
function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg()
}
function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
    background(backgroundImg);

    Engine.update(engine);

    // write code to display time in correct format here
    if(hour>=00 && hour<=02){
      textSize(35)
    fill("red")
    text("time:5 AM",50,50)
    }else if(hour>=02 && hour<=04){
      textSize(35)
    fill("red")
    text("time:7 AM",50,50)  
    }else if(hour>=04 && hour<=06){
      textSize(35)
    fill("red")
    text("time:9 AM",50,50) 
    }else if(hour>=06 && hour<=8){
      textSize(35)
    fill("red")
    text("time:11 AM",50,50)  
    }else if(hour>=8 && hour<=10){
      textSize(35)
    fill("red")
    text("time:1 PM",50,50)
    }else if(hour>=10 && hour<=12){
      textSize(35)
    fill("red")
    text("time:3 PM",50,50)
    }else if(hour>=12 && hour<=14){
      textSize(35)
      fill("red")
      text("time:4.30 PM",50,50)
    }else if(hour>=14 && hour<=16){
      textSize(35)
      fill("red")
      text("time:5.30 PM",50,50)
    }else if(hour>=16 && hour<=18){
      textSize(35)
      fill("red")
      text("time:6.30 PM",50,50)
    }else if(hour>=18 && hour<=20){
      textSize(35)
      fill("red")
      text("time:7.30 PM",50,50)
    }else if(hour>=20 && hour<=22){
      textSize(35)
    fill("red")
    text("time:9 PM",50,50)
    }else if(hour>=22 && hour<=24){
      textSize(35)
    fill("red")
    text("time:12 PM",50,50)
    }

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo")
    //change the data in JSON format
    var responseJSON = await response.json()
    // write code slice the datetime
    var datetime=responseJSON.datetime
    hour=datetime.slice(11,13);
    // add conditions to change the background images from sunrise to sunset
    if(hour>=00 && hour<=02){
      bg = "sunrise1.png";
    }else if(hour>=02 && hour<=04){
      bg = "sunrise2.png"  
    }else if(hour>=04 && hour<=06){
      bg = "sunrise3.png"  
    }else if(hour>=06 && hour<=8){
      bg = "sunrise4.png"  
    }else if(hour>=8 && hour<=10){
      bg = "sunrise5.png"
    }else if(hour>=10 && hour<=12){
      bg = "sunrise6.png"
    }else if(hour>=12 && hour<=14){
        bg = "sunset7.png"
    }else if(hour>=14 && hour<=16){
        bg = "sunset8.png"
    }else if(hour>=16 && hour<=18){
        bg = "sunset9.png"
    }else if(hour>=18 && hour<=20){
        bg = "sunset10.png"
    }else if(hour>=20 && hour<=22){
        bg = "sunset11.png"
    }else if(hour>=22 && hour<=24){
        bg = "sunset12.png"
    }

    //load the image in backgroundImg variable here
    backgroundImg=loadImage(bg)
}
