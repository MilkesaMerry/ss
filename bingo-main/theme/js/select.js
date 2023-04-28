var ONE=document.getElementById("one");
var TWO=document.getElementById("two");
var THREE=document.getElementById("three");
var FOUR=document.getElementById("four");
var FIVE=document.getElementById("five");
var SIX=document.getElementById("six");
var SEVEN=document.getElementById("seven");
var EIGHT=document.getElementById("eight");
var NINE=document.getElementById("nine");
var TEN=document.getElementById("ten");
var select_the_cartella=document.getElementById("select_cartella");
var Picked_Cartella=document.getElementById("onlyCheckBoxes");
var save_the_player=document.getElementById("save_player");
var PHONE=document.getElementById("phoneinp");
var Start_Spinner=document.getElementById("start");
var Stop_Spinner=document.getElementById("stop");
var Reset_Spinner=document.getElementById("reset");
var Admin_Pannel=document.getElementById("admin");
var Mobile_Num=document.getElementById("mobile");
var Bank_Num=document.getElementById("bank");
var Log_In=document.getElementById("to_log_in");
var Stored_Data=document.getElementById("values_stored");

var Bought_Cartellas=[];


function savePlayerInfo() {
var PHONE=document.getElementById("phoneinp").value;
let checkboxes=document.querySelectorAll('input[name="cartella"]:checked');
let values=[];
checkboxes.forEach((checkbox)=>{
	values.push(checkbox.value);
});
if (values.length==0 || PHONE=="") {
window.alert("Please Select One Cartella, Account Number or Phone Number Is Also Required");
window.location.href="index.html";
}else if (window.confirm("Selected Cartellas "+values+" Phone/Account "+ PHONE)) {
window.location.href="lotto.html";
Bought_Cartellas.push(values);
Bought_Cartellas.push(PHONE);
for (var i = Bought_Cartellas.length; i >= 0; i--) {
Stored_Data.innerHTML=Bought_Cartellas[i];
}}else{
	window.location.href="index.html";
}

}



