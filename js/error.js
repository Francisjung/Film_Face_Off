var fromStorage = JSON.parse(localStorage.getItem("error"));
const { code1, code2, code3 } = fromStorage;
fromStorage = JSON.parse(localStorage.getItem("faceoff"));
const { genreNumber, genreText, releaseYear, actor, similarTo, moviesNumber, size } = fromStorage;
console.log (code1, code2, code3, genreNumber, genreText, releaseYear, actor, similarTo, moviesNumber, size, );
if (genreText) var genreT = genreText.toLowerCase()
console.log (genreT)
localStorage.removeItem("faceoff");
localStorage.removeItem("error")
var errorText = document.querySelector(".errorText")
const error1 = `Sorry, but "${actor}" isn't an actor. Please check your spelling and try again.` 
const error2 = `Sorry, but "${similarTo}" isn't a movie. Please check your spelling and try again.`
const error3 = `Sorry, you can only search for movies similar to "${similarTo}"  when you search for it seperate from all the preceding parameters.  If you intend to search for movies similar to "${similarTo}" then leave "Has the Following Actor or Actress" blank.  If you intend to search for movies with ${actor} then leave "Similar to Movie Below" blank.<br><br> Finally, when using "Similar to Movie Below", TMDB warns: This method only looks for other items based on genres and plot keywords. As such, the results found here are not always going to be 100%. Use it with that in mind.`
const error4 = `Sorry, you can only search for movies similar to "${similarTo}"  when you search for it seperate from all the preceding parameters.  If you intend to search for movies similar to "${similarTo}" then leave "Movie's Genre" blank.  If you intend to search for ${genreT} movies then leave "Similar to Movie Below" blank.<br><br> Finally, when using "Similar to Movie Below", TMDB warns: This method only looks for other items based on genres and plot keywords. As such, the results found here are not always going to be 100%. Use it with that in mind.`
const error5 = `Sorry, you can only search for movies similar to "${similarTo}"  when you search for it seperate from all the preceding parameters.  If you intend to search for movies similar to "${similarTo}" then leave "Year Movie Released" blank.  If you intend to search for movies released in ${releaseYear} then leave "Similar to Movie Below" blank.<br><br> Finally, when using "Similar to Movie Below", TMDB warns: This method only looks for other items based on genres and plot keywords. As such, the results found here are not always going to be 100%. Use it with that in mind.`
const error6 = `Sorry, you can only search for movies similar to "${similarTo}"  when you search for it seperate from all the preceding parameters.  If you intend to search for movies similar to "${similarTo}" then leave "Movie's Genre" and "Has the Following Actor or Actress" blank.  If you intend to search for ${genreT} movies with ${actor} then leave "Similar to Movie Below" blank.<br><br> Finally, when using "Similar to Movie Below", TMDB warns: This method only looks for other items based on genres and plot keywords. As such, the results found here are not always going to be 100%. Use it with that in mind.`
const error7 = `Sorry, you can only search for movies similar to "${similarTo}"  when you search for it seperate from all the preceding parameters.  If you intend to search for movies similar to "${similarTo}" then leave "Year Movie Released" and "Has the Following Actor or Actress" blank.  If you intend to search for movies made in ${releaseYear} with ${actor} then leave "Similar to Movie Below" blank.<br><br> Finally, when using "Similar to Movie Below", TMDB warns: This method only looks for other items based on genres and plot keywords. As such, the results found here are not always going to be 100%. Use it with that in mind.`
const error8 = `Sorry, you can only search for movies similar to "${similarTo}"  when you search for it seperate from all the preceding parameters.  If you intend to search for movies similar to "${similarTo}" then leave "Movie's Genre" and "Year Movie Released" blank.  If you intend to search for ${genreT} movies made in ${releaseYear} then leave "Similar to Movie Below" blank.<br><br> Finally, when using "Similar to Movie Below", TMDB warns: This method only looks for other items based on genres and plot keywords. As such, the results found here are not always going to be 100%. Use it with that in mind.`
const error9 = `Sorry, you can only search for movies similar to "${similarTo}"  when you search for it seperate from all the preceding parameters.  If you intend to search for movies similar to "${similarTo}" then leave the other form entries blank.  If you intend to search for ${genreT} movies with ${actor} relased in ${releaseYear} then leave "Similar to Movie Below" blank.<br><br> Finally, when using "Similar to Movie Below", TMDB warns: This method only looks for other items based on genres and plot keywords. As such, the results found here are not always going to be 100%. Use it with that in mind.`
const error10 = `Sorry, no movies matched your search request.  This is likely because you tried to search for movies using too many parameters.  I couldn't find any ${genreT} movies made in ${releaseYear} with ${actor}.  Please remove or change one or two of these parameters and try again.`
const error11 = `Sorry, no movies matched your search request.  This is likely because you tried to search for movies using too many parameters.  I couldn't find any ${genreT} movies made in ${releaseYear}.  Please remove or change one or two of these parameters and try again.`
const error12 = `Sorry, no movies matched your search request.  This is likely because you tried to search for movies using too many parameters.  I couldn't find any movies made in ${releaseYear} with ${actor}.  Please remove or change one or two of these parameters and try again.`
const error13 = `Sorry, no movies matched your search request.  This is likely because you tried to search for movies using too many parameters.  I couldn't find any ${genreT} movies with ${actor}.  Please remove or change one of these parameters and try again.`
const error14 = "You need to fill out at least one of the blanks if you want to search movies!  Please try again."

if (code1==1) errorText.innerHTML = error1;
if (code1==2) errorText.innerHTML = error2; 
if (code1==5) errorText.innerHTML = error14; 
if (code1==3) {
  if (code2==4) errorText.innerHTML = error9;
  if (code2==2 && code3==1) errorText.innerHTML = error3;
  if (code2==2 && code3==2) errorText.innerHTML = error4;
  if (code2==2 && code3==3) errorText.innerHTML = error5;
  if (code2==3 && code3==1) errorText.innerHTML = error6;
  if (code2==3 && code3==2) errorText.innerHTML = error7;
  if (code2==3 && code3==3) errorText.innerHTML = error8;
};
if (code1==4) {
  if (actor && genreText && releaseYear) errorText.innerHTML = error10;
  if (genreText && releaseYear) errorText.innerHTML = error11;
  if (actor && releaseYear) errorText.innerHTML = error12;
  if (actor && genreNumber) errorText.innerHTML = error13;
}
