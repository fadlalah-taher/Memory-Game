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
activeautoClick = false;
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
      header.innerHTML = `level is ${level + 1}`;
      var randomInput = [];
      var arrayEmpty = [];
      autoClick(0);
  }
}

// Random 
var randomarray = [green, red, blue, yellow];
var randomArrayy = [];
var randomInput = [];
//var arrayEmpty = [];

function randomWindow(){
  for(var i=0 ; i < maxLevel ; i++){
    var random = Math.floor(Math.random()*randomarray.length);
    var buttonClick = parseInt(randomarray[random].value);
    randomArrayy[i] = buttonClick;
  }
}
randomWindow();
console.log(randomArrayy);

function autoClick(val){
  console.log(val);
  var buttonClick = randomArrayy[val];
  console.log(buttonClick); 
  randomInput.push(buttonClick);
  wait(2000);
  
  blow(buttonClick);  
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


function blow(button){
  //var color = button.style.backgroundColor;
  // audio play
  if(button == 3){
    
    yellow.style.boxShadow = "1px 1px 20px 10px white";
    yellow.style.backgroundColor = "grey";
    setTimeout(function(){
      new Audio('./assets/sounds/yellow.mp3').play();
      yellow.style.boxShadow = "none";
      yellow.style.backgroundColor = "yellow";
  },200);
  }
   if(button == 2){
    
    red.style.boxShadow = "1px 1px 20px 10px white";
    red.style.backgroundColor = "grey";
  setTimeout(function(){
    new Audio('./assets/sounds/red.mp3').play();
    red.style.boxShadow = "none";
    red.style.backgroundColor = "red";
  },200);
  }
   if(button == 1){
    
    green.style.boxShadow = "1px 1px 20px 10px white";
  green.style.backgroundColor = "grey";
  setTimeout(function(){
    new Audio('./assets/sounds/green.mp3').play();
    green.style.boxShadow = "none";
    green.style.backgroundColor = "green";
  },200);
  }
   if (button==4){
    
    blue.style.boxShadow = "1px 1px 20px 10px white";
  blue.style.backgroundColor = "grey";
  setTimeout(function(){
    new Audio('./assets/sounds/blue.mp3').play();
    blue.style.boxShadow = "none";
    blue.style.backgroundColor = "blue";
  },200);
  }

  // blow

}
// Lose functcion


// Next Level
function nextLevel(level){
  header.innerHTML = "Level " + level;
}


function callautoClick(){
  console.log("Hello Fadel thats it");
  for(var i = arrayEmpty.length-1; i > 0 ; i--){
    console.log(arrayEmpty[i].value);
    console.log(randomArrayy[i].value);
    if(arrayEmpty[i].value == randomArrayy[i].value){
      console.log("Hello Fadel thats it");
      nextLevel(level);
    }
  }
 
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
    console.log("True");
  }else{
    lost = true;
    //youLose();
  }
  
}
function addlevel(){
  level = level +1;
  counter = 0;
  header.innerHTML = `Level is ${level + 1}`;
  blow(randomArrayy[level]);
}

// Event

red.addEventListener("click",function(){
  if(activeButton == true && activeContinue == false){
    blow(2);
    activeContinue == true;
    setTimeout(function(){
      checkSeq(2);
    },1000);
  }
});

blue.addEventListener("click",function(){
  if(activeButton == true && activeContinue == false){
    blow(4);
    activeContinue == true;
    setTimeout(function(){
      checkSeq(4);
    },1000);
  }
});
yellow.addEventListener("click",function(){
  if(activeButton == true && activeContinue == false){
    blow(3);
    activeContinue == true;
    setTimeout(function(){
      checkSeq(3);
    },1000);
  }
});
green.addEventListener("click",function(){
  if(activeButton == true && activeContinue == false){
    blow(1);
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