let état = 0
let slider;

function setup(){
  createCanvas(400, 400);
  colorMode(HSB, 250, 90, 60, 40);
  smooth();
  noFill();
  background(360);
}

function draw(){
  if(mouseIsPressed){
    if (état == 0){
    push();
    translate(width/2,height/2);
    let circleResolution = int(map(mouseY+100,0,height,2, 10));
    let radius = mouseX-width/2;
    let angle = float(TWO_PI/circleResolution);
    let strokeColor = color(192, 100, 64, 10);
    strokeWeight(2);
    stroke(strokeColor);
    beginShape();
    for (let i=0; i<=circleResolution; i++){
      let x = float(0 + cos(angle*i) * radius);
      let y = float(0 + sin(angle*i) * radius);
      vertex(x, y);
    }
    endShape();
    pop();
  }
  }
    if(mouseIsPressed){
    if (état == 50){
    push();
    translate(width/2,height/2);
    let circleResolution = int(map(mouseY+100,0,height,2, 10));
    let radius = mouseX-width/2;
    let angle = float(TWO_PI/circleResolution);
    let strokeColor = color(0, 10);
    strokeWeight(2);
    stroke(strokeColor);
    beginShape();
    for (let i=0; i<=circleResolution; i++){
      let x = float(0 + cos(angle*i) * radius);
      let y = float(0 + sin(angle*i) * radius);
      vertex(x, y);
    }
    endShape();
    pop();
  }
  }
    if(mouseIsPressed){
    if (état == 2){
    push();
    translate(width/2,height/2);
    let circleResolution = int(map(mouseY+100,0,height,2, 10));
    let radius = mouseX-width/2;
    let angle = float(TWO_PI/circleResolution);
    let strokeColor = color(50, 100, 70, 90);
    strokeWeight(2);
    stroke(strokeColor);
    beginShape();
    for (let i=0; i<=circleResolution; i++){
      let x = float(0 + cos(angle*i) * radius);
      let y = float(0 + sin(angle*i) * radius);
      vertex(x, y);
    }
    endShape();
    pop();
  }
 }
}

function keyPressed(){
  if (keyCode == DELETE || keyCode == BACKSPACE){
    background(360);
  }
}

function keyTyped(){
  if (key=='s' || key=='S') save("P_2_0_03.png");
  if (key == "1"){
    état = 0;
}
  if (key == "2"){
     état = 1;
}
  if (key == "3"){
     état = 2;
}
}

