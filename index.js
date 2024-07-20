for(var i = 0;i < document.querySelectorAll(".drum").length; i++ )
//we are not writing here queryselectorAll("button") because if we add new button in our webpage it also loop that button      
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function()
{
    //play sound in button
   //this kaan lga ke batega ki kons button click hua hai
    //this.style.color = "white"; 
    

    var buttoninnerhtml = this.innerHTML;
     make_sound(buttoninnerhtml);
    
});

}

  //whole document pe lagana hai
  //simple event likhne se or ushe cionsole krane se ushami pura button ka code aa rha hai
  
  document.addEventListener("keypress", function(event)
{
   make_sound(event.key);
});


function make_sound(key)
    {
      switch(key)

    {
       case "w":
        var audio1 = new Audio("sounds/tom-1.mp3");
        audio1.play();
          break;

        case "a":
          var audio2 = new Audio("sounds/tom-2.mp3");
           audio2.play();
           break;

           case "s":
        var audio3 = new Audio("sounds/tom-3.mp3");
        audio3.play();
        break;

        case "d":
            var audio4 = new Audio("sounds/tom-4.mp3");
            audio4.play();
            break;

            case "j":
                var audio5 = new Audio("sounds/snare.mp3");
                audio5.play();
                break;

                case "k":
                    var audio6 = new Audio("sounds/crash.mp3");
                    audio6.play();
                    break;

                    case "l":
                     var audio7 = new Audio("sounds/kick-bass.mp3");
                      audio7.play();
                      break;
                      
                      default:
                        console.log(buttoninnerhtml);
    
    }
    }






// var audio = new Audio("sounds/crash.mp3");
//       audio.play();