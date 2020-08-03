let formDiv = document.querySelectorAll('#formDiv')
formDiv = formDiv[0]

let tpl = `
<form id="form">
<input type="text" name="item" id="itemIng" placeholder="Ingrese Item" id="item" class="field" class="input">
<button type="button" onclick="agregarItem()">Agregar</button>
<br>
</form> 
`
formDiv.innerHTML = tpl
// let item = ""
let editando = false
let agregarItem = function() {
	let input = document.querySelectorAll('#itemIng')
	input = input [0]
	let li = ` 			
			<li>
				<span>${input.value}</span>
				<button type="button" onclick="editarItem('${input.value}')">Editar</button> 
				<button type="button" onclick="eliminarItem('${input.value}')">Eliminar</button>
			</li>
	`
	if (editando) {
		let listaIngresada = document.querySelectorAll ('li')
		for (let i = listaIngresada.length - 1; i >= 0; i--) {
			let itemLista = listaIngresada[i];
			if (itemLista.firstElementChild.innerText == input.value){
				itemLista.firstElementChild.innerText = input.value
			}
		console.log (itemLista.firstElementChild.innerText)}
		editando = false
	} else {
		ul.innerHTML += li;}
	

}

let eliminarItem = function(item) {
	let listaIngresada = document.querySelectorAll ('li')
	for (let i = listaIngresada.length - 1; i >= 0; i--) {
		let itemLista = listaIngresada[i];
		if(itemLista.firstElementChild.innerText == item){
			listaIngresada[i].outerHTML = ''
		}
	}
}

let editarItem = function(item) {

	let listaIngresada = document.querySelectorAll ('li')
	for (let i = listaIngresada.length - 1; i >= 0; i--) {
		let itemLista = listaIngresada[i];
		if(itemLista.firstElementChild.innerText == item){
		 itemIng.value= item
		 editando = true
		}
	}

}
        
      


