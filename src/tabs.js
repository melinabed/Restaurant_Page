import createContactPage from "./contact";
import createMenuPage from "./menu";
import createRestaurantHomePage from "./restaurant";


const createTabs = () => {
    const content = document.querySelector('#content');

    const header = document.createElement('div');
    header.setAttribute('id', 'header');

    //Create the three tabs as divs
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');

    //Sets ids for the divs
    div1.setAttribute('id', 'home-button');
    div2.setAttribute('id', 'menu-button');
    div3.setAttribute('id', 'contact-button');

    //Set classes for the divs
    div1.classList.add('tab');
    div2.classList.add('tab');
    div3.classList.add('tab');

    //Set text content for the tabs
    div1.textContent = 'Home';
    div2.textContent = 'Menu';
    div3.textContent = 'Contact';

    //Append the divs to the content div
    content.appendChild(div1);
    content.appendChild(div2);
    content.appendChild(div3);

    header.appendChild(div1);
    header.appendChild(div2);
    header.appendChild(div3);

    content.appendChild(header);

    div1.addEventListener('click', () => {
        clearContent();
        createRestaurantHomePage();
    })
    div2.addEventListener('click', () => {
        clearContent();
        createMenuPage();
    })
    div3.addEventListener('click', () => {
        clearContent();
        createContactPage();
    })
};

function clearContent() {
    const content = document.querySelector('#content');
    const pageContent = document.querySelector('.page-content');
    if (pageContent) {
        content.removeChild(pageContent);
    }
}

export default createTabs;