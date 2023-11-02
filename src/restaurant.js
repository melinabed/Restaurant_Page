//restaurant.js

const createRestaurantHomePage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');
    pageContent.setAttribute('id', 'home');

    //Create logo as an image and append to pageContent
    const bbSvg = document.createElement('img');
    bbSvg.src = 'bb-logo.svg';
    bbSvg.setAttribute('id', 'logo');
    pageContent.appendChild(bbSvg);


    //Create and appends image element
    const image = document.createElement('img');
    image.src = 'bobs-burger.png';
    image.setAttribute('id', 'burger');
    pageContent.appendChild(image);


    //Create and append copy element
    const copy = document.createElement('p');
    copy.textContent = "We're all just one bad decision away from becoming burgers.";
    copy.setAttribute('class', 'footer');
    pageContent.appendChild(copy)
    content.appendChild(pageContent);
}
export default createRestaurantHomePage;
