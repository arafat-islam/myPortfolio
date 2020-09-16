const navBar = document.querySelector('.menu-toggler')
const topNav = document.querySelector('.top-nav')
const animateRightAbout = document.getElementById('animateRightAbout')
const animateLeftAbout = document.getElementById('animateLeftAbout')
const fadeIn1 = document.getElementById('fadeIn1')
const fdadeIn2 = document.getElementById('fadeIn2')
const fadeIn3 = document.getElementById('fadeIn3')
const animateLeftPortfolio1 = document.getElementById('animateLeftPortfolio1')
const animateLeftPortfolio2 = document.getElementById('animateLeftPortfolio2')
const animateLeftPortfolio3 = document.getElementById('animateLeftPortfolio3')
const animateRightPortfolio1 = document.getElementById('animateRightPortfolio1')
const animateRightPortfolio2 = document.getElementById('animateRightPortfolio2')
const animateRightPortfolio3 = document.getElementById('animateRightPortfolio3')
const services = document.getElementById('services-section')



const about = document.getElementById('about')
const offsettop = about.offsetTop;
const animatePortfolioOne = animateLeftPortfolio1.offsetTop;
const animatePortfolioTwo = animateLeftPortfolio2.offsetTop;
const annimatePortfolioThree = animateLeftPortfolio3.offsetTop;
const servicesOffsetTOp = services.offsetTop;



function animate() {
    const top = document.documentElement.scrollTop;
    const difference = offsettop - top;
    const differenceTwo = animatePortfolioOne - top;
    const differenceThree = animatePortfolioTwo - top;
    const differneceFour = annimatePortfolioThree - top;
    const differenceFive = servicesOffsetTOp - top;

    if (difference <= 300) {
        animateRightAbout.classList.add('open')
        animateLeftAbout.classList.add('open')
    }
    if (differenceTwo <= 250) {
        animateLeftPortfolio1.classList.add('open')
        animateRightPortfolio1.classList.add('open')
    }
    if (differenceThree <= 400) {
        animateLeftPortfolio2.classList.add('open')
        animateRightPortfolio2.classList.add('open')
    }
    if (differneceFour <= 400) {
        animateLeftPortfolio3.classList.add('open')
        animateRightPortfolio3.classList.add('open')
    }
    console.log(differenceFive);
    if(differenceFive <= 200) {
        fadeIn1.classList.add('open')
        fdadeIn2.classList.add('open')
        fadeIn3.classList.add('open')
    }

}








window.onscroll = function () {
    animate()
}

// function animate() {
//     if((document.documentElement.scrollTop >= 400) && (document.documentElement.scrollTop <= 700)) {
//         animateRightAbout.classList.add('open')
//         animateLeftAbout.classList.add('open')
//     }
//     if(document.documentElement.scrollTop >= 1000) {
//         fadeIn1.classList.add('open')
//         fdadeIn2.classList.add('open')
//         fadeIn3.classList.add('open')
//     }
//     if(document.documentElement.scrollTop >= 1522) {
//         animateLeftPortfolio1.classList.add('open')
//         animateRightPortfolio1.classList.add('open')
//     }
//     if(document.documentElement.scrollTop >= 2022) {
//         animateLeftPortfolio2.classList.add('open')
//         animateRightPortfolio2.classList.add('open')
//     }
//     if(document.documentElement.scrollTop >= 2422) {
//         animateLeftPortfolio3.classList.add('open')
//         animateRightPortfolio3.classList.add('open')
//     }
// }



navBar.addEventListener('click', () => {
    navBar.classList.toggle('open')
    topNav.classList.toggle('open')
})