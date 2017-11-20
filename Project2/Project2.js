

var grasses = [];
var drawing = false;
var pressed = false;

var drawMode = 0;

function setup() 
{ 
  createCanvas(800, 800);
  background(255);
} 


function draw() 
{ 
  
  
  if(mouseIsPressed && drawMode == 1)
  {
  	grasses[grasses.length] = new Grass();
  }
  
  for(var i = 0; i < grasses.length; i++)
  {
  	grasses[i].grow(); 
  }
  
  
  
  
  
  noStroke();
  
  //Creates the button background
  fill(100,100,100);
  rect(0, 0, 800, 100);
	
  //Creates the first button
  fill(200,200,0);
  ellipse(55, 45, 50, 50);
  fill(235,235,0);
  ellipse(50, 50, 50, 50);
  stroke(1);
  line(40,40,60,60);
  
  //Creates the reset cavnas button
  noStroke();
  fill(200,0,0);
  ellipse(755, 45, 50,50);
  fill(235, 0,0);
  ellipse(750,50,50,50);
  fill(255);
  textSize(32);
  text("R", 740, 60);
  
  
  
  stroke(1);
  
  //Check if the mouse is over the Drip Effect Button
  if(mouseX >= 25 && mouseX <= 75)
  {
    	if(mouseY >= 25 && mouseY <= 75)
      {
      	noStroke();
  			fill(215,215,0);
 		  	ellipse(55, 45, 50, 50);
     	  fill(255,255,0);
  			ellipse(50, 50, 50, 50);
 			  stroke(1);
 			  line(40,40,60,60);
        
        if(mouseIsPressed && !pressed)
        {
          pressed = true;
        	setTimeout(SetDrawMode(1), 2000);
          
        }
      }
  }
  
  if(mouseX >= 725 && mouseX <= 775)
  {
    if(mouseY >= 25 && mouseY <= 75)
    {
        noStroke();
 				fill(215,0,0);
  		  ellipse(755, 45, 50,50);
        fill(255, 0,0);
        ellipse(750,50,50,50);
        fill(255);
        textSize(32);
        text("R", 740, 60);
          
        if(mouseIsPressed && !pressed)
    	  {
      		pressed = true;
     			setTimeout(SetDrawMode(0), 2000);
          background(255);
      		for(var i = grasses.length; i > 0; i--)
          {
      	      grasses.splice(i, 1); 
          }
      
        }
    }
    

  }
  
  
  

}


function SetDrawMode(mode)
{
	drawMode = mode; 
  pressed = false;
}



//Creates a Drip Effect
function Grass()
{
  this.x = mouseX;
  this.y = constrain(mouseY, 100, 800);
  this.maxLength = random(10,75);
  this.currentLength = 0;
  
  this.grow = function()
  {
    	if(this.currentLength <= this.maxLength)
      {
  	 		line(this.x, this.y, this.x, this.y - 1);
    		this.y += 1;
        this.currentLength++;        
      }
  }
  
}