/* the add addEventListener has two parameter
the first one : that accept the type of the listener and in this case
the listener (the event that will happen ) that when i click by using the mouse or the left button on the
keyboard .
the second parameter is the function that will do something when i click on it or when i do the specific
event which here it will make an alert to the function says "i got clicked now ".
*/
var numberOfDrumsButtons = document.querySelectorAll(".drum").length; //extract the length of the classes that have the same class called .drum
//here i will use the above var to make a compare between the var i and the end of the length of the drum's classes
/*here i make loop to addEventListener to all the button and
the event when i toggle it by the clicking on any class that have the name .drum
will activated the function clicked that will change the color to the white*/
function switcher(testing){
  switch (testing) {
    case "w":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;
    case "a":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;
    case "s":
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;
    case "d":
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;
    case "j":
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
    break;
    case "k":
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
    break;
    case "l":
    var kickBass = new Audio("sounds/kick-bass.mp3");
    kickBass.play();
    break;
    default:
    alert("wrong keyword that being pressed!!");
  }}
for (var i = 0; i < numberOfDrumsButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
  var buttonTab = this.innerHTML;
  switcher(buttonTab);
buttionAnimation(buttonTab);
})}
// function clicked() {
//
//   //this in the event method refers to the element that being receveid the event
// }
document.addEventListener("keydown",function(event){
  var ke=event.key;
  switcher(ke);
  buttionAnimation(ke);
//keyword event addition
//here i add the document to the addEventListener below because there is not such relationship between the keyboard and the elements and the below i make it to the drum class because i can touch by clicking the button class  and this will trigger the function to do some thing but here i'm dilling with the keyborad which is not directed to any thing when i click it so i make before the addition the .document to
//the event parameter show me which keyboard had being hitting and this will help me to know the computer which keyword has been hitting
});
function buttionAnimation(currentkey){
  var animationButton=document.querySelector("."+currentkey).classList.add("pressed");
  setTimeout(function () {
document.querySelector("."+currentkey).classList.remove("pressed");

}, 200);
}
