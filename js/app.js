import {openServices} from "./services.js";
import {openMain} from "./main.js";
import {closeHeaderMenu, isHeaderMenuOpened, openHeaderMenu} from "./header.js";
import {works} from "./works.js";

const services = document.querySelectorAll('.main__services-item')
const main = document.getElementById('header__main-button')
const headerButtons = document.querySelectorAll('.header__nav-item')
const headerBurger = document.querySelector('.header__burger')
const headerCloseBtn = document.querySelector('.header__close-button')
const headerLogo = document.querySelector('.header__logo')
const headerNavLogo = document.querySelector('.header__nav__logo')

function scrollTo(element) {
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: element?.offsetTop
    });
}

function switchPage(btn){
    if(isHeaderMenuOpened()){
        closeHeaderMenu()
    }
    if(!document.getElementById('main__main').classList.contains('opened')){
        openMain()
    }
    if(btn) scrollTo(document.getElementById(`main__${btn.id.split('__')[1].slice(0, -7)}`))
    else scrollTo(document.getElementById(`top`))
}

const app = () => {
    headerButtons.forEach(btn => btn.addEventListener('click',() => switchPage(btn)))
    headerLogo.addEventListener('click', () => switchPage())
    headerNavLogo.addEventListener('click', () => switchPage())
    main.addEventListener('click', openMain)
    services.forEach((item, index) => {
        item.addEventListener('click', () => {
            openServices(index)
        })
    })
    headerBurger.addEventListener('click', openHeaderMenu)
    headerCloseBtn.addEventListener('click', closeHeaderMenu)
    works()
}

app()