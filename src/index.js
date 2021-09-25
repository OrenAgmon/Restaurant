import {homePageContent, contactContent} from './contentModules'
 createHeader();
// homePageContent();

function createHeader(){

    const header = document.createElement('div')
    header.classList.add('header')
    console.log(header);
    const headerTitle = document.createElement('p')
    headerTitle.textContent = 'Valar Morgulis'
    const toggleSection = document.createElement('div')
    const homeBtn = document.createElement('button')
    homeBtn.textContent = 'Home'
    const menuBtn = document.createElement('button')
    menuBtn.textContent = 'Menu'
    const contactBtn = document.createElement('button')
    contactBtn.textContent = 'Contact'

    toggleSection.classList.add('toggle-section')
    homeBtn.classList.add('toggle-btn')
    menuBtn.classList.add('toggle-btn')
    contactBtn.classList.add('toggle-btn')

    toggleSection.append(homeBtn, menuBtn, contactBtn)
    header.append(headerTitle,toggleSection)
    const bodySection = document.querySelector('.body-section')
    bodySection.appendChild(header)
    console.log(header);

   
    
}

const toggleButtons = document.querySelectorAll('.toggle-btn')
console.log(toggleButtons);

