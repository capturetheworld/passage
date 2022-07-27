let sky = document.getElementById('sky');
let valley = document.getElementById('valley');
let river = document.getElementById('river');
let text = document.getElementById('txt');
let stream = document.getElementById('stream');
let streamcont = document.getElementById('streamcont');
let nav = document.getElementById('nav');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    sky.style.top = value * -0.4 + 'px';
    valley.style.top = value * 0.1 + 'px';
    river.style.top = value * 0.13 + 'px';
    text.style.marginTop = value * 1 + 'px';
    streamcont.style.top = value;
    if(value <= 1800){
        stream.style.objectPosition = "30% " + (-1500+value*0.8)+ 'px';
    }
    
    // console.log(value/10);
    if(value > 40) {
        nav.style.background= 'radial-gradient(circle, rgba(255,234,139,0.3477984943977591) 0%, rgba(255,234,139,0.4486388305322129) 100%)';
    }
    if(value <= 5 ) {
        console.log("OHHHHH YEAH");
        nav.style.background = 'linear-gradient(143deg, rgba(19,48,126,0) 0%, rgba(188,186,161,0) 100%)';
    }

    console.log(value);
    


});


