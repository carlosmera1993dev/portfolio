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

//Scroll Effects
function scrollAppear() {
    const leftContent = document.querySelectorAll('.leftProject');
    const rightContent = document.querySelectorAll('.rightProject');
    const screenPosition = window.innerHeight / 1.3;
    for (let i = 0; i < leftContent.length; i++) {
        const leftContentPosition = leftContent[i].getBoundingClientRect().top;        
        if (leftContentPosition < screenPosition) {
            leftContent[i].classList.add('showLeft');
        }
    }
    for (let i = 0; i < rightContent.length; i++) {
        const rightContentPosition = rightContent[i].getBoundingClientRect().top;        
        if (rightContentPosition < screenPosition) {
            rightContent[i].classList.add('showRight');
        }
    }
};

window.addEventListener('scroll', scrollAppear);

//underline animation 
function animateUnderline() {    
    const underline = document.querySelector('.underlineAnimation');
    const screenPosition = window.innerHeight / 1.18;
    const underlinePosition = underline.getBoundingClientRect().top;
    if (underlinePosition < screenPosition) {
        underline.classList.add('showUnderlineAnimation');
    }
};

window.addEventListener('scroll', animateUnderline);

//hide html tag decoration if it touches yellow border
function hideDecoration() {
    const htmlTagDecoration = document.querySelector('#closeBody');
    let htmlTagBottom = htmlTagDecoration.getBoundingClientRect().bottom;
    const headerArea = document.querySelector('header');
    let headerBottom = headerArea.getBoundingClientRect().bottom;
    if (htmlTagBottom === headerBottom || htmlTagBottom > headerBottom) {        
        htmlTagDecoration.style.opacity = 0;
    } else if (htmlTagBottom < headerBottom) {
        htmlTagDecoration.style.opacity = 1;
    }
}

window.addEventListener('resize', hideDecoration);
