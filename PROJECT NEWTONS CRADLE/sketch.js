const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const MouseConstraint=Matter.MouseConstraint;
const Mouse=Matter.Mouse;
const Constraint=Matter.Constraint;
var canvas
var pend1,pend2,pend3,pend4,pend5
var sling1,sling2,sling3,sling4,sling5

 function setup(){
canvas=createCanvas(windowWidth,windowHeight)
engine=Engine.create();
world=engine.world;
//elt-used for styling of border
let canvasmouse = Mouse.create(canvas.elt)
canvasmouse.pixelRatio=pixelDensity();
let options = {
    mouse: canvasmouse
}
mConstraint=MouseConstraint.create(engine,options)
World.add(world,mConstraint);

pend1=new Pendulum(350,450,"#FF08cD")
pend2=new Pendulum(400,450,"#FC08cD")
pend3=new Pendulum(450,450,"#FF08cD")
pend4=new Pendulum(500,450,"#FF08ED")
pend5=new Pendulum(550,450,"#FF08cD")

sling1=new Sling(pend1.body,{x:350,y:200})
sling2=new Sling(pend2.body,{x:400,y:200})
sling3=new Sling(pend3.body,{x:450,y:200})
sling4=new Sling(pend4.body,{x:500,y:200})
sling5=new Sling(pend5.body,{x:550,y:200})

}
function draw(){
    background(220)
    //the draw function runs again and again,so the original engine should stay updatedthus we write engine.update
    Engine.update(engine);

    pend1.display()
    pend2.display()
    pend3.display()
    pend4.display()
    pend5.display()

    sling1.display()
    sling2.display()
    sling3.display()
    sling4.display()
    sling5.display()


}
function mouseDragged(){
    Matter.Body.setPosition(pend1.body,{x:mouseX, y:mouseY})
}