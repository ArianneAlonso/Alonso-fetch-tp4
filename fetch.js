const contenido = document.getElementById("contenido")
const datosfetch = async () => {
    try{
        const pagina = await fetch("https://rickandmortyapi.com/api/character")
        const dato = await pagina.json()
        const resultado = dato.results

        console.log(resultado)

        resultado.forEach(pregunt => {
            const personaje = document.createElement("div")
            personaje.className = "foto"
            personaje.innerHTML +=`
           <h3>${pregunt.name}</h3>
           <img src="${pregunt.image}" >
           <p>${pregunt.gender}</p>
           `
           contenido.appendChild(item)
        });
    }catch(error){
        console.error("error", error)
    }
}

datosfetch()