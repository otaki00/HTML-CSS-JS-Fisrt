let link = document.getElementById('nav-link')


function shownav(){
   let nav = document.getElementById('nav');
   let icon = document.getElementById('icon');
   nav.classList.toggle('active');
   icon.classList.toggle('fa-bars');
   icon.classList.toggle('fa-times')
}
function hidenav(){
   let nav = document.getElementById('nav');
   let icon = document.getElementById('icon');
   nav.classList.remove('active');
   icon.classList.add('fa-bars');
   icon.classList.remove('fa-times')
}

link.addEventListener('click',shownav);
let body  = document.getElementsByTagName('body');
if(body.scrollHeight > 400){

}

function dsiplayLink(){
let scrollPos = window.scrollY
let linkHeader = document.querySelector('.nav-link2')
console.log(scrollPos)
if(scrollPos > 100){
   linkHeader.style.display='block'
}else{
   linkHeader.style.display='none'
}
}

window.addEventListener('scroll',dsiplayLink)