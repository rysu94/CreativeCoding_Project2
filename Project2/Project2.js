var grasses = [];
var boxes = [];
var orbs = [];
var comets = [];
var drawing = false;
var pressed = false;

var color = [];

var drawMode = 0;

var noDraw = false;

function setup() 
{ 
  createCanvas(800, 800);
  color[0] = 0;
  color[1] = 0;
  color[2] = 0;
  background(255);
	SetDrawMode(0);
} 


function draw() 
{ 
  //print(color[0] + " " + color[1] + " " + color[2]);
  if(mouseIsPressed && drawMode == 1 && !noDraw)
  {
    stroke(color[0],color[1],color[2])
    line(mouseX, mouseY, pmouseX, pmouseY);
  	grasses[grasses.length] = new Grass();
  }
  else if(mouseIsPressed && drawMode == 2 && !noDraw)
  {
    boxes[boxes.length] = new Box();
  }
  else if(mouseIsPressed && drawMode == 3 && !noDraw)
  {
  	orbs[orbs.length] = new Orb(); 
  }
  else if(mouseIsPressed && drawMode == 4 && !noDraw)
  {
    noStroke();
  	fill(color[0],color[1],color[2]);
    ellipse(mouseX + random(-50, 50), mouseY + random(-50, 50), 5, 5);
  }
  else if(mouseIsPressed && drawMode == 5 && !noDraw)
  {
  	comets[comets.length] = new Comet(); 
  }
  
  
  for(var i = 0; i < grasses.length; i++)
  {
  	grasses[i].grow(); 
  }
  for(var j = 0; j < boxes.length; j++)
  {
  	boxes[j].grow(); 
  }
  for(var m = 0; m < orbs.length; m++)
  {
  	orbs[m].grow(); 
  }
  for(var o = 0; o < comets.length; o++)
  {
  	comets[o].move(); 
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
  
  //Cerates the second button
  noStroke();
  fill(200, 0, 200);
  ellipse(125, 45, 50, 50);
  fill(235, 0, 235);
  ellipse(120, 50, 50, 50);
  fill(255);
  rect(110, 40, 20, 20);
  
  //Creates the third button
  noStroke();
  fill(0, 200, 200);
  ellipse(195, 45, 50, 50);
  fill(0, 235, 235);
  ellipse(190, 50, 50, 50);
  fill(255);
  ellipse(190, 50, 25,25);
  
  //Creates the fourth button
  fill(0, 200, 0);
  ellipse(265, 45, 50, 50);
  fill(0, 235, 0);
  ellipse(260, 50, 50, 50);
  fill(255);
  ellipse(260, 50, 5, 5);
  ellipse(255, 45, 5, 5);
  ellipse(265, 55, 5, 5);
  
  //Creates the fifth button
  fill(0, 0, 200);
  ellipse(335, 45, 50, 50);
  fill(0, 0, 235);
  ellipse(330, 50, 50, 50);
  fill(255);
  ellipse(330, 55, 15,15);
  ellipse(325, 45, 15, 15);
  ellipse(335, 45, 15, 15);
  
  
  
  //Creates the reset cavnas button
  noStroke();
  fill(200,0,0);
  ellipse(755, 45, 50,50);
  fill(235, 0,0);
  ellipse(750,50,50,50);
  fill(255);
  textSize(32);
  text("R", 740, 60);
  
  //Draw Color Palette
  fill(0);
  rect(635, 15, 25,25);
  fill(255);
  rect(660, 15, 25,25);
  fill(150);
  rect(685, 15, 25, 25);
  
  fill(255,0,0);
  rect(635, 40, 25,25);
  fill(0,255,0);
  rect(660, 40, 25, 25);
  fill(255, 0, 255);
  rect(685, 40, 25, 25);
  
  fill(0,0,255);
  rect(635, 65, 25,25);
  fill(255,255,0);
  rect(660,65,25,25);
  fill(0,255,255);
  rect(685,65, 25,25);
  
  //chosen color
  
  fill(color[0],color[1],color[2]);
  textSize(16);
  text("Color:", 580, 20);
  rect(575, 25, 50, 50);
  
  stroke(1);
  
  //Check if the mouse is over the "No Draw" Zone
  if(mouseY >= 0 && mouseY <= 100)
  {
  	noDraw = true; 
  }
  else
  {
   noDraw = false; 
  }
  
  //Check Color Palette~
  
  //Black
  if(mouseX >= 635 && mouseX <= 660)
  {
  	if(mouseY >= 15 && mouseY <= 40)
    {
      if(mouseIsPressed)
      {
    		color[0] = 0;
      	color[1] = 0;
      	color[2] = 0;
      }
    }
  }
  
  //White
  if(mouseX >= 660 && mouseX <= 685)
  {
  	if(mouseY >= 15 && mouseY <= 40)
    {
      if(mouseIsPressed)
      {
    		color[0] = 255;
      	color[1] = 255;
      	color[2] = 255;
      }
    }
  }
  
  //Grey
  if(mouseX >= 685 && mouseX <= 710)
  {
  	if(mouseY >= 15 && mouseY <= 40)
    {
      if(mouseIsPressed)
      {
    		color[0] = 150;
      	color[1] = 150;
      	color[2] = 150;
      }
    }
  }

  
  //Red
  if(mouseX >= 635 && mouseX <= 660)
  {
  	if(mouseY >= 40 && mouseY <= 65)
    {
      if(mouseIsPressed)
      {
    		color[0] = 255;
      	color[1] = 0;
      	color[2] = 0;
      }
    }
  }
  
  //Green
  if(mouseX >= 660 && mouseX <= 685)
  {
  	if(mouseY >= 40 && mouseY <= 65)
    {
      if(mouseIsPressed)
      {
    		color[0] = 0;
      	color[1] = 255;
      	color[2] = 0;
      }
    }
  }
  
  //Magenta
  if(mouseX >= 685 && mouseX <= 710)
  {
  	if(mouseY >= 40 && mouseY <= 65)
    {
      if(mouseIsPressed)
      {
    		color[0] = 255;
      	color[1] = 0;
      	color[2] = 255;
      }
    }
  }

  //Blue
  if(mouseX >= 635 && mouseX <= 660)
  {
  	if(mouseY >= 65 && mouseY <= 80)
    {
      if(mouseIsPressed)
      {
    		color[0] = 0;
      	color[1] = 0;
      	color[2] = 255;
      }
    }
  }  
  
  //Yellow
  if(mouseX >= 660 && mouseX <= 685)
  {
  	if(mouseY >= 65 && mouseY <= 80)
    {
      if(mouseIsPressed)
      {
    		color[0] = 255;
      	color[1] = 255;
      	color[2] = 0;
      }
    }
  } 
  
  //Teal
  if(mouseX >= 685 && mouseX <= 710)
  {
  	if(mouseY >= 65 && mouseY <= 80)
    {
      if(mouseIsPressed)
      {
    		color[0] = 0;
      	color[1] = 255;
      	color[2] = 255;
      }
    }
  } 
  
  //End Color palette ~
  
  //Check if the mouse is over the Drip Effect Line Tool Button
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
          SetDrawMode(1);  
        }
      }
  }
  
  //Check if the mouse is over the square
  if(mouseX >= 95 && mouseX <= 145)
  {
   		if(mouseY >= 25 && mouseY <= 75)
      {
          noStroke();
  			  fill(215, 0, 215);
          ellipse(125, 45, 50, 50);
          fill(255, 0, 255);
          ellipse(120, 50, 50, 50);
          fill(255);
          rect(110, 40, 20, 20);
          if(mouseIsPressed && !pressed)
          {
      	    pressed = true;
            SetDrawMode(2);  
          }
      } 
  }
  
  // If mouse is over orb
  if(mouseX > 165 && mouseX <= 215)
  {
  	  if(mouseY >= 25 && mouseY <= 75)
      {
          noStroke();
          fill(0, 215, 215);
  				ellipse(195, 45, 50, 50);
 				  fill(0, 255, 255);
 				  ellipse(190, 50, 50, 50);
 				  fill(255);
 				  ellipse(190, 50, 25,25);
          if(mouseIsPressed && !pressed)
          {
      	    pressed = true;
            SetDrawMode(3);  
          }
      }
  }
  
  //If mouse is over dots
  if(mouseX > 235 && mouseX <= 285)
  {
  	if(mouseY >= 25 && mouseY <= 75)
    {
  		//Creates the fourth button
      noStroke();
  		fill(0, 215, 0);
  		ellipse(265, 45, 50, 50);
  		fill(0, 255, 0);
  		ellipse(260, 50, 50, 50);
  		fill(255);
  		ellipse(260, 50, 5, 5);
  		ellipse(255, 45, 5, 5);
  		ellipse(265, 55, 5, 5);  
      if(mouseIsPressed && !pressed)
      {    	    
        pressed = true;
        SetDrawMode(4);  
      }
    }
    
  }
  
  //if mouse is over comet
  if(mouseX > 305 && mouseX <= 355)
  {
  	if(mouseY >= 25 && mouseY <= 75)
    {
      noStroke();
      fill(0, 0, 215);
 			ellipse(335, 45, 50, 50);
  	  fill(0, 0, 255);
  		ellipse(330, 50, 50, 50);
      fill(255);
      ellipse(330, 55, 15,15);
      ellipse(325, 45, 15, 15);
      ellipse(335, 45, 15, 15);
      if(mouseIsPressed && !pressed)
      {
      	pressed = true;
        SetDrawMode(5);
      }
    }
  }
  
  //Check if mouse is over the reset button
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
     			

      		for(var k = grasses.length; k > 0; k--)
          {
      	      grasses.splice(k, 1); 
          }
          for(var l = boxes.length; l > 0; l--)
          {
           		boxes.splice(l,1); 
          }
          boxes.splice(0,1);
          
          for(var n = orbs.length; n > 0; n--)
          {
							orbs.splice(n,1);            
          }
          orbs.splice(0,1);
          for(var p = comets.length; p > 0; p--)
          {
          	comets.splice(p,1); 
          }
          comets.splice(0,1);
          background(255);
          SetDrawMode(0);
        }
    }
    

  }
  
  
  

}


