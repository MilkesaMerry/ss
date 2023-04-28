var Start_Spinner=document.getElementById("start");
var Stop_Spinner=document.getElementById("stop");
var Reset_Spinner=document.getElementById("reset");
var Admin_Pannel=document.getElementById("admin");
var Mobile_Num=document.getElementById("mobile");
var Bank_Num=document.getElementById("bank");
var Log_In=document.getElementById("to_log_in");

function Adminstrator() {
	// body...
var userName;
while(!userName) {
 userName = prompt("Enter your name", "");
 if(userName=="k") {
   Start_Spinner.style.display="flex";
   Stop_Spinner.style.display="flex";
   Reset_Spinner.style.display="flex";
 } else {
 	confirm("Exit");
 }
}
}