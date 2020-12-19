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
start(){
    if(gameState==0){
        player=new Player()
        player.getCount()
        form=new Form()
        form.display()
    }
}
}
