
var posterLink = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2";
let currentMovieIndex = 2;
let LastWinningMovie;
var apikey = "0369d0746be36bbf12f206aeb60eac4d";
var data;
var movie = [0,1,2,3,4,5,6,7,]
var poster = [0,1,2,3,4,5,6,7,]
var overview = [0,1,2,3,4,5,6,7,]
var moviesCount;

const voteButton1 = document.getElementById('faceOffButton1');
const voteButton2 = document.getElementById('faceOffButton2');
const container = document.querySelector(".double-container");
var movieTitle1 = document.querySelector('#movie-title-1');
var movieTitle2 = document.querySelector('#movie-title-2');
var movieOverview1 = document.querySelector('#movie-description-1');
var movieOverview2 = document.querySelector('#movie-description-2');
var movieImg1 = document.querySelector('#movie-img-1');
var movieImg2 = document.querySelector('#movie-img-2');
var button2 = document.querySelector('#button2');
var movieInfo2 = document.querySelector ('#movie-info2');
var movieImg2 = document.querySelector ('#movie-img-2');


function setupWinner (winner){
  var storeWinner = {
    "Winner": winner}
localStorage.setItem("faceoff", JSON.stringify(storeWinner));
window.location.href = '../htmls/winner.html';
}

function setupError(code1, code2, code3) {
  var storeError ={
    "code1": code1,
    "code2": code2,
    "code3": code3,}
  localStorage.setItem("error", JSON.stringify(storeError)); 
  window.location.href = '../htmls/error.html';
  }
/*This function will look for movies that match the requested genre, release date, and/or actor (using the actorId found in
the actorIdSearch.  If more than one or more movies is returned then the data will be sent to the makeContestants function.
If not the error page will be brought up via the setupError function*/
function movieSearch(actorId){
  var search = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc${actorId?"&with_cast="+actorId:""}${genreNumber?"&with_genres="+genreNumber:""}${releaseYear?"&primary_release_year="+releaseYear:""}`
  
  fetch(search).then(function(response){
  
      return response.json();
    
    }).then(function (data) { 
  console.log (search)
  console.log (data)
  console.log (data.results.length)
  if (data.results.length <1) setupError(4);
  makeContestants(data); 
})};
/*This function finds the actor ID using an actor's name it then forwards on to movieSearch which uses the actorId
 and not the actor's name*/
function actorIdSearch(){
  console.log ("actorIdSearch");
  var search = `https://api.themoviedb.org/3/search/person?api_key=${apikey}&language=en-US&page=1&include_adult=false&query=${actor}`;
  fetch(search).then(function(response){
  
  return response.json();
  
  }).then(function (data) {
  var actorId = data.results[0].id  
  console.log(search);
  console.log(data);
  console.log (actorId);
  movieSearch(actorId);    
  })};
/*This function recieves the movieId from the movieIdsearch function and searches for a set of movies that the Movie DB 
believes to be similar to the one the user input.  If there is more than one movie, the data will be sent on to the 
makeContestants function to set up the data for use or it will be sent to the error page via the setupError function. */
function similarSearch(movieId){
  var search = `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${apikey}&language=en-US&page=1`;
  fetch(search).then(function(response){
  
    return response.json();
   
  
  }).then(function (data) {
    console.log (search);
    if (data.results.length < 1) setupError(4)
    console.log (data.results[5].title); 
    makeContestants(data); 
    })};
/*This function takes the movieTitle from users selection and finds the Movie DB movie ID and sends it to the similarSearch
function if the movieId exists or sends it to the error page (via the setupError function) if it doesn't. */
function movieIdSearch(){
  var search = `https://api.themoviedb.org/3/search/movie?query=${similarTo}&api_key=${apikey}&language=en-US&page=1`;
  fetch(search).then(function(response){
  
    return response.json();
  
  
  }).then(function (data) {
    console.log (search);
    console.log (data);
   try {
     var movieId = data.results[0].id 
   console.log (movieId) 
    similarSearch(movieId)
   }catch (error){
    setupError(2);
   }  
    })};

/*This function takes the actor name from users selection and finds the Movie DB actor ID and sends it to the movieSearch
function if the actorId exists or sends it to the error page (via the setupError function) if it doesn't. */
function actorIdSearch(){
var actorSearch = "https://api.themoviedb.org/3/search/person?api_key="+apikey+"&language=en-US&page=1&include_adult=false&query="+actor;
fetch(actorSearch).then(function(response){

  return response.json();

}).then(function (data) {
try {
  var actorId = data.results[0].id 
}catch (error) {
setupError(1,0,0);
}
console.log (data);
movieSearch(actorId);    
})};
//This function uses the Movie Db output (sent from the movieSearch or SimilarSearch functions) to create a list of movies to use for the comparisons
function makeContestants(data){
console.log (data)
var resultsArrayCount = data.results.length
console.log (resultsArrayCount);
console.log (moviesNumber);
if (resultsArrayCount < moviesCount) {
 moviesCount = resultsArrayCount
console.log (moviesCount)
}
for (var i = 0; i<moviesCount; i++ ){
let dateReleased = data.results[i].release_date;
let dateFormatted=(dateReleased?` (${dateReleased.slice(0,4)})`:"");
console.log (dateReleased, dateFormatted);
movie[i] = data.results[i].title + dateFormatted
poster[i] = data.results[i].poster_path;
overview[i] = data.results[i].overview;
console.log ("We are going to count "+moviesCount+" movies");
console.log (movie[i]);
console.log (poster[i]);
console.log (overview[i])
movieList=movie;
putInfo();
}};
    