function SetDrawMode(mode)
{
	drawMode = mode;
  
  if(mode == 1)
  {
    noStroke();
    fill(0);
    rect(675,100, 125, 45);
    fill(255);
    rect(685,105, 105, 35);
    textSize(16);
    fill(0);
  	text("Line Mode", 700, 125); 
  }
  else if(mode == 0)
  {
    noStroke();
    fill(0);
    rect(675,100, 125, 45);
    fill(255);
    rect(685,105, 105, 35);
    fill(0);
    textSize(16);
    fill(0);
  	text("No Mode", 700, 125);
    color[0] = 0;
    color[1] = 0;
    color[2] = 0;
  }
  else if(mode == 2)
  {
    noStroke();
    fill(0);
    rect(675,100, 125, 45);
    fill(255);
    rect(685,105, 105, 35);
    textSize(16);
    fill(0);
  	text("Box Mode", 700, 125);     
  }
  else if(mode == 3)
  {
    noStroke();
    fill(0);
    rect(675,100, 125, 45);
    fill(255);
    rect(685,105, 105, 35);
    textSize(16);
    fill(0);
  	text("Orb Mode", 700, 125);         
  }
  else if(mode == 4)
  {
    noStroke();
    fill(0);
    rect(675,100, 125, 45);
    fill(255);
    rect(685,105, 105, 35);
    textSize(16);
    fill(0);
  	text("Dot Mode", 700, 125);      
  }
  else if(mode == 5)
  {
    noStroke();
    fill(0);
    rect(675,100, 125, 45);
    fill(255);
    rect(685,105, 105, 35);
    textSize(16);
    fill(0);
  	text("Grow Mode", 700, 125);      
  }
  
  
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
        stroke(color[0],color[1],color[2]);
  	 		line(this.x, this.y - 1, this.x, this.y);
    		this.y += 1;
        this.currentLength++;        
      }
  }
  
}

