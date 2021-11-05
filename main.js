// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro javascript in cui:
// - Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// nome autore,
// foto profilo,
// data,
// testo del post,
// immagine (non tutti i post devono avere una immagine) [quindi gestisco il caso],
// numero di likes.
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
// - Rendiamo il tasto “Mi Piace” cliccabile con incremento del counter dei likes.

// 1) array di oggetti con informazioni: nome autore, foto profilo, data, testo del post, immagine, numero di likes => obj {"nome autore", "foto profilo",...}
// 2)per stampare tutti i post => for (let i = 0; i < post.length; i++) {innerHTML += ....}

const contenitore = document.getElementById("container");

const posts = [
    {
        "nomeAutore": "Daniele Oliva",
        "fotoProfilo": "https://unsplash.it/300/300?image=15",
        "data": "4 mesi fa",
        "testo": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut diam nisl. Sed nec hendrerit augue, ac rutrum nisi.",
        "immagine": "https://unsplash.it/600/300?image=171",
        "likes": 10
    },
    {
        "nomeAutore": "Daniele Oliva",
        "fotoProfilo": "https://unsplash.it/300/300?image=15",
        "data": "4 mesi fa",
        "testo": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut diam nisl. Sed nec hendrerit augue, ac rutrum nisi.",
        "immagine": "https://unsplash.it/600/300?image=171",
        "likes": 10
    },
    {
        "nomeAutore": "Daniele Oliva",
        "fotoProfilo": "https://unsplash.it/300/300?image=15",
        "data": "4 mesi fa",
        "testo": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut diam nisl. Sed nec hendrerit augue, ac rutrum nisi.",
        "immagine": "https://unsplash.it/600/300?image=171",
        "likes": 10
    },
    {
        "nomeAutore": "Daniele Oliva",
        "fotoProfilo": "https://unsplash.it/300/300?image=15",
        "data": "4 mesi fa",
        "testo": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut diam nisl. Sed nec hendrerit augue, ac rutrum nisi.",
        "immagine": "https://unsplash.it/600/300?image=171",
        "likes": 10
    },{
        "nomeAutore": "Daniele Oliva",
        "fotoProfilo": "https://unsplash.it/300/300?image=15",
        "data": "4 mesi fa",
        "testo": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut diam nisl. Sed nec hendrerit augue, ac rutrum nisi.",
        "immagine": "https://unsplash.it/600/300?image=171",
        "likes": 10
    }
]

for ( let i = 0; i < posts.length; i++) {
    const singoloPost = posts[i];
    const {nomeAutore, fotoProfilo, data, testo, immagine, likes} = singoloPost;

    contenitore.innerHTML += `
    <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${fotoProfilo}" alt="${nomeAutore}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${nomeAutore}</div>
                        <div class="post-meta__time">${data}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${testo}</div>
            <div class="post__image">
                <img src="${immagine}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="${i}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${i}" class="js-likes-counter">${likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
    `
}


const likeButton = document.getElementsByClassName("js-like-button");
const likeCounter = document.getElementsByClassName("js-likes-counter");
console.log(likeButton);

for (let i = 0; i < posts.length; i++) {
    likeButton[i].addEventListener("click", function() {
        this.classList.add("like-button--liked");
        likeCounter[i].innerHTML = posts[i].likes + 1;
    });
}

