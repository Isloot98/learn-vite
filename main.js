function moveBox() {
  var box = document.getElementById("box");
  var containerWidth = document.querySelector(".container").offsetWidth;
  var boxWidth = box.offsetWidth;
  var newPosition = Math.floor(Math.random() * (containerWidth - boxWidth));

  box.style.transform = "translateX(" + newPosition + "px)";
}

document.addEventListener("DOMContentLoaded", function() {
  let button = document.getElementById("button");
  button.addEventListener("click", moveBox);
});
