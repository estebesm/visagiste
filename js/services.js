import {closeMain} from "./main.js";

const services = document.querySelector('.services')

export const openServices = (index) => {
    closeMain()
    services.classList.add('opened')
    document.getElementById(`services__item-${index}`).style.display = 'flex'
    window.scrollTo({top: 0, behavior: 'smooth'})
}

export const closeServices = () => {
    // document.querySelectorAll('.services__item').forEach(item => item.style.display = 'none')
    // services.classList.remove('opened')
}