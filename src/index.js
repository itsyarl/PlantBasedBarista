import './style.css';
import data from '../src/assets/js/coffees.json';

const init = () => {
  getCoffees(data);
  getOrder(data);
  // addItem(data);
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

const getOrder = () => {
  const $items = document.querySelectorAll(`.price`);
  $items.forEach(function($item) {
    $item.addEventListener(`click`, e => {
      addItem(e.composedPath()[2]);
    });
  });
};

const addItem = e => {
  const num = e.getAttribute('data_id');
  console.log(num);
  const naam = document.querySelector(`.price:nth-child(${num}n) .price__button__name`).innerHTML;
  console.log(naam);
  const prijs = document.querySelector(`.price:nth-child(${num}n) .price__button__amount`).innerHTML;
  console.log(prijs);
  const $order = document.querySelector(`.orders`);
  // attribuut word genomen maar heb de naam en prijs er van nodig
  const $li = document.createElement(`li`);
  $li.classList.add(`order`);
  $li.innerHTML = `<span class="order__name">
                    <span class="order__amount">1x</span> ${naam}
                  </span>
                  <div class="order__wrapper">
                    <span class="order__price">${prijs}</span>
                    <button class="remove">
                      x
                    </button>
                  </div>`;

  $order.appendChild($li);
  const $item = document.querySelector(`.order`);
  const $list = document.querySelector(`.orders`).contains($item);
  toggleContent($list);
};

const toggleContent = empty => {
  const $empty = document.querySelector(`.emptystate`);
  const $notEmpty = document.querySelector(`.orders__wrapper`);
  console.log(empty);
  if (empty === true) {
    $empty.classList.add(`hide`);
    $notEmpty.classList.remove(`hide`);
  }
  if (empty === false) {
    $empty.classList.remove(`hide`);
    $notEmpty.classList.add(`hide`);
  }
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
