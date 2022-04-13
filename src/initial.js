const renderHome = () => {
    renderHeader();
    renderMain();
    renderFooter();
    console.log('render function executed');
}

const renderHeader = () => {
    const content = document.getElementById('content');
    //Create header element:
    const header = document.createElement('header');

    //Create page title & change text content
    const title = document.createElement('h1');
    title.textContent = 'OKINII';

    //Create ul element
    const navBar = document.createElement('ul');
    //Create li
    const homeBtn = document.createElement('li');
    homeBtn.textContent = 'Home';
    //Create li
    const menuBtn = document.createElement('li');
    menuBtn.textContent = 'Menu';
    //Create li
    const aboutBtn = document.createElement('li');
    aboutBtn.textContent = 'About';

    //Append the three li's to the ul:
    navBar.appendChild(homeBtn);
    navBar.appendChild(menuBtn);
    navBar.appendChild(aboutBtn);

    //Append the h1 to the header:
    header.appendChild(title);
    //Append the ul to the header:
    header.appendChild(navBar)
    //Append the header to the div#content
    content.appendChild(header);
}

const renderMain = () => {
    const content = document.getElementById('content');
    const main = document.createElement('main');

    const homeCard = document.createElement('div');
    homeCard.setAttribute('id', 'homeCard');

    const mainText = document.createElement('p');
    mainText.textContent = `NYC'S FINEST GOURMET SUSHI`;

    const subText = document.createElement('p');
    subText.textContent = 'Visit us or order online!';

    const orderBtn = document.createElement('button');
    orderBtn.setAttribute('id', 'orderBtn');
    orderBtn.textContent = 'ORDER NOW';

    //Append homeCard children to homeCard
    homeCard.appendChild(mainText);
    homeCard.appendChild(subText);
    homeCard.appendChild(orderBtn);

    //Append homeCard to parent main
    main.appendChild(homeCard);

    //Append the main to the div#content
    content.appendChild(main);
}

const renderFooter = () => {
    const content = document.getElementById('content');
    const footer = document.createElement('footer');

    const copyrightInfo = document.createElement('p');
    copyrightInfo.innerHTML = 'copyright &copy; 2022 justin-gallo';

    footer.appendChild(copyrightInfo);
    content.appendChild(footer);
}

export default renderHome;