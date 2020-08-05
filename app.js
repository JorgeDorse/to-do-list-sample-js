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


//-------------Funcion que agrega un Item a la lista -----------------//
let agregarItem = function() {
	let itemId = ''
	let input = document.querySelectorAll('#itemIng')
	input = input [0] 
	
	if (!editando) { //si no esta editando ingresa aqui
		itemIng.value= input.value
		
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
		let itemLi = ` 			
		<li>
			<span id="ingreso">${input.value}</span>
			<button type="button" onclick="editarItem('${itemId}')">Editar</button> 
			<button type="button" onclick="eliminarItem('${input.value}')">Eliminar</button>
			<span id="Id" style= "display: inline"> ${itemId}</span>
		</li>
		`	
		ul.innerHTML += itemLi
	} 
		else {
			let listaIngresada = document.querySelectorAll ('li')
			let itemLista = listaIngresada[itemId]
			console.log ("DEBERIA ESTAR EDITANDO EN ESTE MOMENTO!!!!", itemId.innerText)
			
			let listaId = document.querySelectorAll ('#Id')
			// console.log (listaId)
			// console.log ("BUSCANDO ID::",itemId)
			for (let i = listaId.length - 1; i >= 0; i--) {
				let idLista = listaId[i]
				console.log ("itemId", itemId)
				if(idLista.innerText == itemId){
					let listaIng = document.querySelectorAll ('#ingreso')
					// console.log (listaIng)
					let ingLista = listaIng[i]
					// console.log ("ingLista::", ingLista.innerText)
					console.log (i)
					ingLista.outerText = input.value  
					break
			editando = false
				}
			}		
		}
		
	let li = document.querySelectorAll('li')
	console.log (li)
	// console.log("itemID::", itemId)
	input.value = ''	
		
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
	let listaId = document.querySelectorAll ('#Id')
	// console.log (listaId)
	// console.log ("BUSCANDO ID::",itemId)
	for (let i = listaId.length - 1; i >= 0; i--) {
		let idLista = listaId[i]
		if(idLista.innerText == itemId){
			let listaIng = document.querySelectorAll ('#ingreso')
			// console.log (listaIng)
			let ingLista = listaIng[i]
			// console.log ("ingLista::", ingLista.innerText)
			// console.log (i)
			itemIng.value = ingLista.innerText
			break
		}
	}
}


        
      


