window.onload = function () {
    let btn_menu = document.querySelector('.btn_menu')
    if (btn_menu) {
        btn_menu.addEventListener('click', () => {
            let menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle('show')//Si el elemento tiene la clase se la va a quitar, de lo contrario la agrega
        })
    }
}


document.addEventListener("DOMContentLoaded", () => {
    async function getData() {
        let resp = await fetch("http://localhost:4000/frutas");
        let data = await resp.json();
        imprimir(data)
        console.log(data);
    }
    getData()
})

function imprimir(data) {
    let contenedor = document.getElementById('productos')
    data.forEach(tarjetas => {
        let { nombre, imagen, precio, id } = tarjetas
        contenedor.innerHTML += `
        <div class="cards_fruits">
        <img id="${id}" class="img_description" width="250px" src="${imagen}" alt="${nombre}" class="cardImg">
        <h3 id="${nombre}">${nombre}</h3>
        <p id="${precio}"> precio: $${precio}</p>
        <button id="${id}" class="cardBtn">Agregar al carrito</button>
        </div>
        `
    })

    const boton = document.querySelectorAll('.cardBtn')[0],
        boton2 = document.querySelectorAll('.cardBtn')[1],
        boton3 = document.querySelectorAll('.cardBtn')[2]
    boton2.addEventListener('click', () => {
        console.log('hola')
    })
        const img = document.querySelectorAll('.img_description')
        img.addEventListener('click', function(e)  {
            console.log(e.target.id)
            console.log('click')
        })

    /*
            let boton = document.querySelectorAll(".cardBtn");
          let carrito = [];
          let tbody = document.querySelector(".tbody");
    
          boton.forEach((b) => {
            b.addEventListener("click", addCarritoItem)
            console.log("click")
        });
    
    
          function addCarritoItem(e) {
            const boton = e.target;
            const item = boton.closest("#padre");
            const itemTitle = item.querySelector("#nombre").textContent;
            const itemprice = item.querySelector("#precio").textContent;
            const itemImg = item.querySelector(".imagen").src;
    
            const newItem = {
              title: itemTitle,
              precio: itemprice,
              img: itemImg,
              cantidad: 1,
            };
            addItemCarrito(newItem);
          }*/


    /*
    let boton_pago = document.querySelectorAll('cardBtn')
    boton_pago.forEach(boton => {
        boton.addEventListener('click', () => {
            let id = boton.id
            let resp = fetch(`http://localhost:4000/frutas/${id}`)
            resp.then(response => response.json())
                .then(data => {
                    let {nombre, imagen, precio, id} = data
                    let producto = {
                        nombre,
                        imagen,
                        precio,
                        id
                    }
                    let productos = JSON.parse(localStorage.getItem('productos')) || []
                    productos.push(producto)
                    localStorage.setItem('productos', JSON.stringify(productos))
                })
        })
    })
    */
}

let verduras = document.getElementById('verduras')

verduras.addEventListener('click', () => {

    async function getData() {
        let resp = await fetch("http://localhost:4000/vegetales");
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
        let { nombre, imagen, precio, id } = tarjetas
        let producto = document.createElement('producto')
        producto.innerHTML += `<div class="cards_fruits">
            <img width="250px" src="${imagen}" alt="${nombre}" class="cardImg">
            <h3 id="${nombre}">${nombre}</h3>
            <p id="${precio}"> precio: $${precio}</p>
            <button id="${id}" class="cardBtn">Agregar al carrito</button>
            </div>`
        contenedor.appendChild(producto)
    })
}