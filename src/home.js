const renderHomeContent = () => {
    const main = document.querySelector('main');

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
}

export default renderHomeContent;