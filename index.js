

var audio1 = new Audio("sounds/birthday-song.m4a");
var audio2 = new Audio("sounds/run.m4a");
var clicked1 = false;
var clicked2 = false;
// Click on pics
document.querySelector(".I").addEventListener('click',function(){
  if (!clicked1) {
      audio1.play();
      audio2.pause();
      clicked1 = true;
  }else {
    audio1.pause();
    clicked1 = false;
  }
});

document.querySelector(".U").addEventListener('click',function(){
  document.querySelector(".letters").style.display="flex";
});

document.querySelector(".us").addEventListener('click',function(){
  document.querySelector(".gifts").style.display="flex";
});


// popwindow

  var popupLink1 = document.getElementById("scratcher1");
  var popupLink2 = document.getElementById("scratcher2");
  var popupLink3 = document.getElementById("scratcher3");
  var popupLink4 = document.getElementById("scratcher4");
  var popupLink5 = document.getElementById("scratcher5");
  var popupLink6 = document.getElementById("scratcher6");
  var popupWindow = document.getElementById("popup-window");
  var closeButton = document.querySelector(".btn-close");
  var package = document.querySelector(".package");
  // Show the pop-up window when the link is clicked
  popupLink1.addEventListener("click", function(event) {
    event.preventDefault();
    popupWindow.style.display = "flex";
    package.src = "images/wolves1.jpg";
  });

  popupLink2.addEventListener("click", function(event) {
    event.preventDefault();
    popupWindow.style.display = "flex";
    package.src = "images/dog3.jpg";
  });

  popupLink3.addEventListener("click", function(event) {
    event.preventDefault();
    popupWindow.style.display = "flex";
    package.src = "images/heart18.jpg";
  });

  popupLink4.addEventListener("click", function(event) {
    event.preventDefault();
    popupWindow.style.display = "flex";
    package.src = "images/seafood24.jpg";
  });

    popupLink5.addEventListener("click", function(event) {
      event.preventDefault();
      popupWindow.style.display = "flex";
      package.src = "images/meet39.jpg";
    });

    popupLink6.addEventListener("click", function(event) {
      event.preventDefault();
      popupWindow.style.display = "flex";
      package.src = "images/travel40.jpg";
      if (!clicked2) {
          audio2.play();
          clicked2 = true;
          audio1.pause();
      }else {
          audio2.pause();
          clicked2 = false;
      }
    });
  // Hide the pop-up window when the close button is clicked
  closeButton.addEventListener("click", function() {
    popupWindow.style.display = "none";
  });
