var lastClicked = null;
   
function toggleRotation(clickedContainer) {
  var containers = document.querySelectorAll('.container');
  console.log(containers)
  containers.forEach((container)=> {
    
   var h1 = container.querySelector('h1');
   var p = container.querySelector('p');
   var num1 = container.querySelector('.num1');
   var num = container.querySelector('.num');
 if (container === clickedContainer) {
   h1.classList.toggle("rotated");
   p.style.opacity = h1.classList.contains("rotated") ? 0 : 1;
   num1.style.display = "none"; 
   num.style.mariginTop = "90px"; 
   container.style.width = h1.classList.contains("rotated") ? "100px" : "403px";
   container.style.height = h1.classList.contains("rotated") ? "367px" : "367px";
   h1.style.width = h1.classList.contains("rotated") ? "240px" : "200px";
 } else {
   h1.classList.add("rotated");
   p.style.opacity = 0;
   num1.style.display = "block"; 
   num.style.mariginTop="0px" 
   container.style.width = "100px";
   container.style.height = "367px";
   h1.style.width = "240px";
 }
});
  lastClicked = clickedContainer;
}

toggleRotation(document.querySelectorAll(".container")[0]);
toggleRotation(document.querySelectorAll(".container")[0]);









































