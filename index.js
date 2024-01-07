function btnClicked() {
    var buttonInnerHTML = this.innerHTML;
    switch (buttonInnerHTML) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;       
        
        case "l":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;

        default:
            alert('No sound')
            break;
    }
    buttonAnimation(buttonInnerHTML)
} 

function keyPressed(event) {
    var buttonKey = event.key;

    switch (buttonKey) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;       
        
        case "l":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;

        default:
            console.log('Wrong Key')
            break; 
    }

    buttonAnimation(event.key)
}

function buttonAnimation(currentKey) {
    var animationActive = document.querySelector("." + currentKey);

    animationActive.classList.add("pressed");

    setTimeout(function() {
        animationActive.classList.remove("pressed")
    }, 100);
}

var allBtns = document.querySelectorAll(".drum");

for (var i = 0; i < allBtns.length; i++) {
    document.querySelectorAll('.drum')[i].addEventListener("click", btnClicked);
}

document.addEventListener("keydown", keyPressed)