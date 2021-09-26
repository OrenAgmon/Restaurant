import {homePageContent, contactContent, menuContent} from './contentModules'


createHeader();
homePageContent();
contactContent();
menuContent();


const toggleButtons = document.querySelectorAll('.toggle-btn')

toggleButtons.forEach(button =>{
    let buttonId = button.dataset.buttonName
    console.log(buttonId);
    button.addEventListener('click', () =>{
        openPage(buttonId)
    })

})




function createHeader(){

    const header = document.createElement('div')
    header.classList.add('header')
    const headerTitle = document.createElement('p')
    headerTitle.textContent = 'Valar Morgulis'
    const toggleSection = document.createElement('div')
    const homeBtn = document.createElement('button')
    homeBtn.textContent = 'Home'
    homeBtn.setAttribute('data-button-name', 'home')
   
    
    const menuBtn = document.createElement('button')
    menuBtn.textContent = 'Menu'
    menuBtn.setAttribute('data-button-name', 'menu')


    const contactBtn = document.createElement('button')
    contactBtn.textContent = 'Contact'
    contactBtn.setAttribute('data-button-name', 'contact')
    toggleSection.classList.add('toggle-section')
    homeBtn.classList.add('toggle-btn')
    menuBtn.classList.add('toggle-btn')
    contactBtn.classList.add('toggle-btn')

    toggleSection.append(homeBtn, menuBtn, contactBtn)
    header.append(headerTitle,toggleSection)
    const bodySection = document.querySelector('.body-section')
    bodySection.appendChild(header)

   
    
}




function openPage(pageName){
   let contentModules = document.querySelectorAll('.main-section')
   contentModules.forEach(module =>{
    module.style.display = 'none'
   })
   const rightModule = document.getElementById(`${pageName}`)
   rightModule.style.display = 'flex'


}