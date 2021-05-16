var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(80,580,200,30);
    block1.shapeColor = "dodgerblue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "gold";

    block3 = createSprite(510,580,200,30);
    block3.shapeColor = "indianred";

    block4 = createSprite(725,580,200,30);
    block4.shapeColor = "yellowgreen";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = "white";
    ball.velocityX = 4;
    ball.velocityY = 4;

}

function draw() {
    background("darkgrey");
    edges = createEdgeSprites();
    ball.bounceOff(edges);

    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "dodgerblue";
        music.play();
    }

    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "gold";
        ball.velocityX = 0;
        ball.velocityY = 0;

        music.stop();
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "indianred";
        music.play();
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "yellowgreen";
        music.play();
    }

    drawSprites();
}
