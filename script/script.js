const noga = document.querySelector('.noga');
const box = document.querySelector('.box');
const vsebina = document.querySelector('.vsebina');
const NaslovnaSlikaPodpoglavja = document.querySelector('.NaslovnaSlikaPodpoglavja');
const infscroll = document.querySelector('.infscroll');
const meni = document.querySelector('.meni');
var visinavsebine = vsebina.offsetHeight;
var visinabox = box.offsetHeight;
var dejanskiscroll;
const scroll = document.getElementsByClassName("id");
const kazalopoglavja = document.getElementsByClassName("kazalopoglavja");
var cez;


window.onscroll = function() {myFunction()};




function myFunction() {    
     
    if(isInViewport(box)) {    
        zaustavi();
        something();
        cez = true;
        
    } 
    premik(Math.floor((document.documentElement.scrollTop - dejanskiscroll)/300));
    if(document.documentElement.scrollTop - dejanskiscroll < 0 && cez == true) {
        box.style.position = "static";
        vsebina.style.position  = "static";
        NaslovnaSlikaPodpoglavja.style.position = "static";
        infscroll.style.height =  "1px";
        meni.style.opacity = "0";
        cez = false;
    }
}


//enkratni klic funkcije zaustavi (ni moja koda ;))
var something = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;            
            dejanskiscroll = document.documentElement.scrollTop;
        }
    };
})();


//vrne prov če je noga v viewportu
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}


function zaustavi() {
    meni.style.opacity = "1";
    box.style.position = "fixed";
    box.style.bottom = "0";
    vsebina.style.position  = "fixed";
    vsebina.style.bottom = visinabox + "px";
    NaslovnaSlikaPodpoglavja.style.position = "fixed";
    NaslovnaSlikaPodpoglavja.style.bottom = visinavsebine + visinabox + "px";
    infscroll.style.height = scroll.length * 500 + "px";

}


//premikanje med enim in drugim poglavjem po klicu funkcije
function premik(b) {
    if (b <= 0) {
        scroll[1].style.transitionDelay = 0 + "ms";
        scroll[1].style.transform = 'translate(0, +140px)';
        scroll[1].style.opacity = '0';
        scroll[0].style.transitionDelay = 400 + "ms";
        scroll[0].style.transform = 'translate(0, 0px)';
        scroll[0].style.opacity = '1';
    }
    for(let i = b-1; i < b && i < scroll.length -1 && b > 0; i++) {
        scroll[i].style.transitionDelay = 0 + "ms";
        scroll[i].style.transform = 'translate(0, -140px)';
        scroll[i].style.opacity = '0';
        scroll[i+1].style.transitionDelay = 400 + "ms";
        scroll[i+1].style.transform = 'translate(0, 0px)';
        scroll[i+1].style.opacity = '1';
        if (i+2 < scroll.length) {
            scroll[i+2].style.transitionDelay = 0 + "ms";
            scroll[i+2].style.transform = 'translate(0, +140px)';
            scroll[i+2].style.opacity = '0';
        }

    }
}



