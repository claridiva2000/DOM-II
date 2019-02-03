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


let yellowbus = document.querySelector(".home img");
console.log(yellowbus);
yellowbus.addEventListener('mouseover', ()=>{
  yellowbus.src = "img/magicsb.gif";
});

let blurb1 = document.querySelector(".home h2");
console.log(blurb1);

blurb1.addEventListener('dblclick', () =>{
  blurb1.innerHTML= "Welcome to outer space!!";
  blurb1.style.color="white";
});


let navlinks = document.querySelectorAll(".nav-link");
console.log(navlinks);

navlinks[0].addEventListener('click', (background) =>{
  document.body.style.backgroundImage = "url('img/space.jpg')";
});

about = navlinks[1];
console.log(about);

about.onmouseenter = function(){document.html.style.color='yellow'};

let letsgo = document.querySelector(".text-content");
console.log(letsgo);

letsgo.addEventListener('mouseover', (white)=>{
  letsgo.style.color="white";
});

let map = document.querySelector(".img-content img");
console.log(map);

map.addEventListener('drag', (dragit)=>{
  map.src='img/jupiter.jpg';
});

let boat = document.querySelector(".img-fluid");
console.log(boat);

boat.addEventListener('wheel', (scrollin)=>{
  boat.src= 'img/saturn.jpg';
});


let signup = document.querySelectorAll(".destination");
console.log(signup);



let destination = document.querySelector(".content-destination img");
console.log(destination);


let signup2 = signup[1];
console.log(signup2);

signup2.addEventListener('wheel', (scrollin)=>{
  signup2.style.color="white";
});

// let signup = document.querySelectorAll(".destination");

// navlinks[1].addEventListener('click', (yellow)=>{
//   for (let i = 0; i < signup.length; i++) {
//     signup[i].style.Color = "yellow";
// }
// });
