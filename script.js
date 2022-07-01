const API_KEY = '87a3366310c16f346c7552ef00e48e2f'
const DOMAIN = 'https://api.themoviedb.org/3'
const IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/original'

const button = document.querySelector('button')
const input = document.querySelector('input')
const section = document.querySelector('section')

const renderList = (movies) => {
movies.forEach((movie)=> {
    let div =document.createElement('div')
    div.innerHTML = `<img src=${IMAGE_BASE_PATH + movie.poster_path} />`
    let h2 = document.createElement('h2')
    h2.innerText = movie.original_title

    section.appendChild(div)
    section.appendChild(h2)
})
}

button.addEventListener('click', async () => {
    let movieTitle = input.value
    let response= await axios.get(`${DOMAIN}/search/movie?query=${movieTitle}&api_key=${API_KEY}`)
    //console.log(response.data.results)

    renderList(response.data.results)
})

//


