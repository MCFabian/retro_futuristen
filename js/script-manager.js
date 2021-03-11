// Banner Box
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("img-slider");
  for (i = 0; i < x.length; i++) {
    x[i].style.opacity = "0";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.opacity = "1";  
  setTimeout(carousel, 4000); // set time to change img
}


// Table Player

function tableplayer() {
var acc = document.getElementsByClassName("more");
var i;

for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
        var buttons = document.getElementsByClassName("more");
        var panel = document.getElementsByClassName("panel")[Array.prototype.indexOf.call(buttons, this)];

        if (panel.classList.contains("panel-open")){
            panel.classList.remove("panel-open");
        } else {
            panel.classList.add("panel-open");
        } 
    });
}
}

function playstart(){
  document.getElementsByClassName("start").innerHTML = "pause";
}