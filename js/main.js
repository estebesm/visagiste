import {closeServices} from "./services.js";
import {closeWorks} from "./works.js";
import {closeFeedback} from "./feedback.js";

const main = document.querySelector('main')
const services = document.querySelector('.services')

export const openMain = () => {
    closeServices()
    closeWorks()
    closeFeedback()
    main.classList.add('opened')
    window.scrollTo({top: 0, behavior: 'smooth'})
}

export const closeMain = () => {
    main.classList.remove('opened')
}