class Menu {
    constructor(element){
        this.element = element
        this.active = false
    }

    activate(){
        this.element.style.boxShadow = '1px 1px 30px rgba(0,0,0,.15)'
        this.element.style.borderBottom = '1px solid rgba(0,0,0,.1)'
    }

    deactivate(){
        this.element.style.boxShadow = ''
        this.element.style.borderBottom = ''
    }

}
let html = document.querySelector('html')
let nav = document.querySelector('#top')
let topMenu = new Menu(nav);
let logo = document.querySelector('.logo-text')

window.addEventListener('scroll', (e) => {
    if(html.scrollTop > 10){
        topMenu.activate()
    }else {
        topMenu.deactivate()
    }

})

logo.addEventListener('click', () => {
    window.location = '/'
})


var div = document.querySelector('#modal');
var burger = document.querySelector('#burger');
let close = document.querySelector('#close-menu');

close.addEventListener('click', () => {
    div.style.display = 'none'
})

burger.addEventListener('click', () => {
    div.style.display = 'block' 
    div.style.backgroundColor = '#000'
})
