import './styles.css';
import renderInitial from './initial'
import renderHomeContent from './home'
import renderMenuContent from './menu'
import renderAboutContent from './about'

//Initial render on load: renders the initial page layout and then the home card layout
renderInitial();
renderHomeContent();

// //When clicking on an item in the navigation menu, the 'main' DOM element will be cleared, and the corresponding page 'card' will be rendered.
const mainElement = document.querySelector('main');

const clearAllChildNodes = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const homeButton = document.getElementById('homeButton');
const menuButton = document.getElementById('menuButton');
const aboutButton = document.getElementById('aboutButton');
const orderBtn = document.getElementById('orderBtn');

homeButton.addEventListener('click', function() {
    clearAllChildNodes(mainElement);
    renderHomeContent();

    //Re-find orderBtn button after it is rendered
    const orderBtn = document.getElementById('orderBtn');

    //Re-assign orderBtn's event listener
    orderBtn.addEventListener('click', function() {
        clearAllChildNodes(mainElement);
        renderMenuContent();
    });
});

menuButton.addEventListener('click', function() {
    clearAllChildNodes(mainElement);
    renderMenuContent();
});

orderBtn.addEventListener('click', function() {
    clearAllChildNodes(mainElement);
    renderMenuContent();
});

aboutButton.addEventListener('click', function() {
    clearAllChildNodes(mainElement);
    renderAboutContent();
});