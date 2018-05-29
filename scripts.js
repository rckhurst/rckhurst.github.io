function GetClock(){
var d=new Date();
var nhour=d.getHours(),nmin=d.getMinutes(),ap;
if(nhour==0){ap=" AM";nhour=12;}
else if(nhour<12){ap=" AM";}
else if(nhour==12){ap=" PM";}
else if(nhour>12){ap=" PM";nhour-=12;}

if(nmin<=9) nmin="0"+nmin;

document.getElementById('clockbox').innerHTML=""+nhour+":"+nmin+ap+"";
}

window.onload=function(){
GetClock();
setInterval(GetClock,1000);
moveThis();
};


function showImage(){
    var x = document.getElementById('start-menu');
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }

}

function moveThis() {
    var el = document.getElementById('target');
    var mover = false, x, y, posx, posy, first = true;
    el.onmousedown = function() {
        mover = true;
    };
    el.onmouseup = function() {
        mover = false;
        first = true;
    };
    el.onmousemove = function(e) {
        if (mover) {
            if (first) {
                x = e.offsetX;
                y = e.offsetY;
                first = false;
            }
            posx = e.pageX - x;
            posy = e.pageY - y;
            this.style.left = posx + 'px';
            this.style.top = posy + 'px';
        }
    };
}

