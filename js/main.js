function getCircleColouredPoint(a, b, circleRadius){
	var angle = Math.PI * 2 * a;
	var x = a * circleRadius * 2;
	var y = b * circleRadius * 2;
	var x0,y0;
	x0 = y0 = circleRadius;
	
	return {
        x: Math.cos(angle) * circleRadius * b + x0,
        y: Math.sin(angle) * circleRadius * b + y0,
		r: 100 + Math.floor((1 - b) * 155),
        g: 50,
        b: 50
    };
}

var canvas = document.getElementById("main-canv");
var context = canvas.getContext("2d"),
    a, b, point;

const RADIUS = 200;

window.setInterval(function () {
    for (var i = 0; i < 10000; i++) {
        if (point = getCircleColouredPoint(Math.random(), Math.random(), RADIUS)) {
            context.fillStyle = "rgb(" + point.r + "," + point.g + "," + point.b + ")";
            context.fillRect(point.x, point.y, 1, 1);
		}
	}
}, 1);