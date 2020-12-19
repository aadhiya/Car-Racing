var form,game,player
var gameState=0,playerCount,database,canvas

function setup(){
  database = firebase.database();
  canvas=createCanvas(400,400);

game=new Game()
game.getState()
game.start()
}

function draw(){

}

