window.onload = function() {

    var xpos = 1;

    var ypos = 1;

    var wid = 300;

    var hei = 300;

    var x = 0;

    var box = document.getElementById('box');

    var con = document.getElementById("container");

    var t = setInterval(move, 10);

    var u = setInterval(inc,10);

    var dx = 1;

    var dy = 2;
  
  function move() {

        if(xpos >= wid - 50) {

            dx *= -1;

            xpos = wid - 51;

            box.style.left = xpos+'px';

        } else if (xpos <=0) {

            dx *= -1;

            xpos = 1;

            box.style.left = xpos+'px';

            

        }
 else {

            xpos += dx;

            box.style.left = xpos+'px';

        }
        
	if(ypos >= hei - 50) {

            dy *= -1;

            ypos = hei - 51;

            box.style.top = ypos+'px';

            

        } else if (ypos <=0) {

            dy *= -1;

            ypos = 1;

            box.style.top = ypos+'px';

            

        }
 else {

            ypos += dy;

            box.style.top = ypos+'px';

        }
        
    }
;    
    function inc() {

        wid = 200+100*Math.cos(x);

        hei = 200+100*Math.sin(x);

        con.style.width = wid + "px";

        con.style.height = hei + 'px';

        x+=0.01;

    }
;
};