let green = document.getElementById("#green");
let red = document.getElementById("#red");
let blue = document.getElementById("#blue");
let yellow = document.getElementById("#yellow"); 
var randomarray = ['green', 'red', 'blue', 'yellow']
let random = Math.floor(Math.random()*randomarray.length)
const randomm = randomarray[random]
console.log(randomm)
/*
var audio = new Audio('./assets/sounds/red.mp3');
audio.play();*/

if(randomm == 'red'){
  /*var audio = new Audio('./assets/sounds/red.mp3');
  audio.play();*/

  // blow button
  const red = document.querySelector("#red");
  console.log(red.style);
  red.style.boxShadow = "1px 1px 20px 10px white";
  setTimeout(function(){
    red.style.boxShadow = "none";
  },10);
}
else{
 /* var audio = new Audio('./assets/sounds/red.mp3');
  audio.muted = true;
  audio.play(); */
  // blow button
  const red = document.querySelector("#red");
  console.log(red.style);
  red.style.boxShadow = "1px 1px 20px 10px white";
  setTimeout(function(){
    red.style.boxShadow = "none";
  },10);
}
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
