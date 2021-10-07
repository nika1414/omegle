function New() {
  document.getElementById("newBtn").innerHTML = "Stop";
}

function Send() {
  let sent = document.getElementById("written").value;
  document.getElementById("bodyChat").innerHTML = sent;
  document.getElementById("bodyChat").style.color = "black";
  document.getElementById("bodyChat").style.fontWeight = "lighter";
  document.getElementById("youChat").innerHTML = "You:";
  document.getElementById("youChat").style.color = "blue";
  document.getElementById("youChat").style.fontWeight = "bold";
}
