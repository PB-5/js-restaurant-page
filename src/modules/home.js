import { createElement } from "./utility/create-element";

const prepareHomePage = () => {
    // home container 
    const homeContainer = createElement('div', 'home-container');

    // title container: Café gusta & Enjoy the small things h1/h2
    const titleContainer = createElement('div', 'titleContainer');

    const titleElements = [
    createElement('h1', 'home-title', 'Café gusta'),
    createElement('h2', 'home-subtitle', 'Enjoy the small things')
    ];

    titleElements.forEach((ele) => titleContainer.appendChild(ele));

    const homeElements = [
        titleContainer,
        createElement( 
            'p',
            'home-p',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.'
        ), 
        createElement('button', 'home-btn', 'Check Menu'),
    ];

    homeElements.forEach((ele) => homeContainer.appendChild(ele));

    return homeContainer;
};

const home = prepareHomePage();

export { home };