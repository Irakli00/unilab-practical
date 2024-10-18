'use strict'

import {dogs, products,petFacts, eventDate} from '../script/db.js'

(function countdownTo(targetDate) {
  const target = new Date(targetDate).getTime(); // Get the target date in milliseconds

  const interval = setInterval(() => {
    const now = new Date().getTime(); // Current time in milliseconds
    const difference = target - now; // Difference between the target and now

    // Calculate remaining time
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Display the result in the format: "D days HH:MM:SS"
    const daysEl = document.getElementById("days")
    const hoursEl = document.getElementById("hours")
    const minutesEl = document.getElementById("minutes")
    const secondsEl = document.getElementById("seconds")

    if(daysEl && hoursEl && minutesEl && secondsEl){
      daysEl.innerHTML = `${days}`;
      hoursEl.innerHTML = `${hours}`;
      minutesEl.innerHTML = `${minutes}`;
      secondsEl.innerHTML = `${seconds}`;
    }
  }, 1000); // Update every 1 second
})(eventDate)

export const generateDogsHTML = function(cards, cardsToGenerate=cards.length) {  //all cards or only passed ammount
  let html = ``;

  cards.slice(0,cardsToGenerate).forEach(el => {
    html += `
     <figure class="card">
      <img src="${el.imgUrl}" alt="${el.breed}">
      <figcaption>
          <h2 class="dog-descr">${el.id} - ${el.breed}</h2>
          <div>
            <p class="dog-details">Gene:<strong>${el.gene}</strong></p>
            <p>Age: <strong>${el.ageMonths} months</strong></p>
          </div>
          <p class="price">${el.price} VND</p>
      </figcaption>
     </figure>
    `;
  });

  return html; 
};

const dogsEl = document.querySelector('.dogs-cards-js')
if(dogsEl){
  dogsEl.insertAdjacentHTML('beforeend',generateDogsHTML(dogs,8))
}


const generateProductsHtml = function(cards){
  let html = ``;

  cards.forEach(el => {
    html += `
        <figure class="card">
          <img src="${el.imgUrl}" alt="${el.desc}">
          <figcaption>
            <h2 class="product-name">${el.desc}</h2>
            <div>         
              <p class="">Product:<strong>${el.product}</strong></p>
              ${el.sizeGrams?`<p class="">Food Size:<strong>${el.sizeGrams} grams</strong></p>`:''}
              <p class="price">${el.price} VND</p>                 
            </div>

            ${el.bonus? `
            <div class="card-bonus">
              <img src="../imgs/icons/gift.svg" alt="">
              <p>${el.bonus.value}</p>
            </div>`:''}
          </figcaption>
        </figure>
    `
  });

  return html; 
}
const productsEl = document.querySelector('.product-cards-js')
if(productsEl){
  productsEl.insertAdjacentHTML('beforeend', generateProductsHtml(products))
}


const generateFactsHTML = function(cards) {
  let html = '';
  cards.forEach(el => {
    html += `
      <div class="fact-card">
        <img src="${el.imgUrl}" alt="">
        <div>
          <aside>
            <p>Pet knowledge</p>
          </aside>
          <h4>${el.header}</h4>
          <p>${el.fact}</p>
        </div>
      </div>
    `;
  });
  return html;
}

const factsEl = document.querySelector('.fact-cards-js');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
let currentPage = 0;
const cardsPerPage = 3;

const displayFactsPage = function(page) {
  const start = page * cardsPerPage;
  const end = start + cardsPerPage;
  const paginatedCards = petFacts.slice(start, end);

  if(factsEl){
    factsEl.innerHTML = '';
    factsEl.insertAdjacentHTML('beforeend', generateFactsHTML(paginatedCards));
  }
}

if(leftBtn && rightBtn){

  leftBtn.addEventListener('click', function() {
    currentPage = (currentPage > 0) ? currentPage - 1 : Math.ceil(petFacts.length / cardsPerPage) - 1;
    displayFactsPage(currentPage);
  });
  rightBtn.addEventListener('click', function() {
    currentPage = (currentPage + 1) % Math.ceil(petFacts.length / cardsPerPage);
    displayFactsPage(currentPage);
  });
}
  
  // init
displayFactsPage(currentPage);
