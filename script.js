var lastClicked = null;

function toggleRotation(clickedContainer) {
  if (lastClicked !== null && lastClicked !== clickedContainer) {
    lastClicked.querySelector('h2').classList.remove("rotated");
    lastClicked.querySelector('p').style.opacity = 0;
    lastClicked.style.width = "480px";
  }

  var h2 = clickedContainer.querySelector('h2');
  h2.classList.toggle("rotated");

  var p = clickedContainer.querySelector('p');

  if (h2.classList.contains("rotated")) {
    p.style.opacity = 1;
    clickedContainer.style.width = "480px";
  } else {
    p.style.opacity = 0;
    clickedContainer.style.width = "80px";
  }

  lastClicked = clickedContainer;
}


toggleRotation(document.querySelectorAll(".container")[0]);
toggleRotation(document.querySelectorAll(".container")[0]);