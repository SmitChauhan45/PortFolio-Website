// typing animation
var typed = new Typed(".typing", {
    strings: ["Web Designer", "UI/UX Designer", "Android Developer", "Video Editor"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})
const Home = document.getElementById('hom');
const About = document.getElementById('abo');
const Services = document.getElementById('ser');
const Portfolio = document.getElementById('port');
const Contact = document.getElementById('con');

Home.addEventListener('click', () => {
    About.className = ''
    Home.className = 'active'
    Services.className = ''
    Portfolio.className = ''
    Contact.className = ''
})
About.addEventListener('click', () => {
    About.className = 'active'
    Home.className = ''
    Services.className = ''
    Portfolio.className = ''
    Contact.className = ''
})
Services.addEventListener('click', () => {
    About.className = ''
    Home.className = ''
    Services.className = 'active'
    Portfolio.className = ''
    Contact.className = ''
})
Portfolio.addEventListener('click', () => {
    About.className = ''
    Home.className = ''
    Services.className = ''
    Portfolio.className = 'active'
    Contact.className = ''
})
Contact.addEventListener('click', () => {
    About.className = ''
    Home.className = ''
    Services.className = ''
    Portfolio.className = ''
    Contact.className = 'active'
})
