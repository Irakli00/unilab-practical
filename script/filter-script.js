import { dogs } from "./db.js";
import { generateDogsHTML } from "./script.js";

const element = document.getElementById('f-c--cards')

if(element){
  element.insertAdjacentHTML('beforeend',generateDogsHTML(dogs,15))
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

