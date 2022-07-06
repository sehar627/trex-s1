
var trex ,trex_running; 
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")

}

function setup(){
  createCanvas(600,400)
  
  trex=createSprite(50,190,50,50)
  trex.addAnimation("trex",trex_running)
  trex.scale=0.7

}

function draw(){
  background("white")
  
  drawSprites()
}
