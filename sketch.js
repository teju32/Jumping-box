var canvas;
var music;
var movingbox, surface1,surface2,surface3,surface4;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1=createSprite(170,180,10,110);
    surface1.shapeColor="blue";
    surface2=createSprite(190,120,110,10);
    surface2.shapeColor="orange";
    surface3=createSprite(140,150,115,10);
    surface3.shapeColor="pink";
    surface4=createSprite(160,270,115,10);
    surface4.shapeColor="green";

    //create box sprite and give velocity
    movingbox=createSprite(random(20,750),100, 40,40);
    movingbox.shapeColor="white";
    movingbox.velocityX=-5; 
    movingbox.velocityY=3;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();
    movingbox.bounceOff(edges);


    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(movingbox)&& movingbox.bounceOff(surface1)) {
     //change color here 
     movingbox.shapeColor="blue";
     
    }
    if(surface2.isTouching(movingbox)&& movingbox.bounceOff(surface2)) {
        //change color here 
        movingbox.shapeColor="orange";
        movingbox.velocityX= 0;
        music.stop();
        
    }
    if(surface3.isTouching(movingbox)&& movingbox.bounceOff(surface3)) {
        //change color here 
        movingbox.shapeColor="pink";
        music.play();
    }    
    if(surface4.isTouching(movingbox)&& movingbox.bounceOff(surface4)) {
        //change color here 
        movingbox.shapeColor="green";
        
    }    
        
}
