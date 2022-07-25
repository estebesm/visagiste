const mainSection = document.getElementById('main__main')
const worksSection = document.querySelector('.works')
const openButton = document.getElementById('header__works-button')

const imageWrappers = document.querySelectorAll('.works__image-wrapper')
const images = document.querySelectorAll('.works__image-wrapper img')

const contactsSection = document.getElementById('main__contacts')

const openImage = (wrapper) => {
    if(!wrapper.classList.contains('active')) wrapper.classList.add('active')
    document.body.style.overflow = 'hidden'
}
const closeImage = (wrapper) => {
    wrapper.classList.remove('active')
    document.body.style.overflow = 'visible'
}

export const closeWorks = () => {
    // worksSection.classList.remove('opened')
    // contactsSection.style.display = 'block'
    // mainSection.classList.add('opened')
}

export const works = () => {
    // openButton.addEventListener('click', () => {
    //     mainSection.classList.remove('opened')
    //     contactsSection.style.display = 'none'
    //     if(!worksSection.classList.contains('opened')) worksSection.classList.add('opened')
    // })

    imageWrappers.forEach(imageWrapper => imageWrapper.addEventListener('click', () => {
        if(imageWrapper.classList.contains('active'))
            closeImage(imageWrapper)
        else
            openImage(imageWrapper)
    }))
    images.forEach(image => image.addEventListener('click', e => {
        if(image.parentElement.classList.contains('active'))
        e.stopPropagation()
    }))
}