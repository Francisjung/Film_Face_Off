var genreNumber; //
var subtract = 0;
var year;
var like;
var actor;
var counts;
var saveString = {
  "moviesNumber":6
 }

$(document).foundation();

/*var genres =  {

};*/


//HTTPS Links for API call
var apikey = "0369d0746be36bbf12f206aeb60eac4d";

var posterLink = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2";

var tmdbURL = "https://api.themoviedb.org/3/genre/movie/list?api_key=0369d0746be36bbf12f206aeb60eac4d&language=en-US";

var similarMovie = "https://api.themoviedb.org/3/movie/49519/similar?api_key=0369d0746be36bbf12f206aeb60eac4d&language=en-US&page=1";

var movieList=[];
var genreMovie = "https://api.themoviedb.org/3/discover/movie?api_key="+apikey+"&language=en-US&page=1&include_adult=false&sort_by=popularity.desc&with_genres=16"

//constructors for main page movie preference values
const button = document.querySelector('#button');
const movieGenre = document.getElementById('genre');
const releaseYear = document.getElementById('releaseYear');
const similarTo = document.getElementById('similarTo');
const movieActor = document.getElementById('actor')
const movieCounts = document.getElementById('movieCount');

const voteButton1 = document.getElementById('faceoffButton1');
const voteButton2 = document.getElementById('faceoffButton2');

if (button) {
  button.addEventListener('click', function(event) {
   event.preventDefault();
   
   genre = movieGenre.value;  //this pulls the number (value) of the "Movie's genre" blank
   if (genre) {
    saveString.genreNumber = genre;  //as with all below, this adds "genreNumber":movieGenre.value to the saveString object
    const genreT = movieGenre.options[movieGenre.selectedIndex].text; //this pulls the text value of the "Movie's genre" blank
    saveString.genreText = genreT; 
    subtract = 1;
    console.log (genre, genreT);
   }
   year = releaseYear.value;
   if (year) saveString.releaseYear = year;
  
   actor = movieActor.value;
   if (actor) saveString.actor = actor;
    
   like = similarTo.value;
   if (like)saveString.similarTo = like;
       
   count = movieCounts.value; 
   saveString.moviesNumber = count;
   
   stringSize = Object.keys(saveString).length-subtract
   saveString.size = stringSize;
   console.log(stringSize)

  localStorage.setItem("faceoff", JSON.stringify(saveString));
  console.log (saveString)
   window.location.href = './htmls/faceoff.html';
  })}