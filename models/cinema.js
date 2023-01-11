const Cinema = function (films) {
  this.films = films;
};

// Cinema.prototype.getFilmTitles = function(){
// let filmTitles = [];
// for (const film of this.films){
//   filmTitles.push(film.title)
// };
// return filmTitles;
// };

Cinema.prototype.getFilmTitles = function(){
  return this.films.map(function (film) {
    return film.title
  })
  };

Cinema.prototype.filterByGenre = function(genre) {
  return this.films.filter(function (film) {
    return film.genre === genre;
  })
};

Cinema.prototype.totalRunningTime = function() {
  return this.films.reduce((runningTotal, film) => {
    return runningTotal + film.length
  }, 0);
};


Cinema.prototype.findFilmByTitle = function(title) {
  return this.films.find(film => {
    return film.title === title
  });
};


Cinema.prototype.checkFilmsByYear = function(filmYear) {
  return this.films.some(film => {
    return film.year === filmYear;
  })
};

Cinema.prototype.checkNoFilmsByYear = function(filmYear) {
  return this.films.every(film => {
    return film.year !== filmYear;
  })
};


// Cinema.prototype.checkMinLength = function(length) {
//   return this.films.every(film => {
//     return film.length >= length;
//   })
// };

//short form
Cinema.prototype.checkMinLength = function (length) {
  return this.films.every(film => film.length >= length);
};

// const getEvens = numbers => numbers.filter(number => number % 2 ===0);

// Cinema.prototype.filterByGenre = film => this.films.genre.filter(film => film.genre)

module.exports = Cinema;