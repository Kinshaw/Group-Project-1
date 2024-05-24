// dynamically make 5 cards to hold movies
// create 5 temp movie objects

const movieList = [];

const movie = {
    title: '',
    description: '',
    rating: ''
}

const wizardOfOz = {movie};
const aliceInTheWonderland = {movie};
const lionKing = {movie};
const theGreatestShowman = {movie};
const theFlash = {movie};

wizardOfOz.title = 'wizard of oz';
wizardOfOz.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
wizardOfOz.rating = '7';
movieList.push(wizardOfOz);

theFlash.title = 'The Flash';
theFlash.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
theFlash.rating = '10';
movieList.push(theFlash);

theGreatestShowman.title = 'The greatest showman';
theGreatestShowman.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
theGreatestShowman.rating = '9';
movieList.push(theGreatestShowman);

lionKing.title = 'lion king';
lionKing.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
lionKing.rating = '6';
movieList.push(lionKing);

aliceInTheWonderland.title = 'Alice in the wonderland';
aliceInTheWonderland.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
aliceInTheWonderland.rating = '3';
movieList.push(aliceInTheWonderland);

const movieCardArea = $('#movieCardArea');
function displayMovieCards(movie) {
    
    const movieCardEl = $('<div>').addClass('movieCard card-body col-2 mx-2 bg-dark text-white align-content-end').attr('style', 'min-height: 125px');
    const movieCardBody = $('<div>').addClass('movieCard card-text');
    const movieCardTitle = $('<h5>').addClass('movieCard card-title user-select-none').text(movie.title);

    movieCardEl.attr('id', movie.title);
    movieCardBody.attr('id',  movie.title);
    movieCardTitle.attr('id',  movie.title);

    movieCardEl.append(movieCardBody, movieCardTitle);
    movieCardArea.append(movieCardEl);
}

function createMovieCards() {
    for (let movie of movieList) {      
        displayMovieCards(movie);
    }
}

createMovieCards();


$('.movieCard').click(function(event){
    const movieDetailArea = $('#movieCardDetails');
    movieDetailArea.empty();
    for (let movies of movieList) {
        if(movies.title === event.target.id) {             
            const movieTitle = $('<h2>').text(movies.title).addClass('my-2');
            const movieDescription = $('<p>').text(movies.description);
            movieDetailArea.append(movieTitle, movieDescription);
        }
    }    
})

//Search filters stored in array
const inputList = $('.form-check-input');
const searchFilters = [];

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

//autocomplete for search which will use a fetch function to get all the movies names
$( function() {
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  } );

