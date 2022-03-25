let formulario = document.querySelector('form'),
nombreTarjeta = document.querySelector('#inputNombre'),
numeroTarjeta = document.getElementById('inputNumero'),
mesExpiracion = document.querySelector('#selectMes'),
yearExpiracion = document.querySelector('#selectYear'),
ccvInput = document.querySelector('#inputCCV')

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    let numero = numeroTarjeta.value
    let nombre = nombreTarjeta.value
    let mes = mesExpiracion.value
    let year = yearExpiracion.value
    let ccv = ccvInput.value
    let tarjeta = {
        numero,
        nombre,
        mes,
        year,
        ccv
    }
    //Insert in localStorage
    let tarjetas = JSON.parse(localStorage.getItem('tarjetas')) || []
    tarjetas.push(tarjeta)
    localStorage.setItem('tarjetas', JSON.stringify(tarjetas))
    //Insert in localStorage
    console.log(tarjeta)
})

// * Select del mes generado dinamicamente.
for(let i = 1; i <= 12; i++){
	let opcion = document.createElement('option');
	opcion.value = i;
	opcion.innerText = i;
	formulario.selectMes.appendChild(opcion);
}

// * Select del año generado dinamicamente.
const yearActual = new Date().getFullYear();
for(let i = yearActual; i <= yearActual + 8; i++){
	let opcion = document.createElement('option');
	opcion.value = i;
	opcion.innerText = i;
	formulario.selectYear.appendChild(opcion);
}

// * Input numero de tarjeta
formulario.inputNumero.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	formulario.inputNumero.value = valorInput
	// Eliminamos espacios en blanco
	.replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '')
	// Ponemos espacio cada cuatro numeros
	.replace(/([0-9]{4})/g, '$1 ')
	// Elimina el ultimo espaciado
	.trim();

})