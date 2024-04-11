"use strict";

document.addEventListener("DOMContentLoaded", action);

function action(){
  const appName = "the collector";
  const imgBaseUrl = "http://image.tmdb.org/t/p/w500";
  const config = "/configuration";

  const trendingContainer = document.querySelector("#trending-list");
  const upcomingContainer = document.querySelector("#upcoming-list");


  document.title = appName.toUpperCase();

  const siteTitleRef = document.querySelectorAll("#js-site-tile-ref");

  siteTitleRef.forEach((element) => {
    element.textContent = appName;
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTdlMTFjYzUyNWE2ZGNmMGQxMjZmMDI5NDAzYjZjNCIsInN1YiI6IjY2MTdhMTc4NDUzOWQwMDE3ZGZjOTZhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r7QXZxUOHWRdgh6irsq9gjafszv5kJHUp7crlIC2Flo'
    }
  };
  
  // TRENDING MOVIES
  fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
    .then(response => response.json())
    .then(response => {
      const trendingMovieArr = response.results;

      trendingMovieArr.forEach(element => {
        let html = `
        <div class="card new-item-card" style="width: 18rem;">
          <img src="${imgBaseUrl + element.poster_path}" class="card-img-top img-fluid" alt="${element.title} movie poster">
          <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
          </div>
        </div>
        `;

        trendingContainer.innerHTML += html;
      });
    })
    .catch(err => alert(err.message));

    // UPCOMING MOVIES

    let page = Math.floor(Math.random() * 61);
    console.log("page " + page);

    fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}`, options)
    .then(response => response.json())
    .then(response => {
      const upcomingMovieArr = response.results;

      upcomingMovieArr.forEach(element => {
        let imgUrl;
        let html;

        if(element.poster_path !== null){
          imgUrl = imgBaseUrl + element.poster_path;
          html = `
          <div class="card new-item-card" style="width: 18rem;">
            <img src="${imgUrl}" class="card-img-top img-fluid" alt="${element.title} movie poster">
            <div class="card-body">
              <h5 class="card-title">Title : ${element.title}</h5>
              <h5 class="card-title">Release Date : ${element.release_date}</h5>
            </div>
          </div>
          `;
        }else{
          html = "";
        }

        upcomingContainer.innerHTML += html;
      });
    })
    .catch(err => alert(err.message));
};
