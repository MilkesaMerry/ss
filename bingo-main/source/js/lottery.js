var Lucky=document.getElementById("Lucky_Num");
var SpinnerBtn=document.getElementById("start");
var StopperBtn=document.getElementById("stop");
var ResetBtn=document.getElementById("reset");
var login=document.getElementById("login");
var admin=document.getElementById("admin");
var First_Place=document.getElementById("board1");
var Second_Place=document.getElementById("board2");
var Third_Place=document.getElementById("board3");
var Prizes = ["","","",""];
var i=0;
var stopped=1;
var result;


function startSpinner(){
let ticks = 1;
let clock = setInterval(() => {
result=Math.floor(Math.random() * 50+1);	
Lucky_Num.innerHTML=result;
if (stopped==2) {
clearInterval(clock);
stopped=1;
var cc=Lucky_Num.innerHTML;
Prizes[i]=cc;
First_Place.innerHTML="First Place" +"  "  +"   " + Prizes[1];
Second_Place.innerHTML="Second Place" +"  "  + "   " + Prizes[2];
Third_Place.innerHTML="Third Place" + "  " + "  " + Prizes[3];
}
}, 2);
i++;
}


function stopSpinner(){
stopped=2;

}

function resetSpinner(){
Lucky_Num.innerHTML="-->";
Prizes.length = 0;
location.reload();
}


function loginAdmin(){
	
}


