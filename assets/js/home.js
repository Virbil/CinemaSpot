
const btnGetMovie = document.getElementById('btnMovieSearch');
var movieResult = "";

//Hook textbox value from HTML
function getMovieTitle() {
    var movieSearch = document.getElementById("txtBoxMovieTitle").value;

    getData(movieSearch);
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

const getData = (movie) => {
    var myMovie = 'http://www.omdbapi.com/?apikey=e41f3e17&s=' + movie;

    sendHttpRequest('GET', myMovie).then(responseData => {
        const jsonResponse = JSON.stringify(responseData);

        sessionStorage.setItem('movies', jsonResponse);
        sessionStorage.setItem('searchedMovieTitle', movie)
        document.location.href = "search.html";

    }).then(err => {
        console.log(err);
    })
}

//Used to trigger event when Enter key is pressed
var keyboardInput = document.getElementById("txtBoxMovieTitle");
keyboardInput.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("btnMovieSearch").click();
    }
});