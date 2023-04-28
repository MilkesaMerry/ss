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

var PHONE=document.getElementById("phone");
var ACCOUNT=document.getElementById("account");


var current_index=0; 
var allCartellas=[ONE,TWO,THREE,FOUR,FIVE,SIX,SEVEN,EIGHT,NINE,TEN];
var the_name;

function savePlayerInfo() {

var phone_num=PHONE.innerHTML;
var account_num=ACCOUNT.innerHTML;
let checkboxes=document.querySelectorAll('input[name="cartella"]:checked');

let values=[];
checkboxes.forEach((checkbox)=>{
	values.push(checkbox.value);
});
alert(values);
}





