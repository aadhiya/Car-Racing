var form,game,player
var gameState=0,playerCount,database,canvas
var allPlayers,distance=0
function setup(){
  database = firebase.database();
  canvas=createCanvas(400,400);

game=new Game()
game.getState()
game.start()
}

function draw(){
if(playerCount==4){
  game.update(1)
}
if(gameState==1){
 clear()
  game.play()

}
}

