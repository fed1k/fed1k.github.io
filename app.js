const menuicon = document.querySelector('.menu-icon');
const item1 = document.querySelector('.item1');
const item2 = document.querySelector('.item2');
const item3 = document.querySelector('.item3');
const ul = document.querySelector('.navbar ul');
const li = document.querySelectorAll('.scrolList');
const navbar = document.querySelector('.navbar');
// const mainDiv = document.createElement('div');
const form = document.querySelector('.form');
const email = document.querySelector('#email');
const error = document.querySelector('.error-message');

menuicon.addEventListener('click', () => {
  navbar.classList.toggle('navigation');
  ul.classList.toggle('toggleUl');
  item1.classList.toggle('items1');
  item2.classList.toggle('items2');
  item3.classList.toggle('items3');
});

function myToggle() {
  ul.classList.remove('toggleUl');
  navbar.classList.toggle('navigation');
  item1.classList.remove('items1');
  item2.classList.remove('items2');
  item3.classList.remove('items3');
}

li.forEach((i) => {
  i.addEventListener('click', myToggle);
});

form.addEventListener('submit', (e) => {
  const Emailtext = email.value;
  if (Emailtext !== Emailtext.toLowerCase()) {
    e.preventDefault();
    error.style.color = 'red';
    error.style.gridColumn = '2/3';
    error.textContent = 'Please your email should be in lower case';
  } else {
    error.textContent = '';
  }
});

// Popup window details section starts here
// const popup = [
//   {
//     name: 'First Project',
//     description: 'Lorem ipsum dolor sit amet, consectetur ',
//     technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
//     live: 'https://fed1k.github.io/Personal-Portfolio.github.io/',
//     source: 'https://github.com/fed1k/Personal-Portfolio.github.io',
//   },
// ];

// function createProject(image, className) {
//   const project = `
//       <section class="card1">
//           <img class="images1" src="${image}" alt="Laptop" />
//           <div class="color">
//             <h2>Project name goes here</h2>
//             <ul>
//               <li>HTML/CSS</li>
//               <li>Ruby on Rails</li>
//               <li>Javascript</li>
//             </ul>
// <button class="see" onclick="popupModel('.${className}')" type="button">See this project</button>
//           </div>
//       </section>
//   `;

//   return project;
// }

// const projects = document.querySelector('.projects');
// const projectImages = [
//   'images/Rectangle-21.png',
//   'images/Rectangle-21-1.png',
//   'images/Rectangle-21-2.png',
//   'images/Rectangle-21-3.png',
//   'images/Rectangle-21-4.png',
//   'images/Rectangle-21-5.png',
// ];

// const arrClassName = ['card1', 'card2', 'card3', 'card4', 'card5', 'card6'];

// for (let i = 0; i < 6; i += 1) {
//   projects.innerHTML += createProject(projectImages[i], arrClassName[i]);
// }

// function popupModel(name) {
//   const h2 = document.createElement('h2');
//   const div = document.createElement('div');
//   div.className = 'heading-div';
//   h2.className = 'heading';
//   h2.innerHTML = 'project name goes here';
//   const icon = document.createElement('i');
//   icon.className = 'fa fa-times times';
//   div.append(h2, icon);

//   icon.addEventListener('click', () => {
//     mainDiv.classList.toggle('hidden');
//   });

//   const ul = document.createElement('ul');
//   ul.className = 'languagesContainer';

//   const languages = popup[0].technologies;
//   for (let i = 0; i < languages.length; i += 1) {
//     const li = document.createElement('li');
//     li.className = 'list';
//     li.innerHTML = languages[i];
//     ul.appendChild(li);
//   }

//   const image = document.createElement('img');
//   image.className = 'projectImage';
//   image.src = 'images/Rectangle-21-5.png';

//   const description = document.createElement('p');
//   description.className = 'projectDescription';
//   description.innerHTML = 'Lorem ipsum dolor ;
//   const arrName = ['See live', 'Live Source'];
//   const arrIcon = [
//     'fas fa-external-link-alt btnIcon',
//     'fab fa-github btnIcon',
//   ];

//   const buttonDiv = document.createElement('div');
//   buttonDiv.className = 'parentButtonDiv';

//   for (let i = 0; i < 2; i += 1) {
//     const icon = document.createElement('i');
//     const button = document.createElement('button');

//     button.className = 'projectButton';
//     icon.className = arrIcon[i];
//     button.append(arrName[i], icon);
//     buttonDiv.appendChild(button);
//   }

//   mainDiv.className = 'main-popup-div';
//   mainDiv.append(h2, icon, ul, languages, image, description, buttonDiv);

//   const card = document.querySelector(name);

//   card.appendChild(mainDiv);
// }
