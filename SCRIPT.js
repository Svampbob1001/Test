var clickSwitch = false;
var firstClick = true;
var orgText;
var element;

function myFunction() {
  if (firstClick == true) {
    element = document.getElementById('dem');
    orgText = element.innerText;
    firstClick = false;
  }

  if (clickSwitch == false) {
    element.innerHTML = 'Paragraph changed.';
  }else {
    element.innerText = orgText;
  }

  clickSwitch = !clickSwitch;
}

function spawnCanvas() {
  var canvas = document.createElement('canvas');
  canvas.id = 'cursorLayer';
  canvas.hight = 200;
  canvas.width = 200;
  canvas.style.border = '1px solid';
  document.body.appendChild(canvas);
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = 'rgba(255, 0, 0, 0.2)';
  ctx.fillRect(20, 20, 80, 80);
}

// TODO: remove this todo
