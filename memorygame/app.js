const cardsarray = [
    {
        name : 'cheeseburger',
        img : 'images/cheeseburger.png'
    },
    {
        name : 'fries',
        img : 'images/cheeseburger.png'
    },
    {
        name : 'hotdog',
        img : 'images/hotdog.png'
    },
    {
        name : 'icecream',
        img : 'images/ice-cream.png'
    },
    {
        name : 'milkshake',
        img : 'images/milkshake.png'
    },
    {
        name : 'pizza',
        img : 'images/pizza.png'
    },
    {
        name : 'cheeseburger',
        img : 'images/cheeseburger.png'
    },
    {
        name : 'fries',
        img : 'images/cheeseburger.png'
    },
    {
        name : 'hotdog',
        img : 'images/hotdog.png'
    },
    {
        name : 'icecream',
        img : 'images/ice-cream.png'
    },
    {
        name : 'milkshake',
        img : 'images/milkshake.png'
    },
    {
        name : 'pizza',
        img : 'images/pizza.png'
    }
    
    
]

const grid = document.getElementById('grid')
let cardnamearray

cardsarray.sort(() => Math.random() - 0.5);
console.log(cardsarray);
let name1 = "";
let name2;
function carddisplay(){
    for(let i =0;i<cardsarray.length;i++){
        const photo = document.createElement("img");
        photo.style.padding = "2px";
        photo.setAttribute('src',cardsarray[i].img);
        photo.setAttribute('name', cardsarray[i].name);
        photo.style.width = '100px'; // Optional: Set width for better visibility
        photo.style.height = '100px'; // Optional: Set height for better visibility

        photo.addEventListener('click', function() {
            
            let name = this.getAttribute('name');
            console.log(name);
            console.log(photo);
            
        });
        grid.appendChild(photo);

    }
}

carddisplay();