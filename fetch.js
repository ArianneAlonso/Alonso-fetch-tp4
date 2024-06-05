const contenido = document.getElementById("contenido")
const datosfetch = async () => {
    try{
        const res = await fetch("https://rickandmortyapi.com/api/character")
        const data = await res.json()
        const pregunta = data.results

        pregunta.forEach(pregunt => {
            const item = document.createElement("div")
            item.className = "foto"
            item.innerHTML +=`
           <img src="${pregunt.image}">
           <h3>${pregunt.name}</h3>
           <p>${pregunt.gender}</p>
           `
           contenido.appendChild(item)
        });
    }catch(error){
        console.error("error", error)
    }
}

datosfetch()