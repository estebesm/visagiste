import {closeFeedback, openFeedback} from "./feedback.js";
import {openMain} from "./main.js";

const menu = document.querySelector('header nav')

export const isHeaderMenuOpened = () => {
    return menu.classList.contains('active')
}

export const openHeaderMenu = () => {
    if(!isHeaderMenuOpened()) {
        document.body.style.overflow = 'hidden'
        menu.classList.add('active')
    }
}

export const closeHeaderMenu = () => {
    document.body.style.overflow = 'visible'
    menu.classList.remove('active')

}

export const header = () => {

    // document.querySelector('.header__nav-item:last-child').addEventListener('click', openFeedback)
    // document.querySelector('.header__nav-item').addEventListener('click', closeFeedback)
}
