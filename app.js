let formDiv = document.querySelectorAll('#formDiv')
formDiv = formDiv[0]

let tplInput = `
<input type="text" name="item" id="itemIng" placeholder="Ingrese Item" id="item" class="input">
<button type="button" onclick="agregarItem()">Agregar</button>
`
formDiv.innerHTML = tplInput
let num		= [0,1,2,3,4,5,6,7,8,9]

// let item = ""
let editando = false
let itemId = ''

//-------------Funcion que agrega un Item a la lista -----------------//
let agregarItem = function() {
	let input = document.querySelectorAll('#itemIng')
	input = input [0] 
	let li = ` 			
		<li>
			<span>${input.value}</span>
			<button type="button" onclick="editarItem('${itemId}')">Editar</button> 
			<button type="button" onclick="eliminarItem('${input.value}')">Eliminar</button>
		</li>
	`
	if (!editando) { //si no esta editando ingresa aqui
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
		console.log ("ItemId::", itemId)
		ul.innerHTML += li
		console.log ("lista::", li)
	} 
		else {
			let listaIngresada = document.querySelectorAll ('li')
			let itemLista = listaIngresada[itemId]
			console.log ("DEBERIA ESTAR EDITANDO EN ESTE PUTO MOMENTO!!!!")
			editando = false
			
		}
		
		
}
//--------------------FIN DE LA FUNCION agregarItem------------------//
let eliminarItem = function(item) {
	let listaIngresada = document.querySelectorAll ('li')
	for (let i = listaIngresada.length - 1; i >= 0; i--) {
		let itemLista = listaIngresada[i];
		if(itemLista.firstElementChild.innerText == item){
			listaIngresada[i].outerHTML = ''
		}
	}
}
//--------------------FIN DE LA FUNCION eliminarItem------------------//


let editarItem = function(itemId) {
	editando = true
	let listaIngresada = document.querySelectorAll ('li')
	console.log("lista::", listaIngresada)
	for (let i = listaIngresada.length - 1; i >= 0; i--) {
		let itemLista = listaIngresada[i];
		console.log ("itemLista::", itemLista.itemId)
		if(itemLista.secondElementChild.innerText == itemId){
		 itemIng.value= item
		 
		}
	}
}

        
      


