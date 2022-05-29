const menu = document.querySelector('header nav')

export const isHeaderMenuOpened = () => {
    return menu.classList.contains('active')
}

export const openHeaderMenu = () => {
    if(!isHeaderMenuOpened()) {
        menu.classList.add('active')
    }
}

export const closeHeaderMenu = () => {
    menu.classList.remove('active')
}