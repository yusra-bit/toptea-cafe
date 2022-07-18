
//FILTER TABS

  
const showAllTab = document.querySelector('.all');
const hotTab = document.querySelector('.hot-drink')
const shakeTab = document.querySelector('.milkshake')

const coldTab = document.querySelector('.cold-drink')
const dessertTab = document.querySelector('.dessert');
const frappeTab = document.querySelector('.frappe')
const drinkTab = document.querySelector('.drink')

const allFilteredDiv = document.querySelectorAll('.filter-div')

// Turns node list into an array
const allFilteredDivArray = Array.from(allFilteredDiv)

showAllTab.addEventListener('click', showAll)
function showAll() {
 allFilteredDiv.forEach(p =>{
   p.classList.remove('remove');
   p.classList.add('show')
 })
}

hotTab.addEventListener('click', showHotDrink)
function showHotDrink() {
 allFilteredDiv.forEach(p =>{
   p.classList.remove('remove');
   
   if(!p.dataset.hotdrink){
        p.classList.add('remove');

   }
 })
}

coldTab.addEventListener('click', showColdDrink)
function showColdDrink() {
 allFilteredDiv.forEach(p =>{
   p.classList.remove('remove');
   
   if(!p.dataset.colddrink){
        p.classList.add('remove');

   }
 })
}
shakeTab.addEventListener('click', showShake)
function showShake() {
 allFilteredDiv.forEach(p => {
   p.classList.remove('remove');
   
   if(!p.dataset.milkshake) {
     p.classList.add('remove')
   }
 })
}
dessertTab.addEventListener('click', showDessert)
function showDessert() {
 allFilteredDiv.forEach(p => {
   p.classList.remove('remove');
   
   if(!p.dataset.dessert) {
     p.classList.add('remove')
   }
 })
}

frappeTab.addEventListener('click', showFrappe)
function showFrappe() {
 allFilteredDiv.forEach(p => {
   p.classList.remove('remove');
   
   if(!p.dataset.frappe) {
     p.classList.add('remove')
   }
 })
}

drinkTab.addEventListener('click', showDrink)
function showDrink() {
 allFilteredDiv.forEach(p => {
   p.classList.remove('remove');
   
   if(!p.dataset.drink) {
     p.classList.add('remove')
   }
 })
}