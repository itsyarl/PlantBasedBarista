import './style.css';
import data from '../src/assets/js/coffees.json';

const init = () => {
  getCoffees(data);
};

// begrensd tot twee getallen na comma
const commaDigits = num => {
  return num.toFixed(2);
};

// haalt coffees uit json
const getCoffees = data => {
  const coffees = data.coffees;
  coffees.forEach(data => {
    if (data.plantbased === true) {
      makeButton(data);
    }
  });
};

// maakt button aan
const makeButton = data => {
  const $prijsLijst = document.querySelector(`.prices__list`);
  const $li = document.createElement(`li`);
  $li.classList.add(`price`);
  $li.setAttribute(`data_id`, `${data.id}`);
  $li.innerHTML =  `<a class="price__button">
                      <span class="price__button__wrapper">
                        <span class="price__button__name">${data.name}</span>
                        <span class="price__button__amount">&euro; ${commaDigits(data.prices.medium)}</span>
                      </span>
                      <span class="price__button__plus">+</span>
                    </a>`;
  $prijsLijst.appendChild($li);
};


//  FAILED TRY

// (const pricesList = document.querySelector(`.prices__list`);

// const price = pricesList.appendChild(document.createElement(`li`));
// price.className = `price`;

// const priceButton = price.appendChild(document.createElement(`a`));
// priceButton.className = `price__button`;

// const priceButtonWrapper = priceButton.appendChild(document.createElement(`span`));
// priceButtonWrapper.className = `price__button__wrapper`;

// const priceButtonName = priceButtonWrapper.appendChild(document.createElement(`span`));
// priceButtonName.className = `price__button__name`;
// priceButtonName.innerHtml = `data.name`;

// // const priceButtonAmount = priceButtonWrapper.appendChild(document.createElement(`span`));
// // priceButtonAmount.className = `price__button__amount`;)
init();
