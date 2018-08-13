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

    var dx = Math.random()*2+1;

    var dy = Math.random()*2+1;

    var r1= 0;

    var r2=0;

    var g1 = 0;

    var g2 = 0;

    var b1 = 0;

    var b2 = 0;

    
function gencolor() {

        var ans = Math.round(Math.random()*16);

        switch (ans) {

            case 10:

                ans = "A";

                break;

            case 11:

                ans = "B";

                break;

            case 12:

                ans = "C";

                break;

            case 13:

                ans = "D";

                break;

            case 14:

                ans = "E";

                break;

            case 15:

                ans = "F";

                break;

        }
        return ans;

    };

    function makecol() {

        r1 = gencolor();

        g1 = gencolor();

        b1 = gencolor();

        r2 = gencolor();

        g2 = gencolor();

        b2 = gencolor();

        box.style.background = "#"+r1.toString()+r2.toString()+g1.toString()+g2.toString()+b1.toString()+b2.toString();

    };

    makecol();

  
  function move() {

        if(xpos >= wid - 50) {

            dx *= -1;

            xpos = wid - 51;

            box.style.left = xpos+'px';

            makecol();

        } else if (xpos <=0) {

            dx *= -1;

            xpos = 1;

            box.style.left = xpos+'px';

            makecol();

        }
 else {

            xpos += dx;

            box.style.left = xpos+'px';

        }
        
	if(ypos >= hei - 50) {

            dy *= -1;

            ypos = hei - 51;

            box.style.top = ypos+'px';

            makecol();

        } else if (ypos <=0) {

            dy *= -1;

            ypos = 1;

            box.style.top = ypos+'px';

            makecol();

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