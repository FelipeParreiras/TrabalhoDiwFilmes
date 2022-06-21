const queryString = window.location.search;
const main = document.getElementById('main')
console.log(queryString);
var splitId = queryString.split('=')
var validID = splitId[1]
const api_k = "api_key=91d20efec0eddac32ed5d132ce70e301"
const baseUrl = "https://api.themoviedb.org/3/"
const imageUr = "https://image.tmdb.org/t/p/w500"

const move = baseUrl + 'movie/' + validID + '?' + api_k + '&language=pt-BR'
console.log(validID)

function getMoves(url){
    fetch(url).then( res => res.json()).then(data => {
        console.log(data);
       showDetails(data)
    })
}

function showDetails(data){
    main.innerHTML = ''
   
        const container = document.createElement('div')
        container.classList.add('container')
        container.innerHTML =`
        <div class="movie">
        <img src="${imageUr+data.poster_path}" alt="asdf" class="mImg">
        <div class="article">
            <h1>${data.title}</h1>
            <div class="info">
                <span>Data de lançamento: ${data.release_date}</span>
                <span>Lingua : ${data.original_language}</span>
                <span>Nota: ${data.vote_average}</span>
                <p>${data.overview}</p>
            </div>
        </div>
    </div>
        `
        main.appendChild(container)
    
}

window.onload = () =>{
    getMoves(move)
}
