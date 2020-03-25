// Add a subheading with js

document.querySelector("#subheading").innerHTML = "Good for Your Heart"

// LIGHTNING EXERCISE

// Print a single bean menu item to the DOM
var beansAndRice = {
    name: "Beans and rice",
    description: "Delicious",
    price: 4.99,
    img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2007/12/7/1/IE0213_Red_Beans_and_Rice.jpg.rend.hgtvcom.826.620.suffix/1552488799980.jpeg"
}
// How do we dig into the object? Log the name and description to the console


// document.querySelector("#menu-container").innerHTML = `<div class="bean-menu-item">
//     <h4>${beansAndRice.name}</h4>
//     <p>${beansAndRice.description}</p>
//     <p>${beansAndRice.price}</p>
//     <img class="bean-img"  src=${beansAndRice.img} alt="Picture of beans" />
// </div>`





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

function printMenuItem(menuItem){
    console.log("This is menu item", menuItem)
    document.querySelector("#menu-container").innerHTML += `<div class="bean-menu-item">
    <h4>${menuItem.name}</h4>
    <p>${menuItem.description}</p>
    <p>${menuItem.price}</p>
    <img class="bean-img"  src=${menuItem.img} alt="Picture of beans" />
</div>`
}

for(var i = 0; i < beanMenu.length; i++){
    printMenuItem(beanMenu[i])
}
