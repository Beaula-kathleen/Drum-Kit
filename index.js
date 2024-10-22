var i = 0;
while (i <= document.querySelectorAll(".drum").length - 1) {
  document
    .querySelectorAll(".drum")
    [i].addEventListener("click", (e) =>
      handleClick(e.target.innerText)
    );
  i++;
}

document.addEventListener("keydown", (e) => {
  handleClick(e.key);
});

function handleClick(e) {
        document.querySelector(`.${e}`).classList.add("pressed");
        setTimeout(()=> {document.querySelector(`.${e}`).classList.remove("pressed")},100)

  switch (e) {
    case "w":
      play("./sounds/tom-1.mp3");
      break;
    case "a":
      play("./sounds/tom-2.mp3");
      break;
    case "s":
      play("./sounds/tom-3.mp3");
      break;
    case "d":
      play("./sounds/tom-4.mp3");
      break;
    case "j":
      play("./sounds/snare.mp3");
      break;
    case "k":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      play("./sounds/kick-bass.mp3");
      break;

    default:
      break;
  }
}

function play(params) {
  var audio = new Audio(params);
  audio.play();
}
