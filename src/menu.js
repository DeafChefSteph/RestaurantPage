import PizzaIcon from './pizza-48.png';
import BurgerIcon from './burger-60.png';


export function displayMenu(){
    const content = document.querySelector('#content');

    const menuDiv = document.createElement('div'); 
    menuDiv.setAttribute('id','menuMain');
    content.appendChild(menuDiv);

    const table = document.createElement('table');
    menuDiv.appendChild(table);

    let tableRow = [], tableHeading = [], tableD = [];
    
    for(let i = 0; i < 5;i++){
        tableRow[i] = document.createElement('tr');
        table.appendChild(tableRow[i]);
    }

    for(let i = 0;i< 4;i++) tableHeading[i] = document.createElement('th');

    tableHeading[0].textContent = 'Item';
    tableHeading[1].textContent = 'Description';
    tableHeading[2].textContent = 'Price';
    tableHeading[3].textContent = 'Picture';

    for(let i = 0; i < 4; i++) tableRow[0].appendChild(tableHeading[i]); 

    for(let i = 0;i < 4;i++) tableD[i] = document.createElement('td');

    tableD[0].textContent = 'Pizza Salami';
    tableD[1].textContent = 'tomato, salami, cheese, pizza spice';
    tableD[2].textContent = '9,80';
    const myPizzaIcon1 = new Image();
    myPizzaIcon1.src = PizzaIcon; 

    for(let i = 0; i < 4; i++) tableRow[1].appendChild(tableD[i]); 

    tableD[3].appendChild(myPizzaIcon1); 

    for(let i = 0;i < 4;i++) tableD[i] = document.createElement('td');

    tableD[0].textContent = 'Pizza Margharita';
    tableD[1].textContent = 'tomato, cheese, pizza spice';
    tableD[2].textContent = '8,80';
    const myPizzaIcon2 = new Image();
    myPizzaIcon2.src = PizzaIcon; 

    for(let i = 0; i < 4; i++) tableRow[2].appendChild(tableD[i]); 

    tableD[3].appendChild(myPizzaIcon2); 

    for(let i = 0;i < 4;i++) tableD[i] = document.createElement('td');

    tableD[0].textContent = 'Hamburger';
    tableD[1].textContent = 'beef, patty, onions, tomato, lettuce, french fries';
    tableD[2].textContent = '10.20';
    const myBurgerIcon1 = new Image();
    myBurgerIcon1.src = BurgerIcon; 

    for(let i = 0; i < 4; i++) tableRow[3].appendChild(tableD[i]); 

    tableD[3].appendChild(myBurgerIcon1); 

    for(let i = 0;i < 4;i++) tableD[i] = document.createElement('td');

    tableD[0].textContent = 'Cheese';
    tableD[1].textContent = 'beef, double cheese patty, onions, tomato, lettuce, french fries';
    tableD[2].textContent = '12.20';
    const myBurgerIcon2 = new Image();
    myBurgerIcon2.src = BurgerIcon; 

    for(let i = 0; i < 4; i++) tableRow[4].appendChild(tableD[i]); 

    tableD[3].appendChild(myBurgerIcon2); 
    
    /*const myPizzaIcon = new Image();
    myPizzaIcon.src = PizzaIcon; 
    tableHeading4.appendChild(myPizzaIcon);*/ 

}

export function removeMenu(){
    const menuMain = document.querySelector('#menuMain');
    if (typeof(menuMain) != 'undefined' && menuMain != null)
    {
       menuMain.remove(); 
    }

}