/*captura lista no código HTML*/
const containerVideos = document.querySelector(".videos__container");

/*método para buscar na API de vídeos: fetch - retorna uma promisse(função assíncrona) - no console o valor dessa promise está, nesse projeo, como fullfield*/
const api = fetch("http://localhost:3000/videos")
/* 1) quando receber a resposta da busca, transformada em json: */
.then(res => res.json())
/* 2) Então: executar o que está dentro do then*/
.then((videos) =>
    videos.forEach((video) => {
        containerVideos.innerHTML += `
        <li class="videos__item">
            <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
            <div class="descricao-video">
                <img class="img-canal" src=${video.imagem} alt="Logo do Canal">
                <h3 class="titulo-video">${video.titulo}</h3>
                <p class="titulo-canal">${video.descricao}</p>
            </div>
        </li>
        `;
    })
)
