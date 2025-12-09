const button = document.getElementById('btn')

const jokeText = document.getElementById('joke')

const API_URL = 'https://official-joke-api.appspot.com/jokes/random'

const loadJoke = async () => {
    jokeText.textContent = 'Loading...'

    const response = await fetch(API_URL)

    const data = await response.json()

    console.log(data)

    jokeText.textContent = data.setup + "" + data.punchline
}
button.addEventListener('click', loadJoke)