var bubbles = [];
var r,g,b;

function setup() {
    createCanvas(700,700).addclass("bubbles-p5");
//    for (var i=0; i<10; 1++){
//      bubbles[i] = new Bubble(random(0,width),random(0,height));
//    }
}

function mousePressed(){
  bubbles.push(new Bubble(mouseX,mouseY));
}

function keyPressed(){
//how to use: https://p5js.org/reference/#/p5/keyPressed
//splice: 1st argumnet = index; 2nd argument=how many
//delete last bubble when delete is pressed
//change background color when enter is pressed
  if (keyCode===BACKSPACE || keyCode===DELETE){
//  bubbles.splice(bubbles.length-1,1);
//  or, use pop, and it will take off the last hting you put down
    bubbles.pop()
  } else if (keyCode === ENTER){
    //background(random(0,255),random(0,255),random(0,255));
    r=random(255);
    g=random(255);
    b=random(255);
  }
}

function draw() {
    background(r,g,b);
    for(var i=0; i<bubbles.length; i++){
      bubbles[i].move();
      bubbles[i].display();
   }
}

//use capital to indicate that it is special
function Bubble (x,y) {
//  this.x=random(0,width);
//  this.y=random(0,height);
//if you provide an argument for a parameter of a constructor function, you gotta use them!
    this.x= x;
    this.y= y;

  this.display=function(){
    stroke(200,200,250);
    fill(150,150,200,50);
    ellipse(this.x,this.y,36,36);
  }
  this.move=function(){
    this.x = this.x + random(-1,1);
    this.y = this.y - 0.75;
  }
}
