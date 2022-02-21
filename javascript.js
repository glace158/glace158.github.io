window.addEventListener("keydown", checkKeyDown, false);
window.addEventListener("keyup", checKeyUp, false);

var heading = document.querySelector('#heading');
heading.onclick = function(){
    heading.style.color = "red";
    console.log("hello");
}

var isdelay = 0;
var time;
function checkKeyDown(e){
  console.log("down: " + e.key);
  
  if(isdelay == 1){
    var timer = new Date();
    isdelay = 0.5 <= ((timer.getTime() - time.getTime())/1000) ? 0 : 1; 
  }
  else{
    time = new Date();
    isdelay = 1;
    console.log("hello");
  }
}

function checKeyUp(e){
  console.log("up: " + e.key);
}

var now;
document.querySelector("#rebutton").onclick = function(){
  if(this.value == "record"){
    this.value = "stop";
    now = new Date();
  }
  else{
    this.value = "record";
    var end = new Date();
    
    var tonow = now.getTime();
    var toend = end.getTime();
    var passed = toend - tonow;

    passed = passed/1000;

    console.log(passed);
  }
}