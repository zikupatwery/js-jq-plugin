// js
wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();


// text change
function textChange(){
    document.getElementById('tc').innerHTML="Hello world";
}

// show date
function showDate(){
    document.getElementById('sd').innerHTML=Date();
}
// on/off
function bulbOn(){
    document.getElementById('img').src="images/on.gif";
}
function bulbOff(){
    document.getElementById('img').src="images/off.gif";
}
// color change
function colorchange(){
    document.getElementById('cc').style.color="red";
}
function colorprimary(){
    document.getElementById('cc').style.color="green";
}
// show/hide
function textHide(){
document.getElementById('sh').style.display="none";
}
function textShow(){
document.getElementById('sh').style.display="block";
}
// class name
function cName(){
document.getElementsByClassName('h2')[0].innerHTML="Hello world";
}
// addition
var number1 = 5;
var number2 = 3;

var result = number1 + number2;

function dataAddition(){
    document.getElementById('sum').innerHTML=result;
}
$(document).ready(function(){
    alert("Hello my well wisher");
})
$(document).ready(function(){
$('.counter').counterUp({
    delay: 10,
    time: 1000
});
})