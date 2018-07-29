window.onload = barGraph;
window.onload = doughnutGraph;


function barGraph(){

      var bargraph = document.querySelector('#bargraph');

      var ctx = bargraph.getContext('2d');

      var ctx = circlegraph.getContext('2d');

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

      console.log("heellooooo!!");
}

function doughnutGraph(){

      var canvas  = document.getElementById("circlegraph");
        var chart = canvas.getContext("2d");

        function drawdountChart(canvas)
        {

            this.x , this.y , this.radius , this.lineWidth , this.strockStyle , this.from , this.to = null;
            this.set = function( x, y, radius, from, to, lineWidth, strockStyle)
            {
                this.x = x;
                this.y = y;
                this.radius = radius;
                this.from=from;
                this.to= to;
                this.lineWidth = lineWidth;
                this.strockStyle = strockStyle; 
            }

            this.draw = function(data)
            {
                canvas.beginPath();
                canvas.lineWidth = this.lineWidth;
                canvas.strokeStyle = this.strockStyle;
                canvas.arc(this.x , this.y , this.radius , this.from , this.to);
                canvas.stroke();
                var numberOfParts = data.numberOfParts;
                var parts = data.parts.pt;
                var colors = data.colors.cs;
                var df = 0;
                for(var i = 0; i<numberOfParts; i++)
                {
                    canvas.beginPath();
                    canvas.strokeStyle = colors[i];
                    canvas.arc(this.x, this.y, this.radius, df, df + (Math.PI * 2) * (parts[i] / 100));
                    canvas.stroke();
                    df += (Math.PI * 2) * (parts[i] / 100);
                }
            }
        }
        var data = 
            {
                numberOfParts: 4,
                parts:{"pt": [20 , 30 , 25 , 25]},//percentage of each parts 
                colors:{"cs": ["red", "green", "blue", "yellow"]}//color of each part
            };

        var drawDount = new drawdountChart(chart);
        drawDount.set(150, 150, 100, 0, Math.PI*2, 30, "#fff");
        drawDount.draw(data);
}

