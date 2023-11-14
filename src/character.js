const baseURL = `https://rickandmortyapi.com/api`
const buscarDetalle = async id =>{
	const res = await fetch(`${baseURL}/character/${id}`)
	const data = await res.json()
	return data
}

const main = document.querySelector(`#character`)
const loader = document.querySelector(`#lds-ring`)
const ID = localStorage.getItem(`charID`)

const detallePersonaje = async id => {
	loader.style.display = `grid`
	const datos = await buscarDetalle(id)
	loader.style.display = `none`

	const bloque = document.createElement(`article`)
	bloque.setAttribute(`class`, `character`)
	bloque.innerHTML = `
	<img src="${datos.image}">
	<h2>${datos.name}</h2>
	<p class="data"><span>Origen:</span> ${datos.origin.name}</p>
    <p class="data"><span>Locación Actual:</span> ${datos.location.name}</p>
    <div>
      <p class="data"><span>Especie:</span> ${datos.species}</p>
      <p class="${datos.status.toLowerCase()}">${datos.status}</p>
    </div>`
    main.appendChild(bloque)
}

detallePersonaje(ID)