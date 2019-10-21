import './style.css';
import '../src/assets/js/coffees.json';

const init = () => {

};
const pricesList = document.querySelector(`.prices__list`);

const price = pricesList.appendChild(document.createElement(`li`));
price.className = `price`;

const priceButton = price.appendChild(document.createElement(`a`));
priceButton.className = `price__button`;

const priceButtonWrapper = priceButton.appendChild(document.createElement(`span`));
priceButtonWrapper.className = `price__button__wrapper`;

const priceButtonName = priceButtonWrapper.appendChild(document.createElement(`span`));
priceButtonName.className = `price__button__name`;
priceButtonName.innerHtml = `data.name`;

// const priceButtonAmount = priceButtonWrapper.appendChild(document.createElement(`span`));
// priceButtonAmount.className = `price__button__amount`;
init();
