// "use strict";

// const appName = "the collector";

// document.title = appName.toUpperCase();

// const siteTitleRef = document.querySelectorAll("#js-site-tile-ref");

// siteTitleRef.forEach((element) => {
//   element.textContent = appName;
// })


// // let cont = document.querySelector(".latest-list")


// const url = 'https://ott-details.p.rapidapi.com/getnew?region=US&page=1';

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '1188aa05b6msh4990dbeb17d5424p1534c5jsnd66623cc56f1',
// 		'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
// 	}
// };

// fetch(url, options)
//   .then(response => response.json())
//   .then((data) => {
//   let arr = data.results
//   console.log(arr);
//   arr.forEach((item) => {
//     let html = `
//     <div class="card new-item-card" style="width: 18rem;">
//       <img src="${item.imageurl[0]}" class="card-img-top img-fluid" alt="the roads not taken movie poster">
//       <div class="card-body">
//         <h5 class="card-title">${item.title}</h5>
//         <p class="card-text">${item.released}</p>
//         <a href="#" class="btn btn-secondary">In detail</a>
//       </div>
//     </div>
//     `;

//     document.querySelector(".latest-list").innerHTML += html;;

//   })
// })
//   .catch(error => alert(error.message));



const b = document.querySelector("#searchBtn");
const l = document.querySelector(".latest-list");

const test = async function(){
  const s = document.querySelector("#searchInput").value.trim();

  fetch("https://imdb8.p.rapidapi.com/v2/search?searchTerm=tom%20cruise&type=NAME&first=20", {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1188aa05b6msh4990dbeb17d5424p1534c5jsnd66623cc56f1',
		  'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    }
  })
  .then(res => res.json())
  .then((data) => console.log(data))
  .catch((error) => alert(error.message))
}
