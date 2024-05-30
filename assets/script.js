// dynamically make 5 cards to hold movies
// create 5 temp movie objects

// const movieList = [];

// const movie = {
//     title: '',
//     description: '',
//     rating: ''
// }

// const wizardOfOz = {movie};
// const aliceInTheWonderland = {movie};
// const lionKing = {movie};
// const theGreatestShowman = {movie};
// const theFlash = {movie};

// wizardOfOz.title = 'wizard of oz';
// wizardOfOz.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
// wizardOfOz.rating = '7';
// movieList.push(wizardOfOz);

// theFlash.title = 'The Flash';
// theFlash.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
// theFlash.rating = '10';
// movieList.push(theFlash);

// theGreatestShowman.title = 'The greatest showman';
// theGreatestShowman.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
// theGreatestShowman.rating = '9';
// movieList.push(theGreatestShowman);

// lionKing.title = 'lion king';
// lionKing.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
// lionKing.rating = '6';
// movieList.push(lionKing);

// aliceInTheWonderland.title = 'Alice in the wonderland';
// aliceInTheWonderland.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
// aliceInTheWonderland.rating = '3';
// movieList.push(aliceInTheWonderland);

const movieCardArea = $('#movieCardArea');
const inputList = $('.form-check-input');
const searchFilters = [];
const movies = JSON.parse(localStorage.getItem('top100'));
const movieTitles = [];

function displayMovieCards(movie) {
    
    const movieCardEl = $('<div>').addClass('movieCard row col-lg-2 col-md-3 col-sm-4 m-2 align-content-start');
    const movieCardBody = $('<div>').addClass('movieCard justify-content-center card-body bg-dark text-white').attr('style', 'height: 125px');
    const movieCardTitle = $('<h5>').addClass('movieCard card-title user-select-none').text(movie.title);
    movieCardBody.css('background-image', 'url('+movie.image+')');
    movieCardBody.attr('id', movie.title);
    // movieCardBody.attr('id', movie.title);
    // movieCardTitle.attr('alig', movie.title);

    movieCardEl.append(movieCardBody, movieCardTitle);
    movieCardArea.append(movieCardEl);

    $('.movieCard').click(function(event){
        const movieDetailArea = $('#movieCardDetails');
        movieDetailArea.empty();
        for (let movie of movies) {
            if(movie.title === event.target.id) {             
                const movieTitle = $('<h2>').text(movie.title).addClass('my-2');
                const movieDescription = $('<p>').text(movie.description);
                const movieThumbnail = $('<img>').attr('src', movie.image).addClass('thumbnail');
                
                movieDetailArea.append(movieTitle, movieDescription, movieThumbnail);
            }
        }    
    })
}

function createMovieCards() {
    movieCardArea.empty();
    for (let i = 0; i < 5; i++) {    
        displayMovieCards(movies[Math.floor(Math.random() * 100)]);
    }
}

$(document).ready(function(){

    var counter = 0;
    for (myMovie of movies) {
        movieTitles[counter] = myMovie.title;
        counter++;
    }

    createMovieCards();

    $( function() {
        $( function() {
            $( "#tags" ).autocomplete({
              source: movieTitles
            });
          } );
      } );
       
      //randomize 5 movie display based on seach filter
      $('#btn-randomize').click(function(event){
        createMovieCards();
      })

    //Search filters stored in arra
    inputList.click(function(event){
        for(let input of inputList) {
            if (input.id === event.target.id)
                if(input.checked){
                    searchFilters.push(input.id);
                } else {
                    for (let filter of searchFilters){
                        if(filter === input.id) {
                            searchFilters.splice(searchFilters.indexOf(filter), 1);
                        }
                    }
                    
                }
            }
        console.log(searchFilters);
    })
    
})