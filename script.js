var bargraph = document.querySelector('#bargraph');

var circlegraph = document.querySelector('#circlegraph');

var ctx = bargraph.getContext('2d');

var ctx = circlegraph.getContext('2d');

// var X = 0;
// var Y = 0;
// var width = 500;
// var height = 50;

ctx.fillStyle = "blue";

ctx.fillRect(10, 50, 8, 300);
ctx.fillRect(25, 50, 8, 300);
ctx.fillRect(40, 50, 8, 300);
ctx.fillRect(55, 50, 8, 300);
ctx.fillRect(70, 50, 8, 300);
ctx.fillRect(85, 50, 8, 300);
ctx.fillRect(100, 150, 8, 300);
ctx.fillRect(115, 150, 8, 300);
ctx.fillRect(130, 150, 8, 300);
ctx.fillRect(145, 150, 8, 300);

ctx.fillRect(160, 150, 8, 300);
ctx.fillRect(175, 150, 8, 300);
ctx.fillRect(190, 150, 8, 300);
ctx.fillRect(1005, 150, 8, 300);



circlegraph.ctx,
circlegraph.width/2,
circlegraph.height/2,
circlegraph.options.doughnutHoleSize * Math.min(this.canvas.width/2,this.canvas.height/2),
0,
2 * Math.PI,
"#ff0000"

// console.log(canvas);


// function draw(){
//       // var canvas = $('#bargraph');

//       var canvas = document.querySelector('#bargraph');
//       var context = canvas.getContext("2d");

//       var X = 0;
//       var Y = 0;
//       var width = 500;
//       var height = 50;

//       context.fillStyle = "red";

//       context.fillRect(X, Y, width, height);

//       console.log()
//     }

