            var can, ctx,
            minVal, maxVal,
            xScalar, yScalar,
            numSamples, y;
            // data sets -- set literally
            var dataName = [ "Coffee 1", "Coffee 2", "Coffee 3", "Coffee 4" ];
            var dataValue = [ 47, 62, 58, 30];
     
            function init() {
                // set these values for your data
            numSamples = 4;
            maxVal = 100;
            var stepSize = 10;
            var colHead = 45;
            var rowHead = 6;
            var margin = 10;
            var header = "Sales (coffee/week)"
            can = document.getElementById("can");
            ctx = can.getContext("2d");
            ctx.fillStyle = "black"
            yScalar = (can.height - colHead - margin) / (maxVal);
            xScalar = (can.width - rowHead) / (numSamples + 1);
            ctx.strokeStyle = "rgba(128,128,255, 0.5)"; // light blue line
            ctx.beginPath();
            // print  column header
            ctx.font = "12pt Helvetica"
            ctx.fillText(header, 10, colHead - margin);
            // print row header and draw horizontal grid lines
            ctx.font = "12pt Helvetica"
            var count =  0;
            for (scale = maxVal; scale >= 0; scale -= stepSize) {
                y = colHead + (yScalar * count * stepSize);
                ctx.fillText(scale, margin,y + margin);
                ctx.moveTo(rowHead, y)
                ctx.lineTo(can.width, y)
                count++;
            }
            ctx.stroke();
    
            // set a color
            ctx.fillStyle = "#603813";
         
            // translate to bottom of graph and scale x,y to match data
            ctx.translate(-90, can.height - margin);
            ctx.scale(xScalar, -1 * yScalar);
            // draw bars
            for (i = 0; i < 4; i++) {
                ctx.fillRect(i + 1, 0, 0.5, dataValue[i]);
            }
        }
 
        function calcY(value) {
            y = can.height - value * yScalar;
        }
    