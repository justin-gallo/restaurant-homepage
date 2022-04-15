import './styles.css';
import renderInitial from './initial'
import renderHomeContent from './home'
import renderMenuContent from './menu'

//Initial render on load: renders the initial page layout and then the home card layout
renderInitial();
renderHomeContent();

//When clicking on an item in the navigation menu, the 'main' DOM element will be cleared, and the corresponding page 'card' will be rendered.
const mainElement = document.querySelector('main');

const clearAllChildNodes = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const homeButton = document.getElementById('homeButton');
const menuButton = document.getElementById('menuButton');

homeButton.addEventListener('click', function() {
    clearAllChildNodes(mainElement);
    renderHomeContent();
});

menuButton.addEventListener('click', function() {
    clearAllChildNodes(mainElement);
    renderMenuContent();
});