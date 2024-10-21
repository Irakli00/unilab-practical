import { generateDogsHTML } from "./script.js";
import { dogs } from "./db.js";

const selectedDogData = JSON.parse(localStorage.getItem('selectedDog'));


const dogsEl = document.querySelector('.dogs-cards--details')
if(dogsEl){
  dogsEl.insertAdjacentHTML('beforeend',generateDogsHTML(dogs,4))
}

const element = document.getElementById('details--section')


console.log(selectedDogData)

const html =`
     <div id="img-col">
        <img src="${selectedDogData.imgUrl}" alt="${selectedDogData.breed}">
        <div id="details--bonuses">
          <article>
            <img src="../imgs/icons/dogheart.svg" alt="">
            <p>100% health guarantee for pets</p>
          </article>
          <article>
            <img src="../imgs/icons/petinprofile.svg" alt="">
            <p>100% guarantee of pet identification</p>
          </article>
        </div>
        <div id="details--share">
          <div>
            <img src="../imgs/icons/Share_Android.svg" alt="">
            <p>Share:</p>
          </div>

            <img src="../imgs/icons/media/Facebook-gray.svg" alt="">
            <img src="../imgs/icons/media/twitter-gray.svg" alt="">
            <img src="../imgs/icons/media/Instagram-gray.svg" alt="">
            <img src="../imgs/icons/media/YouTube-gray.svg" alt="">

        </div>
      </div>
      <div id="details-col">
        <div class="map">
          <a href="./index.html">Home</a>
          <img src="../imgs/icons/arrow.svg" alt="">
          <a href="./pets-category.html">Dog</a>
          <img src="../imgs/icons/arrow.svg" alt="">
          <a href="./pets-category.html">Large Dog</a>
          <img src="../imgs/icons/arrow.svg" alt="">
          <a href="#">${selectedDogData.breed}</a>
        </div>
        <article>
          <p><span>${selectedDogData.id}</span></p>
          <h2>${selectedDogData.breed}</h2>
          <strong>${selectedDogData.price} VND</strong>
          <div class="contact">
            <a href="./contact-us.html">Contact us</a>
            <a href=""><img src="../imgs/icons/chat.svg" alt="">Chat with Monito</a>
          </div>
          <div>
            <article  id="details--values">
              <div>
                <p>SKU</p> <p>:${selectedDogData.sku}</p>
              </div>              <div>
                <p>Gender</p> <p>:${selectedDogData.gene}</p>
              </div>              <div>
                <p>Age</p> <p>:${selectedDogData.ageMonths} Months</p>
              </div>              <div>
                <p>Size</p> <p>:${selectedDogData.size} </p>
              </div>              <div>
                <p>Color</p> <p>:${selectedDogData.color} </p>
              </div>              <div>
                <p>Vaccinated</p> <p>:${selectedDogData.vaccinated?'Yes':'No'} </p>
              </div>              <div>
                <p>Dewormed</p> <p>:${selectedDogData.dewormed?'Yes':'No'} </p>
              </div>              <div>
                <p>Cert</p> <p>:${selectedDogData.cert? 'Yes':'No'}${selectedDogData.cert.b?`(${selectedDogData.cert.detail})`:''} </p>
              </div>              <div>
                <p>Microchip</p> <p>:${selectedDogData.microchip?'Yes':'No'} </p>
              </div>              <div>
                <p>Location</p> <p>:${selectedDogData.location} </p>
              </div>              <div>
                <p>Published Date</p> <p>:${selectedDogData.published} </p>
              </div>              <div>
                <p>Additional Information</p> <p>:${selectedDogData.additionalDetails} </p>
              </div>
            </article>
          </div>
        </article>
      </div>
`

if(element){
  element.insertAdjacentHTML('beforeend',html)
}

const scrollContainer = document.querySelector('.customer--images');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');

const scrollAmount = 600; 

// Scroll left
leftArrow.addEventListener('click', () => {
  console.log('Scrolling left');
  scrollContainer.scrollBy({
    left: -scrollAmount, 
    behavior: 'smooth'   
  });
});

// Scroll right
rightArrow.addEventListener('click', () => {
  console.log('Scrolling right');
  scrollContainer.scrollBy({
    left: scrollAmount,  
    behavior: 'smooth'   
  });
});
