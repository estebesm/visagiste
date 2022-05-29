import {closeServices} from "./services.js";

const main = document.querySelector('main')
const services = document.querySelector('.services')

export const openMain = () => {
    closeServices()
    main.classList.add('opened')
    window.scrollTo({top: 0, behavior: 'smooth'})
}

export const closeMain = () => {
    main.classList.remove('opened')
}