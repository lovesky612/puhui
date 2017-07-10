var canvasDiv = document.getElementById('canvasDiv');
var canvas = document.createElement('canvas');
var canvasWidth = document.body.scrollWidth||document.documentElement.scrollWidth, canvasHeight=150;
var point = {};
var color="#000000",linewidth=5;
point.notFirst = false;

canvas.setAttribute('width', canvasWidth);
canvas.setAttribute('height', canvasHeight);
canvas.setAttribute('id', 'canvas');
canvasDiv.appendChild(canvas);

if(typeof G_vmlCanvasManager != 'undefined') {

	canvas = G_vmlCanvasManager.initElement(canvas);
}
var context = canvas.getContext("2d");


canvas.addEventListener("touchstart", function(e){
 e.preventDefault();// 阻止浏览器默认事件，重要 
        var touch = e.targetTouches[0];
        // 把元素放在手指所在的位置
/*        obj.style.left = touch.pageX-50 + 'px';
        obj.style.top = touch.pageY-50 + 'px';
*/		
  var mouseX = touch.pageX - this.offsetLeft;
  var mouseY = touch.pageY - this.offsetTop;
  paint = true;
  addClick(touch.pageX - this.offsetLeft, touch.pageY - this.offsetTop);
  redraw();
});

canvas.addEventListener("touchmove", function(e){
  if(paint){
   e.preventDefault();// 阻止浏览器默认事件，重要 
        var touch = e.targetTouches[0];

    addClick(touch.pageX - this.offsetLeft, touch.pageY - this.offsetTop, true);
    redraw();
  }
});

canvas.addEventListener("touchend", function(e){
  paint = false;
});

canvas.addEventListener("touchend", function(e){
  paint = false;
});
/*canvas.addEventListener("mousedown", function(e){
  var mouseX = e.pageX - this.offsetLeft;
  var mouseY = e.pageY - this.offsetTop;
  paint = true;
  addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
  redraw();
});

canvas.addEventListener("mousemove", function(e){
  if(paint){
    addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
    redraw();
  }
});

canvas.addEventListener("mouseup", function(e){
  paint = false;
});

canvas.addEventListener("mouseleave", function(e){
  paint = false;
});

*/var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var paint;

function addClick(x, y, dragging)
{
  clickX.push(x);
  clickY.push(y);
  clickDrag.push(dragging);
}

function redraw(){
  context.strokeStyle =color;
  context.lineJoin = "round";
  context.lineWidth =linewidth;
  
  while (clickX.length > 0 ) {
	  point.bx = point.x;
	  point.by = point.y;
	  point.x = clickX.pop();
	  point.y = clickY.pop();
	  point.drag = clickDrag.pop();
	  context.beginPath();
	  if (point.drag && point.notFirst) {
		  context.moveTo(point.bx, point.by);
	  } else {
		  point.notFirst = true;
		  context.moveTo(point.x - 1, point.y);
	  }
     context.lineTo(point.x, point.y);
     context.closePath();
     context.stroke();
	
  }
}

var clear = document.getElementById("btn_clear");
//var submit = document.getElementById("btn_submit");
var btn_color = document.getElementById("btn_color");
var btn_chuxi = document.getElementById("btn_chuxi");


clear.addEventListener("click", function(){
	canvas.width = canvas.width;
});

/*submit.addEventListener("click", function(){
	alert(canvas.toDataURL("image/png"));
});
*/


if(btn_color){
btn_color.addEventListener("change", function(){
	color=this.value;
});

btn_chuxi.addEventListener("change", function(){
	  linewidth =this.value;
});

}