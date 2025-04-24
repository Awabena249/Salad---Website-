let nav = document.querySelector('#navbar');
let close = document.querySelector('#close');
let open = document.querySelector('#menuicon');

let navLinks = document.querySelectorAll('.navlinks')
let section = document.querySelectorAll('section')


let darkmode = localStorage.getItem('darkmode')
const themswitch = document.querySelector('.mode')



const enabeldarkmode = () =>{
    document.body.classList.add("dark-mode");
    localStorage.setItem('darkmode' , 'active');
}

const displdarkmode = () =>{
    document.body.classList.remove("dark-mode");
    localStorage.setItem('darkmode' , null);
}


if(darkmode === 'active') enabeldarkmode();

open.onclick = () => {
    nav.classList.add("active");
    open.style.display = "none";
    close.style.display = "block";
}





window.addEventListener('DOMContentLoaded', (event) => {
    ScrollReveal().reveal('.hero', {
        delay: 200,
        distance: '50px',
        duration: 1000,
        easing: 'ease-in-out',
        origin: 'bottom',
        interval: 100
      });
      ScrollReveal().reveal('.text', {
        delay: 200,
        distance: '50px',
        duration: 1000,
        easing: 'ease-in-out',
        origin: 'bottom',
        interval: 100
      });
      ScrollReveal().reveal('.card', {
        delay: 200,
        distance: '50px',
        duration: 1000,
        easing: 'ease-in-out',
        origin: 'bottom',
        interval: 100
      });
      ScrollReveal().reveal('.col', {
        delay: 200,
        distance: '50px',
        duration: 1000,
        easing: 'ease-in-out',
        origin: 'bottom',
        interval: 100
      });
      ScrollReveal().reveal('.image-container', {
        delay: 200,
        distance: '50px',
        duration: 1000,
        easing: 'ease-in-out',
        origin: 'bottom',
        interval: 100
      });
      ScrollReveal().reveal('.image', {
        delay: 200,
        distance: '50px',
        duration: 1000,
        easing: 'ease-in-out',
        origin: 'bottom',
        interval: 100
      });
    
});





close.onclick = () => {
    nav.classList.remove("active");
    open.style.display = "block";
    close.style.display = "none";
}

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove("active");
        open.style.display = "block";
        close.style.display = "none";
    })
})

window.onscroll = () =>{
    section.forEach(sec => {
        let top = window.scrollY;
        let offect = sec.offsetTop;
        let height = sec.offsetHeight
        let id = sec.getAttribute('id')

        if(top >= offect && top < offect + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header div nav ul li a[href*=' + id + ']').classList.add('active')
            })
        };
    })
}


themswitch.onclick = () =>{
    darkmode = localStorage.getItem('darkmode');
    darkmode !== "active" ? enabeldarkmode() : displdarkmode();
}