$(document).foundation();
var apikey = "56891a6ccafa21abdc7eb786db42b000";  
var mgaGenres =  {
"Action": 28,
"Adventure": 12,
"Animation": 16,
"Comedy": 35,
"Crime": 80,
"Documentary": 99,
"Drama": 18,
"Family": 10751,
"Fantasy": 14,
"History": 36,
"Horror": 27,
"Music": 10402,
"Mystery": 9648,
"Romance": 10749,
"Science Fiction": 878,
"TV Movie": 10770,
"Thriller": 53,
"war": 10752,
"Western": 37
};


//HTTPS Links for API call
var apikey = "0369d0746be36bbf12f206aeb60eac4d";

var posterLink = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2";

var tmdbURL = "https://api.themoviedb.org/3/genre/movie/list?api_key=0369d0746be36bbf12f206aeb60eac4d&language=en-US";

var similarMovie = "https://api.themoviedb.org/3/movie/49519/similar?api_key=0369d0746be36bbf12f206aeb60eac4d&language=en-US&page=1";

var movieList=[];

function actorSearch(actorId){
  var search = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_cast=${actorId}`
  
  fetch(search).then(function(response){
  
      return response.json();
    
    }).then(function (data) { 
  console.log (search)
  console.log (data)
  console.log (data.results.length)
  console.log (data.results[15].title)
})};
function actorIdSearch(actorName){
  var search = `https://api.themoviedb.org/3/search/person?api_key=${apikey}&language=en-US&page=1&include_adult=false&query=${actorName}`;
  fetch(search).then(function(response){
  
    return response.json();
  
  }).then(function (data) {
  var actorId = data.results[0].id  
  console.log(search);
  console.log(data);
  console.log (actorId);
  actorSearch(actorId);    
  })};
function genreSearch(genre){
var search = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en-US&page=1&include_adult=true&sort_by=popularity.desc&with_genres=${genre}`;
fetch(search).then(function(response){

  return response.json();
  console.log(response.json);

}).then(function (data) {
  console.log (search);
  console.log (data); 
  console.log (data.results[5].title);
  })};
function similarSearch(movieId){
    var search = `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${apikey}&language=en-US&page=1`;
    fetch(search).then(function(response){
    
      return response.json();
      console.log(response.json);
    
    }).then(function (data) {
      console.log (search);
      console.log (data);
      console.log (data.results[5].title);   
      })};
function movieIdSearch(movieTitle){
        var search = `https://api.themoviedb.org/3/search/movie?query=${movieTitle}&api_key=${apikey}&language=en-US&page=1`;
        fetch(search).then(function(response){
        
          return response.json();
          console.log(response.json);
        
        }).then(function (data) {
          console.log (search);
          console.log (data);
          var movieId = data.results[0].id 
          console.log (movieId) 
          similarSearch(movieId)  
          })};
function yearSearch(movieYear){
            var search = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=${movieYear}&sort_by=popularity.desc`;
            fetch(search).then(function(response){
            
              return response.json();
                 
            }).then(function (data) {
              console.log (search);
              console.log (data);
              console.log (data.results[5].title); 
              })};

                /*for (var i = 0; i<20; i++ ){
                movie[i] = data.credits.cast[i].title
                poster[i] = data.credits.cast[i].poster_path
                overview[i] = data.credits.cast[i].overview
                console.log (movie[i]);
                console.log (poster[i]);
                console.log (overview[i])
                movieList=movie;
                }
*/
//constructors for main page movie preference values
const button = document.querySelector('#button');
const genres = document.getElementById('Genre');
const lowRating = document.getElementById('ratingLow');
const highRating = document.getElementById('ratingHigh');
const actors = document.querySelector('#actors')
const yearFrom = document.getElementById('yearFrom');
const yearTo = document.getElementById('yearTo');

const voteButton1 = document.getElementById('faceoffButton1');
const voteButton2 = document.getElementById('faceoffButton2');
genreSearch(16);
movieIdSearch("Amsterdam");
yearSearch(2001);
actorIdSearch("Ben Stiller")
if (button) {
  button.addEventListener('click', function(event) {
   event.preventDefault();
   
   actor = actors.value;
   genre = genres.value; 
   lRating = lowRating.value;
   hRating = highRating.value;
   fRange = yearFrom.value;
   tRange = yearTo.value; 
   /*saveString = {
    "actor":actor
   };*/
   console.log(actor, genre, lRating, hRating, fRange, tRange);
  

   
  /*localStorage.setItem("actor", JSON.stringify(saveString));
   try {
      window.location.href = './htmls/faceoff.html';
    } catch (error) {
      console.error('An error occurred:', error);
      window.location.href = 'htmls/error.html';
    }
  */})};
  