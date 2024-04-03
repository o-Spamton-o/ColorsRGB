// RGB Colors

document.getElementById("black").addEventListener("click", blackDisplay);

function blackDisplay() {
  document.getElementById("display").style.background = "black";
  document.getElementById("eee").innerHTML = "rgb(0,0,0)";
}

document.getElementById("white").addEventListener("click", whiteDisplay);

function whiteDisplay() {
  document.getElementById("display").style.background = "white";
  document.getElementById("eee").innerHTML = "rgb(255,255,255)";
}

document.getElementById("previewBtn").addEventListener("click", rgbs);

function rgbs() {
  let r = +document.getElementById("redBG").value;
  let g = +document.getElementById("greenBG").value;
  let b = +document.getElementById("blueBG").value;

  document.getElementById("display").style.backgroundColor =
    "rgb(" + r + "," + g + "," + b + ")";

  document.getElementById("eee").innerHTML = `rgb(${r},${g},${b})`;
}