//Creates a Box effect
function Box()
{
  this.x = mouseX;
  this.y = constrain(mouseY, 100, 800);
  this.colorR = color[0];
  this.colorG = color[1];
  this.colorB = color[2];
  this.newColorR = this.colorR;
  this.newColorG = this.colorG;
  this.newColorB = this.colorB;
  this.interval = 1;
  
  this.grow = function()
  {
     noStroke();
     fill(this.newColorR, this.newColorG, this.newColorB);
  	 rect(this.x - 15, this.y - 15, 30, 30)
		 this.newColorR -= this.interval;
     constrain(this.newColorR, 0, this.colorR);
     this.newColorG -= this.interval;
     constrain(this.newColorG, 0, this.colorG);
     this.newColorB -= this.interval;
     constrain(this.newColorB, 0, this.colorB);
    
     if(this.newColorR <= 0 && this.newColorG <= 0 && this.newColorB <= 0)
     {
    	 this.interval = -1;
     }
     if(this.newColorR == this.colorR && this.newColorG == 
        this.colorG && this.newColorB == this.colorB)
     {
       this.interval = 1;
     }
    
  }
}

function Orb()
{
	this.x = mouseX;
  this.y = constrain(mouseY, 100, 800);
  this.red = color[0];
  this.green = color[1];
  this.blue = color[2];
  this.size = 10;
  this.minSize = 10;
  this.maxSize = Math.floor(random(75,150));
  this.interval = 1;
  this.life = 0;
  
  this.grow = function()
  {
    if(this.size >= this.maxSize)
    {
    	this.interval = -1; 
    }
    else if(this.size <= this.minSize)
    {
    	this.interval = 1; 
    }
    this.life++;
    this.y--;
    this.size += this.interval;
    stroke(0);
    strokeWeight(1);
    fill(this.red, this.green, this.blue);
    if(this.life < 800)
    {
      ellipse(this.x, this.y, this.size, this.size);
    }
    
  }
}
  
function Comet()
{
  this.x = mouseX;
  this.y = constrain(mouseY, 100, 800);
  this.red = color[0];
  this.green = color[1];
  this.blue = color[2];
    
  this.move = function()
  {
    	this.x += random(-1, 1);
      this.y += random(-1, 1);
      noStroke();
      fill(this.red, this.green, this.blue);
      ellipse(this.x, this.y, 10, 10);
  }
}
  
