var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var group = new Array();
var paint;
var accumulator = 1;
var canvasDiv = document.getElementById('canvasDiv');
var positionX = [20, 20, 370, 370];
var positionY = [20, 370, 20, 370];

canvas = document.createElement('canvas');
canvas.setAttribute('width', 400);
canvas.setAttribute('height', 400);
canvas.setAttribute('id', 'canvas');
canvasDiv.appendChild(canvas);
document.getElementById('canvas').style.border = "thick solid black";
if (typeof G_vmlCanvasManager != 'undefined') {
  canvas = G_vmlCanvasManager.initElement(canvas);
}
context = canvas.getContext("2d");
draw();

function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    var i;
    for (i = 3; i >= 0; i--) {
      var R = 6;
      ctx.beginPath();
      ctx.arc(positionX[i], positionY[i], R, 0, 2 * Math.PI, false);
      ctx.lineWidth = 3;
      ctx.strokeStyle = '#FF0000';
      ctx.fillStyle = "red";
      ctx.fill();
    }
  }
}
drawAGV();

// draw agv
function drawAGV() {
  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");
    ctx.strokeStyle = "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16);
    ctx.beginPath();
    var x = Math.floor(Math.random() *(370) + 20);
    var y = Math.floor(Math.random() *(370) + 20);
    ctx.arc(x,y, 8, 0, 2 * Math.PI);
    $('#car_1_x').text("X: "+x);
    $('#car_1_y').text("Y: "+y);
    ctx.lineWidth = 3;
    ctx.fillStyle = "black";
    ctx.fill();
}
//buttons
var start_index,end_index;
$("#menu li a").click(function () {
  $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
  $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
  start_index = $(this).text();
});
$("#menu2 li a").click(function () {
  $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
  $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
  end_index = $(this).text();
  console.log(start_index);
  console.log(end_index);
});
function clear(){
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  clickX = [];
  clickY = [];
  accumulator = 0;
  clickDrag = [];
  group = [];
  draw();
}
function draw_checkpoints(){
  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.arc(positionX[start_index-1], positionY[start_index-1], 6, 0, 2 * Math.PI, false);
  ctx.strokeStyle = '#FF0000';
  ctx.fillStyle = "green";
  ctx.fill();

  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.arc(positionX[end_index-1], positionY[end_index-1], 6, 0, 2 * Math.PI, false);
  ctx.strokeStyle = '#FF0000';
  ctx.fillStyle = "yellow";
  ctx.fill();
}
$("#Clear").click(function () {
  clear();
});
$("#car_generate").click(function(){
  clear();
  drawAGV();
  draw_checkpoints();
});
$('#OK').click(function(){
  draw_checkpoints();
});


// Free Drawing
/*
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
}*/
