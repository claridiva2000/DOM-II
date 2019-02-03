// Your code goes here



const funBus = document.querySelector(".logo-heading");
console.log(funBus);

funBus.addEventListener('click', ()=>{
  console.log('it works')
  funBus.classList.toggle('togglelogo');
});

funBus.addEventListener('click', ()=>{
  funBus.innerText= 'Magic School Bus!';
});


const yellowbus = document.querySelector(".home img");
console.log(yellowbus);
yellowbus.addEventListener('mouseover', ()=>{
  yellowbus.src = "img/magicsb.gif";
});

const blurb1 = document.querySelector(".home h2");
console.log(blurb1);

blurb1.addEventListener('dblclick', () =>{
  blurb1.innerHTML= "Welcome to outer space!!";
  blurb1.style.color="white";
});


const navlinks = document.querySelectorAll(".nav-link");
console.log(navlinks);

navlinks[0].addEventListener('click', (background) =>{
  document.body.style.backgroundImage = "url('img/space.jpg')";
});


const letsgo = document.querySelector(".text-content");
console.log(letsgo);

 
letsgo.addEventListener('mouseover', (white)=>{
  letsgo.style.color="white";
});

const map = document.querySelector(".img-content img");
console.log(map);

map.addEventListener('drag', (dragit)=>{
  map.src='img/jupiter.jpg';
});

const boat = document.querySelector(".img-fluid");
console.log(boat);

boat.addEventListener('wheel', (scrollin)=>{
  boat.src= 'img/saturn.jpg';
});


const signup = document.querySelectorAll(".destination");
console.log(signup);

document.addEventListener('keydown', () => {
  const signup = document.querySelectorAll(".destination");
  for(let i = 0; i < signup.length; i++) {
    signup[i].style.color = '#fec33a';
  }
});

const signup2 = signup[1];
console.log(signup2);

signup2.addEventListener('wheel', (scrollin)=>{
  signup2.style.color="white";
});

widepic = document.querySelector('.content-destination img');
console.log(widepic);

widepic.addEventListener('dblclick', () =>{
  widepic.src= "img/rocket.gif";
  blurb1.style.color="white";
});