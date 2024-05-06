import Home from './home';
import Menu from './menu';
import Contact from './contact';
import './style.css';

function clearContent() {
    const div = document.querySelector('#content');

    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}

const div = document.querySelector('#content');
const home = document.querySelector('.home');
const menu = document.querySelector('.menu');
const contact = document.querySelector('.contact');

home.addEventListener('click', () => {
    clearContent();
    Home();
});

menu.addEventListener('click', () => {
    clearContent();
    Menu();
});

contact.addEventListener('click', () => {
    clearContent();
    Contact();
});