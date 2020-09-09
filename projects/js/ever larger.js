var diameter = 1;
function draw(){
    createCanvas(800,600);
    fill(125,125,255);
    circle(400,300,diameter);
    diameter ++;
    if (diameter >= 200){
        diameter = 1;
    }
}