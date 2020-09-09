function draw(){
    createCanvas(400,300)
    background(175,175,255)
    if(mouseX>200){
        fill("red")
    }else{
        fill("blue")
    }
    circle(mouseX,mouseY,30)
}