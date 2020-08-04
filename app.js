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
let num		= [0,1,2,3,4,5,6,7,8,9]

// let item = ""
let editando = false
let agregarItem = function() {
	let input = document.querySelectorAll('#itemIng')
	input = input [0] //
	let itemId = ''
	let li = ` 			
			<li>
				<span>${input.value}</span>
				<span style= "display: inline" id= "itemId"> aca deberia ir itemId: ${itemId}</span>
				<button type="button" onclick="editarItem('${input.value}')">Editar</button> 
				<button type="button" onclick="eliminarItem('${input.value}')">Eliminar</button>
			</li>
	`
	if (!editando) {
		itemIng.value= ""
		//Generando un itemId unico para el item ingresado
		let itemIdV = 4
		for (let i = 1; i < itemIdV +1; i++){
			for (let i = 1; i < 5; i++) {
				//Elegir un indice aleatorio del diccionario
				let rand = Math.floor( Math.random() * num.length)
				itemId = itemId + rand   
			}
			if (i < itemIdV ) {
				itemId = itemId + "-"
			}
		}
		console.log(itemId)
		ul.innerHTML += li
		console.log(ul)
		
	} 
		else {
			let listaIngresada = document.querySelectorAll ('li')
			let itemLista = listaIngresada[itemId]
			console.log ("DEBERIA ESTAR EDITANDO EN ESTE PUTO MOMENTO!!!!")
			editando = false
			
		}
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

        
      


