import { dogs } from "./db.js";
import { generateDogsHTML } from "./script.js";

const element = document.getElementById('f-c--cards')

if(element){
  element.insertAdjacentHTML('beforeend',generateDogsHTML(dogs,15))
}

if(element){
  const currentPage =0;

  const pages =`
    <div class="pages" id="category--pages">
    <div><img src="../imgs/icons/others/arrow-left.svg" alt=""></div>
    <div><p>1</p></div>
    <div><p>2</p></div>
    <div><p>3</p></div>
    <div><p>4</p></div>
    <div><p>...</p></div>
    <div><p>${Math.ceil(dogs.length/2)}</p></div>
    <div><img src="../imgs/icons/others/arrow-right.svg" alt=""></div>
  </div>
  `//vitom 2 elementia tito gverdze

  element.insertAdjacentHTML('beforeend',pages)
  const pagesElements= element.querySelector('.pages').querySelectorAll('p')

  pagesElements[currentPage].classList.add('current-page')
}


const filteredResults =document.querySelectorAll('.card')

if(filteredResults){
  filteredResults.forEach(el=>{
    el.addEventListener('click',()=>{
      const childClicked = [...filteredResults].indexOf(el)
      const data = dogs[childClicked]
      console.log(data)

      localStorage.setItem('selectedDog', JSON.stringify(data))

      window.location.href = 'pet-details.html'
    })
  })
}