//This gets the "actor" from localStorage and starts the correct fetch fuction
var fromStorage = JSON.parse(localStorage.getItem("faceoff"));
console.log(fromStorage)
const { genreNumber, genreText, releaseYear, actor, similarTo, moviesNumber, size } = fromStorage;
moviesCount = moviesNumber
console.log(genreNumber, releaseYear, actor, similarTo, moviesNumber, size, moviesCount);
console.log("made it here", "Size = " + size);
//localStorage.removeItem("faceoff");

if (size <2) {setupError(5,0,0);
}
else if (size==2){
  console.log("made it here")
  if (genreNumber) movieSearch(null);
  if (actor) actorIdSearch();
  if (releaseYear) movieSearch(null);
  if (similarTo) movieIdSearch();
}
else if (size==3) {
  if (genreNumber && releaseYear) movieSearch(null);
  if (genreNumber && actor) actorIdSearch();
  if (releaseYear && actor) actorIdSearch();
  if (similarTo && actor) setupError(3,2,1);
  if (similarTo && genreNumber) setupError(3,2,2);
  if (similarTo && releaseYear) setupError(3,2,3);
}
else if (size==4){
  if (similarTo && genreNumber && actor) setupError(3,3,1);
  if (similarTo && releaseYear && actor) setupError(3,3,2);
  if (similarTo && genreNumber && releaseYear) setupError(3,3,3);
  if (!similarTo) actorIdSearch();
}
else if (size>=5) {setupError(3,4);}
//else setupError(5,0)


function formatTitles(data){
var localFace =JSON.parse(localStorage.getItem("faceoff"));
console.log(localFace);
actor = preActor.actor
console.log(actor)
console.log(data)
searchActor(actor);
console.log (movie);
console.log (poster);
console.log (overview);
console.log (data);
}

function putInfo(){
if (moviesCount==1){
movieTitle1.textContent = movie[0]
movieOverview1.textContent = overview[0]
movieImg1.src = (poster[0]?posterLink+poster[0]:"../assets/no-poster.jpg");
movieImg1.alt = (poster[0]?movie[0]+" movie poster":"No Poster Available");
container.setAttribute("style","visibility:visible");
button2.setAttribute("style","visibility:hidden");
movieInfo2.setAttribute("style","visibility:hidden");
movieImg2.setAttribute("style","visibility:hidden");
}else{
movieTitle1.textContent = movie[0]
movieOverview1.textContent = overview[0]
movieImg1.src = (poster[0]?posterLink+poster[0]:"../assets/no-poster.jpg");
movieImg1.alt = (poster[0]?movie[0]+" movie poster":"No Poster Available");
movieTitle2.textContent = movie[1]
movieOverview2.textContent = overview[1]
movieImg2.src = (poster[1]?posterLink+poster[1]:"../assets/no-poster.jpg");
movieImg2.alt = (poster[1]?movie[1]+" movie poster":"No Poster Available");
container.setAttribute("style","visibility:visible");
}}

//Left button (button 1) event listener, replaces losing movie and saves winning movie.
voteButton1.addEventListener('click', function() {
  console.log('Button 1 clicked!');
  LastWinningMovie = movieTitle1.innerHTML;
  console.log (currentMovieIndex, moviesCount)
  if (currentMovieIndex < moviesCount) {
    console.log("currentMovieIndex smaller");
    updateMovies(1);
    currentMovieIndex++;
  } else {
    console.log(LastWinningMovie);
    var winner = LastWinningMovie;
    console.log (winner);
    setupWinner(winner);
  }
});
//Right button (button 2) event listener, replaces losing movie and saves winning movie.
voteButton2.addEventListener('click', function() {
  console.log('Button 2 clicked!');
  LastWinningMovie = movieTitle2.innerHTML;
  if (currentMovieIndex < moviesCount) {
    console.log(moviesCount, currentMovieIndex, LastWinningMovie);
    updateMovies(2);
    currentMovieIndex++;
  } else {
   var winner = LastWinningMovie;
   console.log (winner)
   setupWinner(winner);
  }});

function updateMovies(winningButton) {
  if (winningButton === 1) {
    movieTitle2.textContent = movieList[currentMovieIndex];
    movieOverview2.textContent = overview[currentMovieIndex];
    movieImg2.alt =(poster[currentMovieIndex]?movieList[currentMovieIndex]+" movie poster":"Poster not Available");
    movieImg2.src=(poster[currentMovieIndex]?posterLink + poster[currentMovieIndex]:"../assets/no-poster.jpg");
   }else{
    movieTitle1.textContent = movieList[currentMovieIndex];
    movieOverview1.textContent = overview[currentMovieIndex];
    movieImg1.alt =(poster[currentMovieIndex]?movieList[currentMovieIndex]+" movie poster":"Poster not Available");
    movieImg1.src =(poster[currentMovieIndex]?posterLink + poster[currentMovieIndex]:"../assets/no-poster.jpg");
  }};