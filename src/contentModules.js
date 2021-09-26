const bodySection = document.querySelector('.body-section')


function homePageContent(){
    

    const mainSection = document.createElement('div')
    mainSection.classList.add('main-section')
    mainSection.setAttribute('id', 'home')

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
    hotpie.setAttribute('src', "../dist/Assets/img/Screen Shot 2021-09-25 at 13.24.57.png")
    hotpie.setAttribute('alt', 'hotpie')


    contentSection.append(contentTitle, contentCopy, hotpie)
    mainSection.appendChild(contentSection)
    bodySection.appendChild(mainSection)
}

function contactContent(){
    const mainSection = document.createElement('div')
    mainSection.classList.add('main-section')
    mainSection.setAttribute('id', 'contact')

    const contentSection = document.createElement('div')
    contentSection.classList.add('content-section')

    const contentTitle = document.createElement('p')
    contentTitle.classList.add('content-title')
    contentTitle.textContent = 'Visit Us'

    const contentInst = document.createElement('p')
    contentInst.classList.add('content-copy')
    contentInst.innerHTML = 'We are on the main road leading to Castely Rock. <br> We are open from sunrise to sunset.'

    const map = document.createElement('img')
    map.setAttribute('id', 'map')
    map.setAttribute('src', '../dist/Assets/img/Screen Shot 2021-09-25 at 17.36.16.png')
    map.setAttribute('alt','map')

    contentSection.append(contentTitle,map,contentInst)
    mainSection.appendChild(contentSection)
    bodySection.appendChild(mainSection)
    mainSection.style.display = 'none'
    
}

function menuContent(){
    const mainSection = document.createElement('div')
    mainSection.classList.add('main-section')
    mainSection.setAttribute('id', 'menu')

    const contentSection = document.createElement('div')
    contentSection.classList.add('content-section')
    contentSection.classList.add('menu-content-section')

    const contentTitle = document.createElement('p')
    contentTitle.classList.add('content-title')
    contentTitle.textContent = 'Our Menu'

    const theLastImg = '../dist/Assets/img/The last feast.png'
    const theLastTitle = 'The Last Feast'
    const theLastCopy = "If this is your last meal, Choose this fantastic, Creamy, vegetable pie. The cheese if rom our goats, with fresh vegetables from the garden, and chosen spices we grow."

    const theKingImg = '../dist/Assets/img/King of the north.png'
    const theKingTitle = 'King In The North'
    const theKingCopy = 'This pie is handcrafted and  detailed to perfection. The making requires hotpie to work for more than 12 hours. Designed for special occasions.'

    const lannisterImg = '../dist/Assets/img/LannisterPie.png'
    const lannisterTitle = 'Lannisters Pie'
    const lannisterCopy = 'This pie is a special dessert, filled with the sweet taste of revenge. on specific orders can be made for your enemies, with a note saying: "The Lannisters send their regards"'

    const theLastFeast = createDish(theLastTitle, theLastCopy, theLastImg)
    const KingInTheNorth = createDish(theKingTitle, theKingCopy, theKingImg)
    const lannisterPie = createDish(lannisterTitle, lannisterCopy, lannisterImg)

    contentSection.append(theLastFeast, KingInTheNorth, lannisterPie)
    mainSection.appendChild(contentSection)
    bodySection.appendChild(mainSection)
    mainSection.style.display = 'none'





    // const dishContainer = document.createElement('div')
    // dishContainer.classList.add('dish-container')

    // const theLastFeast = document.createElement('img')
    // theLastFeast.setAttribute('src', '../Assets/img/The last feast.png')

    // const dishDesContainer = document.createElement('div')
    // dishDesContainer.classList.add('dish-des-container')

    // const dishTitle = document.createElement('p')
    // dishTitle.classList.add('dish-title')
    // dishTitle.classList.add('content-title')

    // const dishCopy = document.createElement('p')
    // dishCopy.classList.add('content-copy')
    // dishCopy.setAttribute('id', 'dish-copy')


}

function createDish(title, copy, imgPath){
    const dishContainer = document.createElement('div')
    dishContainer.classList.add('dish-container')

    const dishImage = document.createElement('img')
    dishImage.setAttribute('src', `${imgPath}`)


    const dishDesContainer = document.createElement('div')
    dishDesContainer.classList.add('dish-des-container')

    const dishTitle = document.createElement('p')
    dishTitle.classList.add('dish-title')
    dishTitle.classList.add('content-title')
    dishTitle.textContent = title

    const dishCopy = document.createElement('p')
    dishCopy.classList.add('content-copy')
    dishCopy.setAttribute('id', 'dish-copy')
    dishCopy.textContent = copy

    dishDesContainer.append(dishTitle, dishCopy)
    dishContainer.append(dishImage, dishDesContainer)
    return dishContainer


}






export{
    homePageContent,
    contactContent,
    menuContent
}