
document.getElementById("sortearBotao").addEventListener("click", sortearFilme);

function sortearFilme() {
        const numeroAleatorio = Math.floor(Math.random() * 1025 ) + 1;
        const url = 'https://api.themoviedb.org/3/movie/popular?api_key=32d2cd562a379412cff7c69deca01217&language=pt-BR&page=' + numeroAleatorio;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const urlImagem = "https://image.tmdb.org/t/p/w500" + data.results[0].poster_path;

                document.getElementById('cartaz').src = urlImagem;

                document.getElementById('tituloFilme').innerHTML = data.results[0].title;

                document.getElementById('direcaoFilme').innerHTML = data.results[0].overview;

                document.getElementById('anoFilme').innerHTML = data.results[0].release_date;
            })
            .catch(error => alert('Não é possível carregar os dados'))
    }
