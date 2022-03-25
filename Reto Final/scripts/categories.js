window.onload = function() {  
    let btn_menu = document.querySelector('.btn_menu') 
    if (btn_menu) { 
        btn_menu.addEventListener('click', () => { 
            let menu_items = document.querySelector('.menu_items') 
            menu_items.classList.toggle('show')//Si el elemento tiene la clase se la va a quitar, de lo contrario la agrega
        }) 
    } 
}


//http://localhost:4000/frutas
//http://localhost:4000/vegetales

import  {mostrar} from '../scripts/script.js'
// data.forEach(function() {
//     console.log(this.precio);
// })

