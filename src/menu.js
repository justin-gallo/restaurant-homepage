import icon1 from './images/sushiIcon1.svg';
import icon2 from './images/sushiIcon2.svg';
import icon3 from './images/sushiIcon3.svg';
import icon4 from './images/sushiIcon4.svg';
import icon7 from './images/sushiIcon7.svg';
import icon8 from './images/sushiIcon8.svg';

const createMenuCard = () => {
    const main = document.querySelector('main');

    const menuCard = document.createElement('div');
    menuCard.setAttribute('id', 'menuCard');

    main.appendChild(menuCard);
}

const createMenuGrid = () => {
    const menuCard = document.getElementById('menuCard');

    const menuGrid = document.createElement('div');
    menuGrid.setAttribute('id', 'menuGrid');

    menuCard.appendChild(menuGrid);
}

const createMenuItem = (src, alt, title, description) => {
    const menuGrid = document.getElementById('menuGrid');
    
    //Create the empty menu item:
    const menuItem = document.createElement('div');
    menuItem.classList.add('menuItem');

    //Create children for each menu item:
    const image = document.createElement('img');
    image.setAttribute('src', src);
    image.setAttribute('alt', alt);

    const itemTitle = document.createElement('h3');
    itemTitle.textContent = title;

    const itemDescription = document.createElement('p');
    itemDescription.textContent = description;

    //Append img, h3, and p to the parent .menuItem:
    menuItem.appendChild(image);
    menuItem.appendChild(itemTitle);
    menuItem.appendChild(itemDescription);

    //Append the .menuItem to parent #menuGrid
    menuGrid.appendChild(menuItem);
}

const renderMenuContent = () => {
    //Create the menu card, then menu grid as a child:
    createMenuCard();
    createMenuGrid();

    //Create each menu item individually:
    createMenuItem(icon1, 'Sushi Image', 'Spicy Crab Roll - $7', 'Spicy kani crab wrapped in nori seaweed sheets and vinegared rice.');
    createMenuItem(icon2, 'Sushi Image', 'California Roll - $7', 'Cucumber, crab and avocado wrapped in vinegared rice.');
    createMenuItem(icon3, 'Sushi Image', 'Tuna Roll - $6', 'Sashimi-grade tuna wrapped in nori seaweed and vinegared rice.');
    createMenuItem(icon4, 'Sushi Image', 'Salmon Hand Roll - $12', 'Spicy baked salmon, avocado and seasoned rice, hand-wrapped in nori seaweed. ');
    createMenuItem(icon7, 'Sushi Image', 'Prawn Nigiri - $3', 'Vinegared rice topped with a cooked king prawn.');
    createMenuItem(icon8, 'Sushi Image', 'Tamago Nigiri - $3', 'Vinegared rice topped with tamagosushi (egg).');
}

export default renderMenuContent;