function ChangePictureCat() {
  var x = document.getElementById("slPictureCat").value;
  var gala = document.getElementById("gala");
  var avatar = document.getElementById("avatar");
  var swimsuit = document.getElementById('swimsuit');
  var GlamShot = document.getElementById('GlamShot');
  var portrait =document.getElementById('portrait');
  switch (x) {
    case "1":
      gala.style.display = "none";
      avatar.style.display = "block";
      swimsuit.style.display="none";
      GlamShot.style.display="none";
      portrait.style.display="none";
      break;
    case "2":
      gala.style.display = "block";
      avatar.style.display = "none";
      swimsuit.style.display="none";
      GlamShot.style.display="none";
      portrait.style.display="none";
      break;
    case "3":
      swimsuit.style.display="block";
      gala.style.display="none";
      avatar.style.display="none";
      GlamShot.style.display="none";
      portrait.style.display="none";
      break;
    case "4":
      swimsuit.style.display="none";
      gala.style.display="none";
      avatar.style.display="none";
      GlamShot.style.display="block";
      portrait.style.display="none";
      break;
    case "5":
      swimsuit.style.display="none";
      gala.style.display="none";
      avatar.style.display="none";
      GlamShot.style.display="none";
      portrait.style.display="block";
      break;
  }
}
