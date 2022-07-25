import {closeMain, openMain} from "./main.js";

const services = document.querySelector('.services')

const callButtons = document.querySelectorAll('.call-button')

function scrollTo(element) {
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: element?.offsetTop
    });
}

callButtons.forEach(button => {
    button.addEventListener('click', () => {
        openMain()
        scrollTo(document.getElementById(`main__feedback`))
    })
})

export const openServices = (index) => {
    closeMain()
    services.classList.add('opened')
    document.getElementById(`services__item-${index}`).style.display = 'flex'
    window.scrollTo({top: 0, behavior: 'smooth'})
}

export const closeServices = () => {
    document.querySelectorAll('.services__item').forEach(item => item.style.display = 'none')
    services.classList.remove('opened')
}