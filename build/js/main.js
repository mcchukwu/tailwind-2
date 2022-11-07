const menu_btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

menu_btn.addEventListener('click', () =>{
    menu_btn.classList.toggle('open')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')
})