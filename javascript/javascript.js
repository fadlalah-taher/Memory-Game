var container = document.getElementsByClassName("container");
var body = document.getElementById("body");
var green = document.getElementById("green");
var red = document.getElementById("red");
var blue = document.getElementById("blue");
var yellow = document.getElementById("yellow"); 
var randomarray = ['green', 'red', 'blue', 'yellow'];
/*let random = Math.floor(Math.random()*randomarray.length)
const randomm = randomarray[random]
console.log(randomm)*/
/*
var audio = new Audio('./assets/sounds/red.mp3');
audio.play();*/
/*
document.querySelector("#body").onclick = function(){
  
  console.log("hi")
  //const 
  for(let i = 0 ; i < 15 ; i++){
    console.log("hello")
    let random = Math.floor(Math.random()*randomarray.length)
    const randomm = randomarray[random]
    console.log(randomm)
  if(randomm == 'red'){
    var audio = new Audio('./assets/sounds/red.mp3');
    audio.play();
    // blow button
    const red = document.querySelector("#red");
    console.log(red.style);
    red.style.boxShadow = "1px 1px 20px 10px white";
    setTimeout(function(){
      red.style.boxShadow = "none";
    },10);
  }
  else if((randomm == 'blue')){
    var audio = new Audio('./assets/sounds/blue.mp3');
    //audio.muted = true;
    audio.play(); 
    // blow button
    const red = document.querySelector("#blue");
    console.log(red.style);
    red.style.boxShadow = "1px 1px 20px 10px white";
    setTimeout(function(){
      red.style.boxShadow = "none";
    },10);
  }
  else if((randomm == 'yellow')){
    var audio = new Audio('./assets/sounds/yellow.mp3');
    //audio.muted = true;
    audio.play(); 
    // blow button
    const red = document.querySelector("#yellow");
    console.log(red.style);
    red.style.boxShadow = "1px 1px 20px 10px white";
    setTimeout(function(){
      red.style.boxShadow = "none";
    },10);
  }
  else{
    var audio = new Audio('./assets/sounds/green.mp3');
    //audio.muted = true;
    audio.play(); 
    // blow button
    const red = document.querySelector("#green");
    console.log(red.style);
    red.style.boxShadow = "1px 1px 20px 10px white";
    setTimeout(function(){
      red.style.boxShadow = "none";
    },10);
  }
}
}
*/
/*
// Create empty array
const clickarray = [];
var randomarray = ['#green', '#red', '#blue', '#yellow']
//var randomclick = randomarray[Math.floor(Math.random() * randomarray.length)];
//console.log(randomclick)
let random = Math.floor(Math.random()*randomarray.length)
let randomm = randomarray[random]
function clickByItself(param){
  console.log(param);
  document.querySelector(param).click();
  //document.getElementById(param).click();
}
clickByItself(randomm); */
/*
// Array
const clickarray = [];
document.querySelector("#red").onclick = function(){
  clickarray.push("red");
  console.log(clickarray);
  // audio play
  var audio = new Audio('./assets/sounds/red.mp3');
  audio.play(); 
  // blow button
  const red = document.querySelector("#red");
  console.log(red.style);
  red.style.boxShadow = "1px 1px 20px 10px white";
  red.style.backgroundColor = "grey";
  setTimeout(function(){
    red.style.boxShadow = "none";
    red.style.backgroundColor = "red";
  },80);
} 
// green button
document.querySelector("#green").onclick = function(){
  clickarray.push("green");
  console.log(clickarray);
  // audio play
  var audio = new Audio('./assets/sounds/green.mp3');
  audio.play();
  // blow button
  const red = document.querySelector("#green");
  console.log(red.style);
  red.style.boxShadow = "1px 1px 20px 10px white";
  red.style.backgroundColor = "grey";
  setTimeout(function(){
    red.style.boxShadow = "none";
    red.style.backgroundColor = "green";
  },80);
}
// blue button
document.querySelector("#blue").onclick = function(){
  clickarray.push("blue");
  console.log(clickarray);
  // audio play
  var audio = new Audio('./assets/sounds/blue.mp3');
  audio.play();
  // blow button
  const red = document.querySelector("#blue");
  console.log(red.style);
  red.style.boxShadow = "1px 1px 20px 10px white";
  red.style.backgroundColor = "grey";
  setTimeout(function(){
    red.style.boxShadow = "none";
    red.style.backgroundColor = "blue";
  },80);
}
// Yellow button
document.querySelector("#yellow").onclick = function(){
  clickarray.push("yellow");
  console.log(clickarray);
  // audio play
  var audio = new Audio('./assets/sounds/yellow.mp3');
  audio.play();
  // blow button
  const red = document.querySelector("#yellow");
  red.style.backgroundColor = "grey";
  console.log(red.style);
  red.style.boxShadow = "1px 1px 20px 10px white";
  red.style.backgroundColor = "grey";
  setTimeout(function(){
    red.style.boxShadow = "none";
    red.style.backgroundColor = "yellow";
  },80);
}
*/
//const element = document.getElementById("red");
//element.addEventListener("click", myFunction);

