//VARIABLES
//hamburger menu
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
const navOptions = document.querySelector('.navIcons');
//bounce
const introTitle =  document.querySelector('#headerText');
//overlay
const overlay = document.querySelector('.overlay');
let overlayOn = false;
const contactButton = document.querySelector('#contactButton');
const contactOptions = document.querySelector('#contactOptions');
const letsTalk = document.querySelector('#letsTalk');


//hamburger event

menuBtn.addEventListener('click', ()=> {
    if(!menuOpen) {
        menuBtn.classList.add('openMenu')
        menuOpen = true;        
        navOptions.classList.add('showOptions');
    } else {
        menuBtn.classList.remove('openMenu');
        menuOpen = false;        
        navOptions.classList.remove('showOptions');
    }
});

//Bounce animation
introTitle.addEventListener('mouseover', (e)=> {
    if(e.target.tagName === 'SPAN') {
        if(e.target.id === "charlie") {
            e.target.classList.add('bounceCharlie');
        }
        e.target.classList.add('bounce');
        setTimeout(() => {
            if(e.target.id === "charlie") {
                e.target.classList.remove('bounceCharlie');
            }
            e.target.classList.remove('bounce');
        },700);
    }
})

//Contact overlay
contactButton.addEventListener('click', ()=> {
    if(!overlayOn) {
        overlay.classList.add('showOverlay');
        overlayOn = true;
    }
})

letsTalk.addEventListener('click', ()=> {
    if(!overlayOn) {
        overlay.classList.add('showOverlay');
        overlayOn = true;
    }
})

overlay.addEventListener('click', (event) => {
    overlayOn = false;
    overlay.classList.remove('showOverlay');    
})