window.onload = function(){

var header = document.getElementById("header");
var body = document.getElementById("body");
var green = document.getElementById("green");
var red = document.getElementById("red");
var blue = document.getElementById("blue");
var yellow = document.getElementById("yellow"); 

// Variable

activeGame = false;
activeButton = false;
//activeautoClick = false;
activeContinue = true;
var counter = 0;
var level = 0;
var maxLevel = 10;
var lost = false;

function gameStart(){
  if(activeGame == true){
    activeButton = true;
  }
  if(activeContinue == true){
      console.log("Hello fadel");
      header.innerHTML = `Level is ${level + 1}`;
      var randomInput = [];
      var arrayEmpty = [];
      autoClick(0);
  }
}

// Random 
var arrayColor = [green, red, blue, yellow];
var randomArrayy = [];

function randomWindow(){
  for(var i=0 ; i < maxLevel ; i++){
    var random = Math.floor(Math.random()*arrayColor.length);
    var buttonClick = parseInt(arrayColor[random].value);
    randomArrayy[i] = buttonClick;
  }
}
randomWindow();
console.log(randomArrayy);

function autoClick(val){
  var buttonClick = randomArrayy[val];
  wait(1000);
  glow(buttonClick);  
  activeContinue = false;
  console.log(" AUTOCLICK");
  
    
}

// wait function

function wait(ms){
  var start = new Date().getTime();
  var end = start;
  while(end < start + ms) {
    end = new Date().getTime();
 }
}


function glow(button){
  if(button == 3){
    yellow.style.boxShadow = "1px 1px 20px 10px white";
    yellow.style.backgroundColor = "grey";
    setTimeout(function(){
      new Audio('./assets/sounds/yellow.mp3').play(); // sound
      yellow.style.boxShadow = "none";
      yellow.style.backgroundColor = "yellow";
  },200);
  }
   if(button == 2){
    
    red.style.boxShadow = "1px 1px 20px 10px white";
    red.style.backgroundColor = "grey";
    setTimeout(function(){
      new Audio('./assets/sounds/red.mp3').play(); // sound
      red.style.boxShadow = "none";
      red.style.backgroundColor = "red";
  },200);
  }
   if(button == 1){
    
    green.style.boxShadow = "1px 1px 20px 10px white";
    green.style.backgroundColor = "grey";
    setTimeout(function(){
      new Audio('./assets/sounds/green.mp3').play(); // sound
      green.style.boxShadow = "none";
      green.style.backgroundColor = "green";
  },200);
  }
   if (button==4){
    blue.style.boxShadow = "1px 1px 20px 10px white";
    blue.style.backgroundColor = "grey";
    setTimeout(function(){
      new Audio('./assets/sounds/blue.mp3').play(); // sound
      blue.style.boxShadow = "none";
      blue.style.backgroundColor = "blue";
  },200);
  }
}

// Lose functcion
function youLose(){
  header.innerHTML = "Game Over, Press Any Key To Restart ";
  body.style.backgroundColor = "red";
  new Audio('./assets/sounds/wrong.mp3').play();
  
  setTimeout(function(){
    body.style.boxShadow = "none";
    body.style.backgroundColor = "rgb(16, 16, 60)";
  },80);
}

// Next Level
function nextLevel(level){
  header.innerHTML = "Level " + level;
}

function checkSeq(seq){
  if(seq == randomArrayy[counter]){
    if(counter ==  maxLevel-1){
      header.innerHTML = "You Win";
      return;
    }
    if(counter == level){
      addlevel();
      console.log("Add level");
      
    }
    else{
      counter = counter + 1;
    }
  }
  else{
    lost = true;
    youLose();
  }
  
}

function addlevel(){
  level = level +1;
  counter = 0;
  header.innerHTML = `Level is ${level + 1}`;
  glow(randomArrayy[level]);
}

// Event

red.addEventListener("click",function(){
  if(activeButton == true && activeContinue == false){
    glow(2);
    activeContinue == true;
    setTimeout(function(){
      checkSeq(2);
    },1000);
  }
});

blue.addEventListener("click",function(){
  if(activeButton == true && activeContinue == false){
    glow(4);
    activeContinue == true;
    setTimeout(function(){
      checkSeq(4);
    },1000);
  }
});

yellow.addEventListener("click",function(){
  if(activeButton == true && activeContinue == false){
    glow(3);
    activeContinue == true;
    setTimeout(function(){
      checkSeq(3);
    },1000);
  }
});

green.addEventListener("click",function(){
  if(activeButton == true && activeContinue == false){
    glow(1);
    activeContinue == true;
    setTimeout(function(){
      checkSeq(1);
    },1000);   
  }
});

document.addEventListener('keypress', function(){
  activeGame = true;
  if(lost == true){
    this.location.reload();
  }
  gameStart();
});
}