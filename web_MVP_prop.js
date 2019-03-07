//context = document.getElementById('canvasInAPerfectWorld').getContext("2d");
var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var group = new Array();
var paint;
var accumulator = 1;
var canvasDiv = document.getElementById('canvasDiv');
canvas = document.createElement('canvas');
canvas.setAttribute('width', 400);
canvas.setAttribute('height', 400);
canvas.setAttribute('id', 'canvas');
canvasDiv.appendChild(canvas);
if (typeof G_vmlCanvasManager != 'undefined') {
  canvas = G_vmlCanvasManager.initElement(canvas);
}
context = canvas.getContext("2d");

$('#canvas').mousemove(function(e) {
  if (paint) {
    addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
    redraw();
  }
});
$('#canvas').mouseup(function(e) {
  paint = false;
  accumulator++;
});
$('#canvas').mousedown(function(e) {
  paint = true;
});
function addClick(x, y, dragging) {
  clickX.push(x);
  clickY.push(y);
  clickDrag.push(dragging);
  group.push(accumulator);
}
function redraw() {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas
  context.strokeStyle = "#df4b26";
  context.lineJoin = "round";
  context.lineWidth = 5;
  for (var i = 0; i < clickX.length; i++) {
    context.beginPath();
    if (clickDrag[i] && i && group[i - 1] == group[i]) {
      context.moveTo(clickX[i - 1], clickY[i - 1]);
      context.lineTo(clickX[i], clickY[i]);

    }
    context.closePath();
    context.stroke();
  }

}
