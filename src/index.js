import './style.css'; 
import { clearContent, initalLoad } from './initialLoad.js';
import { displayHome, removeHome } from './home.js';
import { displayMenu, removeMenu } from './menu.js';
import { displayFooter, clearFooter } from './initialLoad.js'; 
import { displayContact, removeContact } from './contact.js'; 


initalLoad();
displayHome();
displayFooter(); 

const button1 = document.querySelector('#navbarHome');
button1.classList.add('buttonActive');

let state = 0; 

const homeButton = document.querySelector('#navbarHome');
const menuButton = document.querySelector('#navbarMenu');
const contactButton = document.querySelector('#navbarContact');


homeButton.addEventListener('click', function() {

    const button1 = document.querySelector('#navbarHome');
    button1.classList.add('buttonActive');

    const button2 = document.querySelector('#navbarMenu');
    button2.classList.remove('buttonActive');

    const button3 = document.querySelector('#navbarContact');
    button3.classList.remove('buttonActive');

    clearMainContent(state);
   
    clearFooter(); 
    displayHome(); 
    displayFooter(); 

    state = 0; 
   
});

menuButton.addEventListener('click', function() {

    const button1 = document.querySelector('#navbarMenu');
    button1.classList.add('buttonActive');

    const button2 = document.querySelector('#navbarHome');
    button2.classList.remove('buttonActive');

    const button3 = document.querySelector('#navbarContact');
    button3.classList.remove('buttonActive');

    clearMainContent(state);

    clearFooter(); 
    displayMenu(); 
    displayFooter(); 

    state = 1; 
});

contactButton.addEventListener('click', function() {

    const button1 = document.querySelector('#navbarContact');
    button1.classList.add('buttonActive');

    const button2 = document.querySelector('#navbarHome');
    button2.classList.remove('buttonActive');

    const button3 = document.querySelector('#navbarMenu');
    button3.classList.remove('buttonActive');

    clearMainContent(state); 
    
    displayContact(); 
    displayFooter(); 

    state = 2; 
});



function clearMainContent()
{
   
    removeHome();
    removeMenu ();
    removeContact(); 
    clearFooter(); 
}

