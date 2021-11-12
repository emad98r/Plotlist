// nav scroll -------------------
let haeder=document.querySelector('header'),
logo=document.querySelector('#logo'),
logoH1=document.querySelector('.logo h1'),
navBut=document.querySelector('nav button'),
nav=document.querySelector('nav ul');

window.addEventListener('scroll',()=>{
  if(window.scrollY>=200){
    haeder.style.cssText='background-color: #f7f7f7;    box-shadow: 0 1px 20px #c4c4c4;'
    nav.style.cssText='color:#6a778d;'
    navBut.style.cssText='background-color: #6a778d;color:#f7f7f7;'
  logo.src ='icons/logo.svg';
  logoH1.style.cssText='color:#6a778d;'
}else{
  haeder.style.cssText='background-color: transparent;'
  nav.style.cssText='color:#f7f7f7;'
  navBut.style.cssText='color: #6a778d;background-color:#f7f7f7;'
  logo.src ='icons/logo 2.svg';
  logoH1.style.cssText='color:#f7f7f7;'
  }
})



// second-section -----------------------
let homeBut=document.querySelector('#homeBut'),
foodBut=document.querySelector('#foodBut'),
carsBut=document.querySelector('#carsBut'),
shoppingBut=document.querySelector('#shoppingBut'),
travelBut=document.querySelector('#travelBut'),
allButs=document.querySelectorAll('.category li'),

// -------------------------------------
home=document.querySelector('.info-1'),
food=document.querySelector('.info-2'),
cars=document.querySelector('.info-3'),
shopping=document.querySelector('.info-4'),
traveling=document.querySelector('.info-5');



allButs.forEach(e =>{
e.addEventListener('click',()=>{
resetAllButs();
e.classList.add('active2')
})
});

function resetAllButs(){
  allButs.forEach(e=>{
    e.classList.remove('active2')
  })
}


homeBut.addEventListener('click',()=>{
  home.style.display='flex'
  food.style.display='none'
  cars.style.display='none'
  shopping.style.display='none'
  traveling.style.display='none'
})
foodBut.addEventListener('click',()=>{
  home.style.display='none'
  food.style.display='flex'
  cars.style.display='none'
  shopping.style.display='none'
  traveling.style.display='none'
  
})
carsBut.addEventListener('click',()=>{
  home.style.display='none'
  food.style.display='none'
  cars.style.display='flex'
  shopping.style.display='none'
  traveling.style.display='none'
})
shoppingBut.addEventListener('click',()=>{
  home.style.display='none'
  food.style.display='none'
  cars.style.display='none'
  shopping.style.display='flex'
  traveling.style.display='none'
})
travelBut.addEventListener('click',()=>{
  home.style.display='none'
  food.style.display='none'
  cars.style.display='none'
  shopping.style.display='none'
  traveling.style.display='flex'
})


// --------------------------------------
// hide and show nav bar 


let showListBut =document.querySelector('#showListBut'),
hideListBut =document.querySelector('#hideListBut'),
navList = document.querySelector('#navList'),
addListing = document.querySelector('#addListing');

showListBut.addEventListener('click',()=>{
  navList.style.cssText='display:flex;'
  hideListBut.style.display='block'
  showListBut.style.display='none'
  addListing.style.display='flex'

})
hideListBut.addEventListener('click',()=>{
  navList.style.cssText='display:none;'
  hideListBut.style.display='none'
  showListBut.style.display='block'
  addListing.style.display='none'
})



// -------- contact Us--
let contactUsButs =document.querySelectorAll('#contactUs'),
contactUsBox=document.querySelector('.contact-us');

let secondSection =document.querySelector('.second-section'),
thirdSection=document.querySelector('.third-section')

contactUsButs.forEach(e=>{
  e.addEventListener('click',()=>{
    contactUsBox.style.display='flex';
    secondSection.style.display='none';
    thirdSection.style.display='none';
    contactUsBox.scrollIntoView();
  })
})



// --------------- service Buts ----
let serviceButs=document.querySelectorAll('#serviceButs');

serviceButs.forEach(e=>{
  e.addEventListener('click',()=>{
    secondSection.scrollIntoView();
  })
})


// -----------------for More buts -----
let forMore=document.querySelectorAll('#forMore');
forMore.forEach(e=>{
  e.addEventListener('click',()=>{
    alert("sorry that's all there is no more !!!" )
  });
})