

var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
	pic: 'https://i.imgur.com/OXy5eZj.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
	pic: 'http://i.imgur.com/FqUk8jU.jpg'
  },
  {
    id: 3,
    title: 'Matrix',
    desc: 'Historia człowieka, który rzucił narkotyki, ustabilizował się i znalazł pracę',
	pic: 'https://i.imgur.com/mqLGzs7.jpg'
  },
  {
	id: 4,
	title: 'Władca Pierścieni',
	desc: 'Film jak książka, tylko inny',
	pic: 'http://i.imgur.com/lkEvk.jpg'
  }
];
var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
	  React.createElement('img', {src: movie.pic})
    );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );
 
 ReactDOM.render(element, document.getElementById('app'));