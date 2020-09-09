var x = 20;
var y = 300;
var size = 30;
function draw(){
    createCanvas(800,600);
    background(175,175,255);
    fill("red");
    circle(x,y,size);
    x = x + 5;
    if(x>(800+size)){
        x = 0 - size;
    };
}