var character, characterImage;

function preload(){
 characterImage = loadImage("tree.gif");
}

function setup(){
 createCanvas(1000, 800);

 character = createSprite(500,400);
 character.addImage("tree", characterImage);
 character.scale = 0.8;
}

function draw(){
 background("black");

 drawSprites();
}