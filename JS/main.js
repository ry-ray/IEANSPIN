function scrollKnow(){
  let know = document.querySelector('.main__content-know')
  know.scrollIntoView({
    block: 'start',
    behavior: "smooth"
  })
}

function scrollInfo(){
  let know = document.querySelector('.main__content-info')
  know.scrollIntoView({
    block: 'start',
    behavior: "smooth"
  })
}

function scrollBlog(){
  let know = document.querySelector('.main__content-blog')
  know.scrollIntoView({
    block: 'start',
    behavior: "smooth"
  })
}

function scrollContact(){
  let know = document.querySelector('.main__footer')
  know.scrollIntoView({
    block: 'start',
    behavior: "smooth"
  })
}

let knowButton = document.querySelector('.know')
let infoButton = document.querySelector('.info')
let blogButton = document.querySelector('.blog')
let contactButton = document.querySelector('.contact')

knowButton.addEventListener('click', scrollKnow)
infoButton.addEventListener('click', scrollInfo)
blogButton.addEventListener('click', scrollBlog)
contactButton.addEventListener('click', scrollContact)

