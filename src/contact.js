//module for creating the contact page
const createContactPage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');
    pageContent.setAttribute('id', 'contact');
    
    const form = document.createElement('form');
    form.classList.add('contact-form');

    const contact = document.createElement('div');
    contact.textContent = 'Contact Us';
    form.appendChild(contact);

    const headingInput = document.createElement('input');
    headingInput.type = 'text';
    headingInput.placeholder = 'Name';
    headingInput.setAttribute('label', 'Name');
    form.appendChild(headingInput);

    const addressInput = document.createElement('input');
    addressInput.type = 'text';
    addressInput.placeholder = 'Email';
    addressInput.setAttribute('required', '');
    form.appendChild(addressInput);

    const textField = document.createElement('textarea');
    textField.placeholder = 'Message';
    textField.setAttribute('id', 'message');
    textField.setAttribute('required', '');
    form.appendChild(textField);

    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'Submit';
    form.appendChild(submitButton);


    //
    const aboutUs = document.createElement('div');
    aboutUs.classList.add('about-us');

    const para = document.createElement('p');
    para.textContent = "Family Owned and Operated Resturaunt. We're conviently located close to Wonder Wharf. We have fast friendly service and all our ingredients are fresh, perservative-free, affordable, and most of all, delicious!"; 
    aboutUs.appendChild(para);

    const location = document.createElement('div');
    location.textContent = 'Our Location';
    const locationInfo = document.createElement('p');
    locationInfo.textContent = '246 Ocean Ave, New Jersey';
    aboutUs.appendChild(location);
    location.appendChild(locationInfo);

    const hours = document.createElement('div');
    hours.textContent = 'Hours of Operation';
    const hoursInfo = document.createElement('p');
    hoursInfo.textContent = "Mon-Fri 7am-8pm";
    aboutUs.appendChild(hours);
    hours.appendChild(hoursInfo);

    pageContent.appendChild(aboutUs);
    pageContent.appendChild(form);
    content.appendChild(pageContent);
};

export default createContactPage;