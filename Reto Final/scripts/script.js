window.onload = function () {
    let btn_menu = document.querySelector('.btn_menu')
    if (btn_menu) {
        btn_menu.addEventListener('click', () => {
            let menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle('show')//Si el elemento tiene la clase se la va a quitar, de lo contrario la agrega
        })
    }
}
let productos = document.getElementById('productos')

let frutas = document.getElementById('frutas')
let verduras = document.getElementById('verduras')


export function mostrar() {
    frutas.classList.toggle('show')
    verduras.classList.toggle('show')
}

frutas.addEventListener('click', () => {
    mostrar()
    fetch('http://localhost:4000/frutas')
        .then(response => response.json())
        .then(data => console.log(data))
})
