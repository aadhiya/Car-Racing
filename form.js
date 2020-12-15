class Form{
    constructor(){

    }
display(){
var titile=createElement('h2')
titile.hdml("Car Racing Game")
titile.position(130,0)
var imput=createImput('Name')
imput.position(130,160)
var button=createButton('Play')
button.position(250,200)
button.mousePressed(function()
{imput.hide()
button.hide()
var name=imput.volume()
playerCount+=1
player.update(name)
player.updateCount(playerCount)
var gritting=createElement('h3')
gritting.html("Hello"+name)
gritting.position(130,160)

})
}
}
    


