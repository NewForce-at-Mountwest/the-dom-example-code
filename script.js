// Add a subheading with js

// DOM -- Document Object Model

var bodyElement = document.querySelector("body")

console.log(bodyElement)

var subheadingElement = document.querySelector("#subheading")
console.log(subheadingElement)

subheadingElement.innerHTML = "Good for your heart"

var greeting = "Hello, world"

document.querySelector("#hello-container").innerHTML = greeting


// LIGHTNING EXERCISE

// Print single menu items to the DOM
var beansAndRice = {
    name: "Beans and rice",
    description: "Delicious",
    price: 4.99,
    img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2007/12/7/1/IE0213_Red_Beans_and_Rice.jpg.rend.hgtvcom.826.620.suffix/1552488799980.jpeg"
}

var beansAndGreens = {
    name: "Beans and greens",
    description: "Collards or turnip greens",
    price: 3.99,
    img: "https://crackerbarrel.com/-/media/CrackerBarrel/Menu/Dinner/Specials/Beans_n_Greens_CB_Specialties_780x390.jpg?h=390&w=780&la=en&hash=C32C1113A7D723093A3B34453BF8EF71EE7C0254"
}


// How do we dig into the object? Log the name and description to the console

console.log(beansAndRice.name, beansAndRice.description)

// document.querySelector("#menu-container").innerHTML = `<div class="menu-item">
//     <h4>${beansAndRice.name}</h4>
//     <p>${beansAndRice.description}</p>
//     <p>${beansAndRice.price}</p>
//     <img class="beans-img" src=${beansAndRice.img} alt="Picture of beans" />
// </div>`


function printMenuItem(menuItemObject){
    console.log("this is menuItemObject", menuItemObject)
    document.querySelector("#menu-container").innerHTML += `<div class="menu-item">
    <h4>${menuItemObject.name}</h4>
    <p>${menuItemObject.description}</p>
    <p>${menuItemObject.price}</p>
    <img class="beans-img" src=${menuItemObject.img} alt="Picture of beans" />
</div>`
}

// printMenuItem(beansAndRice)
// printMenuItem(beansAndGreens)







// We should make this a function! There's going to be more than one thing on the menu, so we want to reuse our code.







// Print ALL of the bean menu items


var beanMenu = [
    {
        name: "Beans and rice",
        description: "Delicious",
        price: 4.99,
        img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2007/12/7/1/IE0213_Red_Beans_and_Rice.jpg.rend.hgtvcom.826.620.suffix/1552488799980.jpeg"
    },
    {
        name: "Beans and greens",
        description: "Collards or turnip greens",
        price: 3.99,
        img: "https://crackerbarrel.com/-/media/CrackerBarrel/Menu/Dinner/Specials/Beans_n_Greens_CB_Specialties_780x390.jpg?h=390&w=780&la=en&hash=C32C1113A7D723093A3B34453BF8EF71EE7C0254"
    },
    {
        name: "Bean burger",
        description: "Comes with bean fries",
        price: 7.99,
        img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4293495.jpg",
    },
    {
        name: "Refried beans",
        description: "Literally just a can of refried beans",
        price: 1.99,
        img: "https://images-na.ssl-images-amazon.com/images/I/91DkeDMycKL._SL1500_.jpg"
    },
    {
        name: "A single bean",
        description: "He is lonely",
        price: 0.99,
        img: "https://envato-shoebox-0.imgix.net/25f8/defa-cf4b-11e1-952c-842b2b692e1a/2091210-016.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=c88004177812bf3c64af89de2b15e86d"
    },
    {
        name: "Edamames",
        description: "Fancy!",
        price: 3.99,
        img: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Edamame_by_Zesmerelda_in_Chicago.jpg"
    },
    {
        name: "Bean soup",
        description: "HEARTY",
        price: 6.99,
        img: "https://www.budgetbytes.com/wp-content/uploads/2018/02/Vegetarian-15-Bean-Soup-eat.jpg"
    },
    {
        name: "Chilli",
        description: "Like bean soup but with hamburger",
        price: 7.99,
        img: "https://www.bbcgoodfood.com/sites/default/files/recipe/recipe-image/2016/11/chilli.jpg"
    }
]

// printMenuItem(beanMenu[0])

for(var i = 0; i < beanMenu.length; i++){
    console.log(beanMenu[i])
    printMenuItem(beanMenu[i])
}


// declare a variable called choresArray that holds some regular chores
var choresArray = ["Take out the trash", "Wash dishes", "Disinfect EVERYTHING", "Cook some beans"]


function printChore(singleChore){
    document.querySelector("#chores-container").innerHTML += `<li>${singleChore}</li>`
}

// loop through my chores array and print an <li> element for each chore into #chores-container
for(var i=0; i < choresArray.length; i++){
    console.log(choresArray[i])
    // document.querySelector("#chores-container").innerHTML += `<li>${choresArray[i]}</li>`
    printChore(choresArray[i])
}

