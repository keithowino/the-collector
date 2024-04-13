"use strict";

document.addEventListener("DOMContentLoaded", action);

function action(){
  const appName = "the collector";
  document.title = appName.toUpperCase();
  const siteTitleRef = document.querySelectorAll("#js-site-tile-ref");

  siteTitleRef.forEach((element) => {
    element.textContent = appName;
  })

  const searchResultsContainer = document.querySelector(".searched-results");
  const tvShowResults = document.querySelector(".tv-shows-results");
  const movieResults = document.querySelector(".movie-results");
  const personResults = document.querySelector(".person-results");
  // const trendingContainer = document.querySelector("#trending-list");
  // const upcomingContainer = document.querySelector("#upcoming-list");

  const imgBaseUrl = "http://image.tmdb.org/t/p/w500";

    const movieNameTvShowSearchBtnElement = document.querySelector("#movieNameTvShowSearchBtn");

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTdlMTFjYzUyNWE2ZGNmMGQxMjZmMDI5NDAzYjZjNCIsInN1YiI6IjY2MTdhMTc4NDUzOWQwMDE3ZGZjOTZhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r7QXZxUOHWRdgh6irsq9gjafszv5kJHUp7crlIC2Flo'
    }
  };

  // const searchInput = function () {
  //   console.log(searchMovieNameTvShowInputStr);
  //   fetch(`https://api.themoviedb.org/3/search/multi?query=${searchMovieNameTvShowInputStr}&include_adult=false&language=en-US&page=1`, options)
  //     .then(response => response.json())
  //     .then(response => console.log(response))
  //     .catch(err => alert(err));
  // };

  movieNameTvShowSearchBtnElement.addEventListener("click", getMovieList);

  function getMovieList(e){
    e.preventDefault();
    let searchMovieNameTvShowInputStr = document.querySelector("#movieNameTvShowInput").value.trim();
    fetch(`https://api.themoviedb.org/3/search/multi?query=${searchMovieNameTvShowInputStr}&include_adult=false&language=en-US&page=1`, options)
      .then(response => response.json())
      .then(response => {
        console.log(response)

        const searchResultsArr = response.results;

        searchResultsArr.forEach(element => {

          let PosterImgUrl = imgBaseUrl + element.poster_path;
          let ProfileImgUrl = imgBaseUrl + element.profile_path;

          const tMediaTypeHTML = `
          <div class="card new-item-card" style="width: 18rem;">
            <img src="${PosterImgUrl}" class="card-img-top img-fluid" alt="${element.original_name} movie poster">
            <div class="card-body">
              <h5 class="card-title">${element.original_name}</h5>
            </div>
          </div>
          `;
          const PMediaTypeHTML = `
          <div class="card new-item-card" style="width: 18rem;">
            <img src="${ProfileImgUrl}" class="card-img-top img-fluid" alt="${element.name} profile picture">
            <div class="card-body">
              <h5 class="card-title">${element.name}</h5>
            </div>
          </div>
          `;
          const mMediaTypeHTML = `
          <div class="card new-item-card" style="width: 18rem;">
            <img src="${PosterImgUrl}" class="card-img-top img-fluid" alt="${element.title} movie poster">
            <div class="card-body">
              <h5 class="card-title">${element.title}</h5>
            </div>
          </div>
          `;

          switch (element.media_type) {
            case "tv":
              tvShowResults.innerHTML += tMediaTypeHTML;
              break;
          
            case "person":
              movieResults.innerHTML += PMediaTypeHTML;
              break;

            case "movie":
              personResults.innerHTML += mMediaTypeHTML;
              break;
          }
        })
      })
      .catch(err => alert(err));
  };

  /*
  
  
  movieNameTvShowSearchBtnElement.addEventListener("click", function () {
    const searchMovieNameTvShowInputStr = document.querySelector("#movieNameTvShowInput").value.trim();
    fetch(`https://api.themoviedb.org/3/search/multi?query=${searchMovieNameTvShowInputStr}&include_adult=false&language=en-US&page=1`, options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => alert(err));
  });
  
  */

  /*

fetch('https://api.themoviedb.org/3/search/multi?include_adult=false&language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));


fetch('https://api.themoviedb.org/3/search/multi?query=Rober%20Downey&include_adult=false&language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
  
  
  */
  

  /*

  TRENDING MOVIES
  fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
    .then(response => response.json())
    .then(response => {
      const trendingMovieArr = response.results;

      trendingMovieArr.forEach(element => {
        let imgUrl = imgBaseUrl + element.poster_path;
        let html = `
        <div class="card new-item-card" style="width: 18rem;">
          <img src="${imgUrl}" class="card-img-top img-fluid" alt="${element.title} movie poster">
          <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
          </div>
        </div>
        `;

        trendingContainer.innerHTML += html;
      });
    })
    .catch(err => alert(err.message));

    */

    /*


    UPCOMING MOVIES
    let page = Math.floor(Math.random() * 62);

    fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}`, options)
    .then(response => response.json())
    .then(response => {
      const upcomingMovieArr = response.results;

      upcomingMovieArr.forEach(element => {
        let html;

        if(element.poster_path !== null){
          let imgUrl = imgBaseUrl + element.poster_path;
          html = `
          <div class="card new-item-card" style="width: 18rem;">
            <img src="${imgUrl}" class="card-img-top img-fluid" alt="${element.title} movie poster">
            <div class="card-body">
              <h5 class="card-title">Title : ${element.title}</h5>
              <h5 class="card-title">Release Date : ${element.release_date}</h5>
            </div>
          </div>
          `;
        };

        upcomingContainer.innerHTML += html;
      });
    })
    .catch(err => alert(err.message));

    */
};
