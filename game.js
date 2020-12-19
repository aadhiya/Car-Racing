class Game{
    constructor(){

    }
getState(){
    var gameeref=database.ref('gameState')
    gameeref.on("value",function(data){
        gameState=data.val()
    }) 
}
update(state){
    datebass.ref('/').update({
        gameState:state
    })
}

async start(){
    if(gameState==0){
        player=new Player()
      var playerCountref=await database.ref('playerCount').once("value")
      if(playerCountref.exists()){
       playerCount=playerCountref
    
        player.getCount()
      }
        form=new Form()
        form.display() }
}
play(){
    form.hide()
    textSize(30)
    text("game start",120,100)
    Player.getplayerinfo()
    if(allPlayers!=undefined){
        var displayPosition=130
        for(var plr in allPlayers){
            if(plr=="player"+player.index){
                fill("red")
            }else{
                fill("black")
            }
       displayPosition+=22
       textSize(15)
       text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,displayPosition)
     }
    }
if(keyIsDown(UP_ARROW)&&player.index!=null){
    player.distance+=50
    player.update()
}
}
}
