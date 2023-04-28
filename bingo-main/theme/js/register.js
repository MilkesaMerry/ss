var Reg=document.getElementById("reg_btn");
var Name=document.getElementById("player_name");
var Phone=document.getElementById("player_phone");
var Referral=document.getElementById("referral_code");

function registerPlayer() {
    NameV=Name.value;
    PhoneV=Phone.value;
    if (NameV=="" || PhoneV=="") {
    	alert("Please Complete Registration");
    	window.location.href="lottery.html";
    }else {
    	window.location.href="index.html";
    }
}
