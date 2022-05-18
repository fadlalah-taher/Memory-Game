const element = document.getElementById("red");
element.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("red").innerHTML = "Hello World";
}