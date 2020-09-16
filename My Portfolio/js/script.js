const bar = document.querySelector('.fa-bars')
const times = document.querySelector('.times')
const navList = document.querySelector('.nav-list')
const links = document.querySelectorAll('.link')
const navElement = document.querySelector('.navbar')
const up = document.querySelector('.fa-chevron-up')
const w = window.outerWidth;




bar.addEventListener('click', () => {
    navList.classList.add('open')
    times.classList.add('open')
    bar.classList.add('close')
})
times.addEventListener('click', function () {
    closeNav();
})
links.forEach(link => {
    link.addEventListener('click', () => {
        closeNav();
    })
})

// Close Navigation 
function closeNav() {
    navList.classList.remove('open')
    times.classList.remove('open')
    bar.classList.remove('close')
}






// Add Sticky class 
window.onscroll = function () {
    scrollFunction()
}

function scrollFunction() {
    const top = document.documentElement.scrollTop;
    if (top >= 300 && w > 768) {
        navElement.classList.add('sticky');
    } else {
        navElement.classList.remove('sticky')
    }

    up.addEventListener('click', () => {
        document.documentElement.scrollTop = 0;
    })
}


// Active class adding to all the nav links 
const link = document.querySelectorAll('.nav-list a');
link.forEach(function (linkt) {
    linkt.addEventListener('click', function () {
        var current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace(' active', ' ');
        this.className += ' active';
    })
});





// Smooth Scroll 
$(document).ready(function () {
    $('.navbar a').on('click', function (e) {
        if (this.hash !== '') {
            e.preventDefault();

            const hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 300);
        }
    })
})





const home = document.getElementById('hm');
const logo = document.getElementById('logo');

logo.addEventListener('click', function (e) {
    e.preventDefault();
    toTop();
})


home.addEventListener('click', function (e) {
    e.preventDefault();
    toTop()
})

function toTop() {
    document.documentElement.scrollTop = 0;
}




// Outer Width 

