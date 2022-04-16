const createAboutCard = () => {
    const main = document.querySelector('main');

    const aboutCard = document.createElement('div');
    aboutCard.setAttribute('id', 'aboutCard');

    main.appendChild(aboutCard);
}

const createAboutContent = () => {
    const aboutCard = document.getElementById('aboutCard');
    
    const aboutText = document.createElement('p');
    aboutText.textContent = `Visit us in NYC's Greenwich Village!`;

    const aboutLocation = document.createElement('p');
    aboutLocation.textContent = `Located at:`;

    const aboutStreet = document.createElement('p');
    aboutStreet.textContent = `216 Thompson St.`;

    const aboutCity = document.createElement('p');
    aboutCity.textContent = `New York, NY 10012`;

    const googleMap = document.createElement('iframe');
    googleMap.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12094.02267530382!2d-74.00773630690283!3d40.72889747089827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25991c0f50a25%3A0x4ff4555ccb034f0f!2sOkinii!5e0!3m2!1sen!2sus!4v1650138560119!5m2!1sen!2sus');
    googleMap.setAttribute('allowfullscreen', '');
    googleMap.setAttribute('loading', 'lazy');
    googleMap.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');

    aboutCard.appendChild(aboutText);
    aboutCard.appendChild(aboutLocation);
    aboutCard.appendChild(aboutStreet);
    aboutCard.appendChild(aboutCity);
    aboutCard.appendChild(googleMap);
}

const renderAboutContent = () => {
    createAboutCard();
    createAboutContent();
}

export default renderAboutContent;