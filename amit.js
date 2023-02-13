
var nofdrumb = document.querySelectorAll(".drum");
for (var i = 0; i <nofdrumb.length; i++){
nofdrumb[i].addEventListener("click",function(){
  var buttoninnerhtml = this.innerHTML;
  Sound(buttoninnerhtml);
});

document.addEventListener("keyup", function(event){
  Sound(event.key);

});
function Sound(key){
   switch (key) {
     case "D":
     var tom1 = new Audio("C:/Users/User/Downloads/web development/HTML- Personal site/DOM/Drum Kit Starting Files/sounds/tom-1.mp3");
     tom1.play();
       break;
       case "R":
       var tom2 = new Audio("C:/Users/User/Downloads/web development/HTML- Personal site/DOM/Drum Kit Starting Files/sounds/tom-2.mp3");
       tom2.play();
       break;
       case "U":
       var tom3 = new Audio("C:/Users/User/Downloads/web development/HTML- Personal site/DOM/Drum Kit Starting Files/sounds/tom-3.mp3");
       tom3.play();
       break;
       case "M":
       var tom4 = new Audio("C:/Users/User/Downloads/web development/HTML- Personal site/DOM/Drum Kit Starting Files/sounds/tom-4.mp3");
       tom4.play();
       break;

     case "K":
     var snare = new Audio("C:/Users/User/Downloads/web development/HTML- Personal site/DOM/Drum Kit Starting Files/sounds/snare.mp3");
     snare.play();
     break;
     case "I":
     var kick = new Audio("C:/Users/User/Downloads/web development/HTML- Personal site/DOM/Drum Kit Starting Files/sounds/kick-bass.mp3");
     kick.play();
     break;
    case "T":
    var crash = new Audio("C:/Users/User/Downloads/web development/HTML- Personal site/DOM/Drum Kit Starting Files/sounds/crash.mp3");
    crash.play();
    break;
    default:
   }
 }

     }
