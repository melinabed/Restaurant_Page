const createMenuPage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');
    pageContent.setAttribute('id', 'menu');

    //Creates an h1 for the heading inside menu tab
    const heading = document.createElement('h2');
    heading.textContent = 'Burgers of the Day!';

    //Creates a divs for menuLists with menu item subsections as p
    const menuList = document.createElement('div');
    menuList.setAttribute('class', 'menu-list');

    const menuItem1 = document.createElement('div');
    const foodName1 = document.createElement('h3');
    foodName1.textContent = "Cole Came, Cole Slaw, Cole Conqured";
    const info1 = document.createElement('p');
    info1.textContent = 'Onions, Mustard, Coleslaw, Pepperoncinis';

    const menuItem2 = document.createElement('div');
    const foodName2 = document.createElement('h3');
    foodName2.textContent = "Blue is the Warmest Cheese";
    const info2 = document.createElement('p');
    info2.textContent = 'Jerk Patty, Blue Cheese, Lettuce, Tomato, Mayo, Onions, BBQ';

    const menuItem3 = document.createElement('div');
    const foodName3 = document.createElement('h3');
    foodName3.textContent = "The Final Kraut Down";
    const info3 = document.createElement('p');
    info3.textContent = 'Saurkraut, Fried Onions, Pickles, Spicy Mustard';

    const menuItem4 = document.createElement('div');
    const foodName4 = document.createElement('h3');
    foodName4.textContent = "View to a Keilbasa";
    const info4 = document.createElement('p');
    info4.textContent = 'Hot Kraut, Spicy Grain Mustard, Curried Ketchup';

    const menuItem5 = document.createElement('div');
    const foodName5 = document.createElement('h3');
    foodName5.textContent = "Eggers Can't be Cheesers";
    const info5 = document.createElement('p');
    info5.textContent = 'Fried Egg, Cheddar, Pickle, Spicy Mustard, Onions';

    const menuItem6 = document.createElement('div');
    const foodName6 = document.createElement('h3');
    foodName6.textContent = "Sweet Home Avacado";
    const info6 = document.createElement('p');
    info6.textContent = 'Avacado, Sprouts, Cheddar, Pear, Honey Mustard';

    //Appends the menuItems to the menuList
    menuList.appendChild(menuItem1);
    menuList.appendChild(menuItem2);
    menuList.appendChild(menuItem3);
    menuList.appendChild(menuItem4);
    menuList.appendChild(menuItem5);
    menuList.appendChild(menuItem6);

    menuItem1.appendChild(foodName1);
    menuItem2.appendChild(foodName2);
    menuItem3.appendChild(foodName3);
    menuItem4.appendChild(foodName4);
    menuItem5.appendChild(foodName5);
    menuItem6.appendChild(foodName6);

    //Appends the info the each menuItem
    menuItem1.appendChild(info1);
    menuItem2.appendChild(info2);
    menuItem3.appendChild(info3);
    menuItem4.appendChild(info4);
    menuItem5.appendChild(info5);
    menuItem6.appendChild(info6);

    //Other menu Items
    const regular = document.createElement('div');
    regular.setAttribute('class', 'regular-items');

    const regItem1 = document.createElement('div');
    regItem1.textContent = "Regular....... $5.00";

    const regItem2 = document.createElement('div');
    regItem2.textContent = "Special.... $5.95";

    const regItem3 = document.createElement('div');
    regItem3.textContent = "Cheese.... Add $0.50";

    const regItem4 = document.createElement('div');
    regItem4.textContent = "Fries..... $2.00";

    const regItem5 = document.createElement('div');
    regItem5.textContent = "Side Salad..... $2.50";

    const regItem6 = document.createElement('div');
    regItem6.textContent = "Soft Drink..... $2.00";

    const regItem7 = document.createElement('div');
    regItem7.textContent = "Beer..... $4.00";


    regular.appendChild(regItem1);
    regular.appendChild(regItem2);
    regular.appendChild(regItem3);
    regular.appendChild(regItem4);
    regular.appendChild(regItem5);
    regular.appendChild(regItem6);
    regular.appendChild(regItem7);

    
    //Appends the heading and menuLists to the page content
    pageContent.appendChild(regular);
    pageContent.appendChild(heading);
    pageContent.appendChild(menuList);
    content.appendChild(pageContent);
};

export default createMenuPage;