let sky = document.getElementById('sky');
let valley = document.getElementById('valley');
let river = document.getElementById('river');
let text = document.getElementById('txt');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    sky.style.top = value * -0.4 + 'px';
    valley.style.top = value * 0.05 + 'px';
    river.style.top = value * 0.13 + 'px';
    text.style.marginTop = value * 1 + 'px';
    

});