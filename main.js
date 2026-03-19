
const markALL = document.querySelector('#mark-all');
const numeroElemento = document.querySelector('#numero');
const posts = document.querySelectorAll('.post');

posts.forEach(post  =>{
    post.addEventListener('click', ()=>{
        post.querySelector('.status'). classList.remove('not-read')

        updateNotifications()
    })
})

markALL.addEventListener('click', ()=>{
    const notREadElements = document.querySelectorAll('.not-read');


    notREadElements.forEach(notREadElements => {
        notREadElements.classList.remove('not-read')
    })

    updateNotifications()
})

const updateNotifications = () =>{
    const notREadElementsActual = document.querySelectorAll('.not-read');
    numeroElemento.innerText =notREadElementsActual.length;
}