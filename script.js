
// Show frontend project
let frontendButton = document.getElementById('Frontend');
let frontendProject = document.getElementById('Frontendproject');
let backendButton = document.getElementById('Backend');
let backendProject = document.getElementById('Backendproject');
/*let all = document.getElementById('All');*/

/*function showAllProject() {
    frontendProject.style.display = 'block';
    backendProject.style.display = 'block';
    all.style.display = 'block';
}*/
function showFrontendProject() {
    frontendProject.style.display = 'block';
    backendProject.style.display = 'none';
}
function showBackendProject() {
    frontendProject.style.display = 'none';
    backendProject.style.display = 'block';
}

//nav scroll

window.addEventListener('scroll',()=>{
    let nav=document.querySelector('.nav');
    nav.classList.toggle('nav-scroll',window.scrollY>0)
});

//typed js.......
var typed=new Typed('.typed-text',{
    strings:['Frontend Developer','Web Designer'],
    typeSpeed:100,
    backSpeed:60,
    backDelay:1000,
    loop:true
});

//menu bar js

let menubar=document.querySelector('.menu-bar');
let menubutton=document.querySelector('.menu-button');   

menubutton.addEventListener('click',()=>{
    menubar.classList.toggle('menu-none');
});