//function myFunction() {
//  document.getElementById("red").innerHTML = "Hello World";
//}C:\Users\Fadel\Desktop\Memory Game\assets\sounds\red.mp3
/* Button blow when click*/
//let element = document.getElementById("green");
//element.addEventListener("click", myFunction);

//function myFunction() {
 
  //setTimeout(function(){
  //  document.getElementById("green").setAttribute("style", "box-shadow: 1px 1px 20px 10px white;");
  //},10);
  //document.getElementById("green").removeAttribute("style", "box-shadow");
  //document.getElementById("green").setAttribute("style", "box-shadow: 1px white;");
  //document.getElementById("green").setAttribute("style", "display: none;");
  //document.getElementById("red").style.boxShadow="1px 1px 20px 10px white";

//}
//document.getElementById("green").setAttribute("style", "box-shadow: box-shadow: 1px white");




//var audio = new Audio("/assets/sounds/red.mp3");
//var element = document.getElementById("red");
//element.addEventListener("click", myFunction);
//function myFunction() {
///  document.getElementById("red").audio.play();
//}

// Function
/*
function startRed(){
  // audio play
  var audio = new Audio('./assets/sounds/red.mp3');
  audio.play(); 
  red.style.boxShadow = "1px 1px 20px 10px white";
  red.style.backgroundColor = "grey";
  setTimeout(function(){
    red.style.boxShadow = "none";
    red.style.backgroundColor = "red";
  },80);
}

function startgreen(){
  // audio play
  var audio = new Audio('./assets/sounds/green.mp3');
  audio.play(); 
  green.style.boxShadow = "1px 1px 20px 10px white";
  green.style.backgroundColor = "grey";
  setTimeout(function(){
    green.style.boxShadow = "none";
    green.style.backgroundColor = "green";
  },80);
}

function startYellow(){
  // audio play
  var audio = new Audio('./assets/sounds/yellow.mp3');
  audio.play(); 
  yellow.style.boxShadow = "1px 1px 20px 10px white";
  yellow.style.backgroundColor = "grey";
  setTimeout(function(){
    yellow.style.boxShadow = "none";
    yellow.style.backgroundColor = "yellow";
  },80);
}

function startBlue(){
  // audio play
  var audio = new Audio('./assets/sounds/blue.mp3');
  audio.play(); 
  blue.style.boxShadow = "1px 1px 20px 10px white";
  blue.style.backgroundColor = "grey";
  setTimeout(function(){
    blue.style.boxShadow = "none";
    blue.style.backgroundColor = "blue";
  },80);
}*/

function gameStart(){
  if(activeGame == true){
    activeButton = true;

  }
}
function blow(button){
  var color = button.style.backgroundColor;
  // audio play
  if(button == yellow){
    var audio = new Audio('./assets/sounds/yellow.mp3');
  }
  else if(button == red){
    var audio = new Audio('./assets/sounds/red.mp3');
  }
  else if(button == green){
    var audio = new Audio('./assets/sounds/green.mp3');
  }
  else{
    var audio = new Audio('./assets/sounds/blue.mp3');
  }
  audio.play(); 

  // blow
  button.style.boxShadow = "1px 1px 20px 10px white";
  button.style.backgroundColor = "grey";
  setTimeout(function(){
    button.style.boxShadow = "none";
    button.style.backgroundColor = color;
  },80);
}

// Variable

activeGame = false;
activeButton = false;


// Event

red.addEventListener("click",function(){
  if(activeButton == true){
    blow(red);
  }
});
blue.addEventListener("click",function(){
  if(activeButton == true){
    blow(blue);
  }
});
yellow.addEventListener("click",function(){
  if(activeButton == true){
    blow(yellow);
  }
});
green.addEventListener("click",function(){
  if(activeButton == true){
    blow(green);
  }
});

body.addEventListener("click", function(){
  activeGame = true;
  gameStart();
});

