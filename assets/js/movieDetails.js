//global variable
var clickedMovieTitle = sessionStorage.getItem('clickedMovieTitle');
const movieDetails = JSON.parse(sessionStorage.getItem('movieDetails'));

//Creating outer div
var divMovieDetail = document.createElement('div');
divMovieDetail.className = "detailWrapper";

//Creating header
var h2 = document.createElement('h2');
var movieTitle = document.createTextNode('Details of ' + clickedMovieTitle);
h2.appendChild(movieTitle);
divMovieDetail.appendChild(h2);

//Creating body
var div = document.createElement('div');
div.className = "bigCard";
//Creating image
var imgMoviePoster = document.createElement('img');
imgMoviePoster.setAttribute("src", movieDetails.Poster);
div.appendChild(imgMoviePoster);

//Details div
var divInfo = document.createElement('div');
divInfo.className = "card_details";
var divImage = document.createElement('div');
var divTitle = document.createElement('div');
var divYear = document.createElement('div');
var divDirector = document.createElement('div');
var divActors = document.createElement('div');
var divPlot = document.createElement('div');
var divRatings = document.createElement('div');

var txtTitle = document.createTextNode("Title: " + movieDetails.Title);
var txtYear = document.createTextNode("Year: " + movieDetails.Year);
var txDirector = document.createTextNode("Director: " + movieDetails.Director);
var txtActors = document.createTextNode("Actors: " + movieDetails.Actors);
var txtPlot = document.createTextNode("Plot: " + movieDetails.Plot);
if (movieDetails.Ratings[0] != null) {
    var imdbRating = document.createTextNode("IMDB Rating: " + movieDetails.Ratings[0].Value + " ");
}
if (movieDetails.Ratings[1] != null) {
    var rtRating = document.createTextNode("Rotten Tomatoes Rating: " + movieDetails.Ratings[1].Value + " ");
}
if (movieDetails.Ratings[2] != null) {
    var mcRating = document.createTextNode("Metacritic Rating: " + movieDetails.Ratings[2].Value + " ");
}


divTitle.appendChild(txtTitle);
divYear.appendChild(txtYear);
divDirector.appendChild(txDirector);
divActors.appendChild(txtActors);
divPlot.appendChild(txtPlot);
divRatings.append(imdbRating);
divRatings.append(rtRating);
divRatings.append(mcRating);

divInfo.appendChild(divTitle);
divInfo.appendChild(divYear);
divInfo.appendChild(divDirector);
divInfo.appendChild(divActors);
divInfo.appendChild(divPlot);
divInfo.appendChild(divRatings);

div.appendChild(divInfo);

divMovieDetail.appendChild(div);


function loadMovieDetailTable() {
    document.getElementById('movieDetails_table').appendChild(divMovieDetail);
}
