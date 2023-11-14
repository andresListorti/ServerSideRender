const baseURL = `https://rickandmortyapi.com/api`
const buscarPersonajes = async pagina =>{
	const res = await fetch(`${baseURL}/character/?page=${pagina}`)
	const data = await res.json()
	return data
}

const main = document.querySelector(`#characters`)
const loader = document.querySelector(`#lds-ring`)

const listaPersonajes = async (pagina = 1) => {
	loader.style.display = `grid`
	const { results } = await buscarPersonajes(pagina)
	loader.style.display = `none`

	results.forEach(personaje =>{
		const bloquePersonaje = document.createElement(`article`) //<article></article>
		bloquePersonaje.setAttribute(`class`, `character`) //<article class="character"></article>
		bloquePersonaje.innerHTML = `
		<img src="${personaje.image}" alt="">
		<h2>${personaje.name}</h2>
		<div>
		  <p>${personaje.species}</p>
		  <p class="${personaje.status.toLowerCase()}"></p>
		</div>
		<a href="character.html" id="${personaje.id}">Ver detalle</a>`
		bloquePersonaje.querySelector(`a`).addEventListener(`click`, guardarId)
		main.appendChild(bloquePersonaje)
	})
}

listaPersonajes()

const guardarId = (e) => localStorage.setItem(`charID`, e.target.id)