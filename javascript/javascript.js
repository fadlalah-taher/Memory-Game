document.querySelector("#red").onclick = function(){
  var audio = new Audio('./assets/sounds/red.mp3');
  audio.play();
  const red = document.querySelector("#red");
  console.log(red.style);
  red.style.boxShadow = "1px 1px 20px 10px white";
  setTimeout(function(){
    red.style.boxShadow = "none";
  },10);
}
document.querySelector("#green").onclick = function(){
  var audio = new Audio('./assets/sounds/green.mp3');
  audio.play();
  const red = document.querySelector("#green");
  console.log(red.style);
  red.style.boxShadow = "1px 1px 20px 10px white";
  setTimeout(function(){
    red.style.boxShadow = "none";
  },10);
}
document.querySelector("#blue").onclick = function(){
  var audio = new Audio('./assets/sounds/blue.mp3');
  audio.play();
  const red = document.querySelector("#blue");
  console.log(red.style);
  red.style.boxShadow = "1px 1px 20px 10px white";
  setTimeout(function(){
    red.style.boxShadow = "none";
  },10);
}
document.querySelector("#yellow").onclick = function(){
  var audio = new Audio('./assets/sounds/yellow.mp3');
  audio.play();
  const red = document.querySelector("#yellow");
  console.log(red.style);
  red.style.boxShadow = "1px 1px 20px 10px white";
  setTimeout(function(){
    red.style.boxShadow = "none";
  },10);
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
