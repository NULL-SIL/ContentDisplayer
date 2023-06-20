var viewFullScreen = document.getElementById("view-fullscreen");
if (viewFullScreen) {
  viewFullScreen.addEventListener("click", function() {
    var docElm = document.documentElement;
    if (docElm.requestFullscreen) {
      docElm.requestFullscreen();
    } else if (docElm.msRequestFullscreen) {
      docElm.msRequestFullscreen();
    } else if (docElm.mozRequestFullScreen) {
      docElm.mozRequestFullScreen();
    } else if (docElm.webkitRequestFullScreen) {
      docElm.webkitRequestFullScreen();
    }
  })
}

var imagesSrcLocation="https://raw.githubusercontent.com/NULL-SIL/ContentDisplayer/maintenance/img/img-";
var targetImgControllerFile="https://raw.githubusercontent.com/NULL-SIL/ContentDisplayer/maintenance/displayImg.txt";

function httpGetAsync(url, callback)
{
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
}

sharedImg = document.getElementById("Img");

function setNewImg(targetImgId){
  sharedImg.src = imagesSrcLocation + targetImgId + ".png";
}


function generateId(len) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charsLen = chars.length;

  var res = "";
  for (var i =0; i < len; i++){
    res += chars.charAt(Math.floor(Math.random() * charsLen));
  }

  return res;
}

function changeImg(){
    httpGetAsync(targetImgControllerFile + "?v=" + generateId(20), setNewImg);

    setTimeout(changeImg, 5000);
}

changeImg();