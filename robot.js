var canvas;
var context;
var rectX = 0;
var rectY = 0;
var counter = [0, 0, 0, 0];
var robX = 0;
var robY = 0;
window.onload = function() {
    canvas = document.getElementById("myCanvas");
    butSetSize = document.getElementById("setS");
    context = canvas.getContext("2d");
    posX = document.getElementById("posX");
    posY = document.getElementById("posY");
	robotPosX = document.getElementById("X");
	robotPosY = document.getElementById("Y");
}

function Robot() {
  this.up = function() {
  	checking();
  	rectY-=100;
  	    if (rectY <= 0) {
        rectY = 100;
        counter[2]++;
        if(counter[2] == 2){
          alert("GAME OVER!!!");
          window.location.reload(false);}
          else{
            alert("Robot on the edge of the table!"); 
          }
    }
        else{
      for(var i = 0; i <= counter.length-1; i++) {
        counter[i] = 0;
      }  
    }
  };
  this.down = function() {
	checking();
  	rectY+=100;
  	    if (rectY > canvas.height) {
        rectY = canvas.height;
        counter[3]++;
        if(counter[3] == 2){
          alert("GAME OVER!!!");
          window.location.reload(false);}
          else{
            alert("Robot on the edge of the table!");  
          }        
    }
        else{
      for(var i = 0; i <= counter.length-1; i++) {
        counter[i] = 0;
      }  
    }
  };
  this.left = function() {
  	checking();
  	rectX-=100;
  	    if (rectX <= 0) {
        rectX = 100;
        counter[0]++;
        if(counter[0] == 2){ 
          alert("GAME OVER!!!");
          window.location.reload(false);}
          else{
            alert("Robot on the edge of the table!");  
          }

    } 
        else{
      for(var i = 0; i <= counter.length-1; i++) {
        counter[i] = 0;
      }  
    }
  };
  this.right = function() {
  	checking();
	rectX+=100;
	    if (rectX > canvas.width) {
        rectX = canvas.width;
        counter[1]++;
        if(counter[1] == 2){
          alert("GAME OVER!!!");  
          window.location.reload(false);}
          else{
            alert("Robot on the edge of the table!");  
          }
    }
        else{
      for(var i = 0; i <= counter.length-1; i++) {
        counter[i] = 0;
      }  
    }
  };   
  this.move = function(){
    context.beginPath();
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.fillStyle = "#666666";
	context.fillRect(rectX-100, rectY-100, 100, 100);
    posX.value = "X: " + rectY/100;
    posY.value = "Y: " + rectX/100;   
  }  
};

function setSize(){
  var width_p = document.getElementById("canvas_width_p");
  var height_p = document.getElementById("canvas_height_p");
  var set = document.getElementById("setS"); 
  var width = document.getElementById("canvas_width");
  var strUser1 = width.options[width.selectedIndex].value;
  var height = document.getElementById("canvas_height");
  var strUser2 = height.options[height.selectedIndex].value;
  canvas.width = strUser1;
  canvas.height = strUser2;
  selectX = document.getElementById('Y');
  selectY = document.getElementById('X');
  for (var i = 1; i <= strUser1/100; i++){
    var opt = document.createElement('option');
    opt.value = i*100;
    opt.innerHTML = i;
    selectX.appendChild(opt);
}
  for (var i = 1; i <= strUser2/100; i++){
    var opt = document.createElement('option');
    opt.value = i*100;
    opt.innerHTML = i;
    selectY.appendChild(opt);
}
  var run = document.getElementById("run");
  run.hidden = false;
  width_p.hidden = true;
  height_p.hidden = true;
  set.hidden = true;
}

var robot = new Robot();
function runGame(){
  robX = selectX.options[selectX.selectedIndex].value;
  robY = selectY.options[selectY.selectedIndex].value;
  var robotX = document.getElementById("sX");
  var robotY = document.getElementById("sY");
  canvas.hidden = false;
  butSetSize.hidden = true;
  posX.hidden = false;
  posY.hidden = false;
  robotX.hidden = true;
  robotY.hidden = true;
  checking();
  robot.move();
  var run = document.getElementById("run");
  run.hidden = true;
}

function checking(){
	if(robX != 0 && robY != 0){
	rectX = parseInt(robX);
	rectY = parseInt(robY);
	}
    robX = 0;
    robY = 0;
}

function onkeydown(e) {
    if (e.keyCode == 39) {
        robot.right();
    } //right arrow
    else if (e.keyCode == 37) {
        robot.left();
    } //left arrow
    else if (e.keyCode == 38) {
        robot.up();
    } //up arrow
    else if (e.keyCode == 40) {
        robot.down();
    } //down arrow
    robot.move();
}
window.addEventListener("keydown", onkeydown);