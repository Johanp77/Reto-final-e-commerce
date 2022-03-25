window.onload = function() {  
    let btn_menu = document.querySelector('.btn_menu') 
    if (btn_menu) { 
        btn_menu.addEventListener('click', () => { 
            let menu_items = document.querySelector('.menu_items') 
            menu_items.classList.toggle('show')//Si el elemento tiene la clase se la va a quitar, de lo contrario la agrega
        }) 
    } 
}


document.addEventListener('DOMContentLoaded', () => {
    async function getData() {
        let resp = await fetch("http://localhost:4000/vegetales");
        let data = await resp.json();
            imprimir(data)
            console.log(data);
    }
    getData()
})

function imprimir(data) {
    let contenedor = document.getElementById('productos')
    data.forEach(tarjetas => {
        let {nombre, imagen, precio, id} = tarjetas
        contenedor.innerHTML += `
        <div class="cards_fruits">
        <img width="250px" src="${imagen}" alt="${nombre}" class="cardImg">
        <h3 id="${nombre}">${nombre}</h3>
        <p id="${precio}"> precio: $${precio}</p>
        <button id="${id}" class="cardBtn">Agregar al carrito</button>
        </div>
        `
    })
}

let frutas = document.getElementById('frutas')

frutas.addEventListener('click', () => {

        async function getData() {
            let resp = await fetch("http://localhost:4000/frutas");
            let data = await resp.json();
             imprimir2(data)
               console.log(data);
        }
        getData()
        
    })
    
    function imprimir2(data) {
        let contenedor = document.getElementById('productos')
                    contenedor.innerHTML = ``
        data.forEach(tarjetas => {

            let {nombre, imagen, precio, id} = tarjetas

            contenedor.innerHTML += `
            <div class="cards_fruits">
            <img width="250px" src="${imagen}" alt="${nombre}" class="cardImg">
            <h3 id="${nombre}">${nombre}</h3>
            <p id="${precio}"> precio: $${precio}</p>
            <button id="${id}" class="cardBtn">Agregar al carrito</button>
            </div>
            `
        })
    }
