const container = document.querySelector('.KdoSmoZnotraj');
const col = document.getElementsByClassName("stolp");
var zacetnipremik;
var dejanskipremik;
var stran = 0;
var done;
var neustavi;
var drzati;

container.addEventListener("touchstart", function(e) {
    touch(e);
}, {passive: true});

container.addEventListener("touchend", function(e) {
    konctouch(e);
}, {passive: true});

container.addEventListener("touchmove", function(e) {
    premiktouch(e);
}, {passive: true});

function touch(event) {
    zacetnipremik = event.touches[0].clientX;
    drzati = true;
}

//postav nazaj če je premal potegnu
function konctouch() {
    if (!neustavi) {
        col[stran].style.transition = '200ms';
        col[stran].style.transform = 'translate( 0 , 0)';
    }
}


function premiktouch(event) {
    var x = event.touches[0].clientX;
    dejanskipremik = x - zacetnipremik;
    translacija(dejanskipremik);
   
}


function translacija(par) {
        if (par < -120) {
            if (drzati == true) {
                translacijanaprej();
            }
            done = true;
        } else if (par > 120)  {
            if (drzati == true) {
                translacijanazaj();
            }
        } else  {  
                col[stran].style.transition = '0ms';
                col[stran].style.transform = 'translate(' + par + 'px , 0)';
                neustavi = false;
                done = false;
        }
}

function translacijanaprej() {
    if (stran + 1 < col.length) {
    stran++;
    neustavi = true;
    drzati = false;
    col[stran-1].style.transition = '400ms';
    col[stran-1].style.transform = 'translate(-1000px , 0)';
    col[stran].style.transition = '400ms';
    col[stran].style.transform = 'translate(0px , 0)';
    }
}
function translacijanazaj() {
    if (stran > 0) {
    stran--;
    neustavi = true;
    drzati = false;
    col[stran+1].style.transition = '400ms';
    col[stran+1].style.transform = 'translate(1000px , 0)';
    col[stran].style.transition = '400ms';
    col[stran].style.transform = 'translate(0px , 0)';
    }
}