const api_k = "api_key=a6d4e52aafe0ed88510a6ade33c108c4"
const baseUrl = "https://api.themoviedb.org/3/"
const popular = baseUrl + 'discover/movie?sort_by=popularity.desc&' + api_k + '&language=pt-BR'
const imageUr = "https://image.tmdb.org/t/p/w500"
const listaFilmes = document.getElementById('listaFilmes')

function pesquisar(){
    const pesquisa = document.getElementById('pesquisa').value
    
    console.log(pesquisa)
    url = baseUrl + 'search/movie?' + api_k + '&query=' + pesquisa
    fetch(url).then( res => res.json()).then(data => {
        console.log(data);
        if(data.errors || data.results == ""){
            alert('Preencha o Campo de Pesquisa')
            window.location.href = './index.html'
        }
        showData(data.results)
    })
}
function showData(data){
    listaFilmes.innerHTML = ''
    data.forEach(element => {
        const container = document.createElement('div')
        container.classList.add('container')
        container.innerHTML =`
        <div class="movie" onclick="detalhes(${element.id})">
        <img src="${imageUr + element.poster_path}" alt="asdf" class="mImg">
        </div>
    </div>
        `
        listaFilmes.appendChild(container)
    });
}
function detalhes(id){
    console.log(id)
    window.location.href = `../Detalhe/index.html?id=${id}`
}