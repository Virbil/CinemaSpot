//Add pagination for future:  http://www.omdbapi.com/?s=Batman&page=2


//sessionStorage with keyword: movies set in home.js
var resultData = sessionStorage.getItem('movies');
const movieResults = JSON.parse(resultData);

//Dynamic Table Creation
var divMovie = document.createElement('div');
divMovie.className = "cardContainer";
var h2 = document.createElement('h2');
var movieTitle = document.createTextNode('Results for ' + sessionStorage.getItem('searchedMovieTitle'));
h2.appendChild(movieTitle);


for (var i = 0; i < movieResults.Search.length; i++) {
    var divCard = document.createElement('div');
    divCard.className = "card button";
    divCard.setAttribute("onclick", "loadDetails('" + movieResults.Search[i].Title + "')")
    var imgMoviePoster = document.createElement('img');
    var divTitle = document.createElement('div');
    var divYear = document.createElement('div');

    //Building imgMoviePoster
    imgMoviePoster.setAttribute("src", movieResults.Search[i].Poster);

    //Building divTitle
    var span = document.createElement('span');
    span.className = "link";
    span.textContent = movieResults.Search[i].Title;
    //span.setAttribute("onclick", "loadDetails('" + movieResults.Search[i].Title + "')");

    //Building divYear
    var movieYear = document.createTextNode(movieResults.Search[i].Year);

    divTitle.appendChild(span);
    divYear.appendChild(movieYear);
    divCard.appendChild(imgMoviePoster);
    divCard.appendChild(divTitle);
    divCard.appendChild(divYear);

    divMovie.appendChild(divCard);
}

divMovie.appendChild(divCard);


//Function triggered on load of search.html
function loadMovieTable() {
    document.getElementById('movie_table').appendChild(h2);
    document.getElementById('movie_table').appendChild(divMovie);
}


const sendHttpRequest = (method, url) => {
    const promise = new Promise((resolve, reject) => {
        const movie = new XMLHttpRequest();
        movie.open(method, url);

        movie.responseType = 'json';

        movie.onload = () => {
            if (movie.status >= 400) {
                reject(movie.response);
            } else {
                resolve(movie.response);
            }
        };

        //only reaches error if call fails: network error, etc.
        movie.onerror = () => {
            reject('Something went wrong.');
        }

        movie.send();
    });
    return promise;
};

const loadDetails = (movie) => {
    var myMovie = 'http://www.omdbapi.com/?apikey=e41f3e17&t=' + movie;

    sendHttpRequest('GET', myMovie).then(responseData => {
        const jsonResponse = JSON.stringify(responseData);

        sessionStorage.setItem('movieDetails', jsonResponse);
        sessionStorage.setItem('clickedMovieTitle', movie)
        document.location.href = "movieDetails.html";

    }).then(err => {
        console.log(err);
    })
}