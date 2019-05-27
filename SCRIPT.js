let clickSwitch = false;
let firstClick = true;
let orgText;
let element;

function myFunction() {
  if (firstClick == true) {
    element = document.getElementById("demo");
    orgText = element.innerText;
    firstClick = false;
  }
  if (clickSwitch == false) {
    element.innerHTML = "Paragraph changed.";
  }else {
    element.innerText = orgText;
  }
  clickSwitch = !clickSwitch;
}
