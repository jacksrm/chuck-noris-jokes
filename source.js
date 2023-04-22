async function getRandomChuckJoke(category = undefined) {
  try {
    const buffer = await fetch(
      category
        ? `https://api.chucknorris.io/jokes/random?category=${category}`
        : 'https://api.chucknorris.io/jokes/random',
    );
    const response = await buffer.json();

    return response;
  } catch (error) {
    alert(error.message);
  }
}

async function getChuckJokesCategories() {
  try {
    const buffer = await fetch('https://api.chucknorris.io/jokes/categories');
    const response = await buffer.json();

    return response;
  } catch (error) {
    alert(error.message);
  }
}

async function searchChuckJokes(query) {
  try {
    const buffer = await fetch(
      `https://api.chucknorris.io/jokes/search?query=${query}`,
    );
    const response = await buffer.json();

    return response;
  } catch (error) {
    alert(error.message);
  }
}

const body = document.querySelector('body');
const jokeArea = document.getElementById('joke-area');
const randomJokeBtn = document.getElementById('random-joke');
const randomJokeCatBtn = document.getElementById('random-joke-cat');
const categories = document.getElementById('category');
const searchForm = document.getElementById('search-form');

function handleLoadCategories() {
  getChuckJokesCategories().then((response) => {
    response
      .map((category) => {
        const option = document.createElement('option');
        option.setAttribute('value', category);
        option.innerText = category[0].toUpperCase() + category.slice(1);

        return option;
      })
      .forEach((category) => {
        categories.appendChild(category);
      });
  });
}

function handleClickRandomJoke(e) {
  const original = e.target.innerText;
  e.target.innerText = 'loading...';
  e.target.disabled = true;
  getRandomChuckJoke()
    .then((joke) => {
      const quote = document.createElement('blockquote');
      quote.innerText = joke.value;
      jokeArea.innerHTML = '';
      jokeArea.appendChild(quote);
    })
    .finally(() => {
      e.target.innerText = original;
      e.target.disabled = false;
    });
}

function handleClickRandomJokeCat(e) {
  if (!categories.value) return;

  const original = e.target.innerText;
  e.target.innerText = 'loading...';
  e.target.disabled = true;
  getRandomChuckJoke(categories.value)
    .then((joke) => {
      const quote = document.createElement('blockquote');
      quote.innerText = joke.value;
      jokeArea.innerHTML = '';
      jokeArea.appendChild(quote);
    })
    .finally(() => {
      e.target.innerText = original;
      e.target.disabled = false;
    });
}

function handleSearchJoke(e) {
  e.preventDefault();

  const searchTerm = document.getElementById('search-term');
  const searchButton = document.getElementById('search-button');

  if (!searchTerm.value) return;

  const original = searchButton.innerHTML;
  searchButton.innerHTML = '';
  searchButton.innerHTML = 'Loading...';
  searchButton.disabled = true;

  searchChuckJokes(searchTerm.value)
    .then((response) => {
      jokeArea.innerHTML = '';
      response.result
        .map((joke) => {
          const quote = document.createElement('blockquote');
          quote.innerText = joke.value;

          return quote;
        })
        .forEach((quote) => {
          jokeArea.appendChild(quote);
        });
    })
    .finally(() => {
      searchButton.innerHTML = original;
      searchButton.disabled = false;
    });
}

body.onload = handleLoadCategories;
randomJokeBtn.onclick = handleClickRandomJoke;
randomJokeCatBtn.onclick = handleClickRandomJokeCat;
searchForm.onsubmit = handleSearchJoke;
