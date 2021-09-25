
function homePageContent(){
    

    const mainSection = document.createElement('div')
    mainSection.classList.add('main-section')
    mainSection.setAttribute('data-page-name','home')

    const contentSection = document.createElement('div')
    contentSection.classList.add('content-section')

    const contentTitle = document.createElement('p')
    contentTitle.classList.add('content-title')
    contentTitle.textContent = 'The Best Restaurant In Westeros'

    const contentCopy = document.createElement('p')
    contentCopy.classList.add('content-copy')
    contentCopy.innerHTML = 'Hot Pie started making pies when he was 3 years old. <br> While pregnant, his mom read him all the pie recipes from the local libraries. <br> Since he was 3, the only thing hotpie ever ate was the pies he made. <br> Other fantastic dishes are also availible. Mastery is what this Restaurant is all about.' 

    const hotpie = document.createElement('img')
    hotpie.setAttribute('id', 'hotpie')
    hotpie.setAttribute('src', "../Assets/img/Screen Shot 2021-09-25 at 13.24.57.png")
    hotpie.setAttribute('alt', 'hotpie')


    contentSection.append(contentTitle, contentCopy, hotpie)
    mainSection.appendChild(contentSection)
    return mainSection;
}

function contactContent(){
    const mainSection = document.createElement('div')
    mainSection.classList.add('main-section')
    mainSection.setAttribute('data-page-name', 'contact')

    const contentSection = document.createElement('div')
    contentSection.classList.add('content-section')

    const contentTitle = document.createElement('p')
    contentTitle.classList.add('content-title')
    contentTitle.textContent = 'Visit Us'

    const contentInst = document.createElement('p')
    contentInst.classList.add('content-copy')

    const map = document.createElement('img')
    map.setAttribute('id', 'map')
    map.setAttribute('src', '../Assets/img/Screen Shot 2021-09-25 at 17.36.16.png')
    map.setAttribute('alt','map')

    contentSection.append(contentTitle,map,contentInst)

    return mainSection
    
    
}




export{
    homePageContent,
    contactContent
}