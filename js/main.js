
//Menu 
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = ()=>{
  menu.classList.add("active");
  menuBtn.classList.add("hide");
}

cancelBtn.onclick = ()=>{
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
}



//FILTER TABS
const showAllTab = document.querySelector('.all');
 const hotTab = document.querySelector('.hot-drink')
 const shakeTab = document.querySelector('.milkshake')

 const coldTab = document.querySelector('.cold-drink')
 const dessertTab = document.querySelector('.dessert');
 const frappeTab = document.querySelector('.frappe')
 const drinkTab = document.querySelector('.drink')

const allFilteredP = document.querySelectorAll('.filter-p')

// Turns node list into an array
const allFilteredPArray = Array.from(allFilteredP)

showAllTab.addEventListener('click', showAll)
function showAll() {
  allFilteredPArray.forEach(p =>{
    p.classList.remove('remove');
    p.classList.add('show')
  })
}

hotTab.addEventListener('click', showHotDrink)
function showHotDrink() {
  allFilteredPArray.forEach(p =>{
    p.classList.remove('remove');
    
    if(!p.dataset.hotdrink){
         p.classList.add('remove');

    }
  })
}

coldTab.addEventListener('click', showColdDrink)
function showColdDrink() {
  allFilteredPArray.forEach(p =>{
    p.classList.remove('remove');
    
    if(!p.dataset.colddrink){
         p.classList.add('remove');

    }
  })
}
shakeTab.addEventListener('click', showShake)
function showShake() {
  allFilteredPArray.forEach(p => {
    p.classList.remove('remove');
    
    if(!p.dataset.milkshake) {
      p.classList.add('remove')
    }
  })
}
dessertTab.addEventListener('click', showDessert)
function showDessert() {
  allFilteredPArray.forEach(p => {
    p.classList.remove('remove');
    
    if(!p.dataset.dessert) {
      p.classList.add('remove')
    }
  })
}

frappeTab.addEventListener('click', showFrappe)
function showFrappe() {
  allFilteredPArray.forEach(p => {
    p.classList.remove('remove');
    
    if(!p.dataset.frappe) {
      p.classList.add('remove')
    }
  })
}

drinkTab.addEventListener('click', showDrink)
function showDrink() {
  allFilteredPArray.forEach(p => {
    p.classList.remove('remove');
    
    if(!p.dataset.drink) {
      p.classList.add('remove')
    }
  })
}