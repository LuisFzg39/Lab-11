let personajes = []
let lista = []

function agregarPersonaje(nombre, imagen){
    const contenedor = document.getElementById("personajes");
  
    const personaje = document.createElement("div");
    personaje.innerHTML = `
    <div class="personaje">
      <h5 class="personaje__nombre">${nombre}</h5>
      <img class="personaje__imagen" src="${imagen}" />
    </div>`
  
    contenedor.appendChild(personaje);
  }
  
  async function render() {

    const response = await fetch("https://raw.githubusercontent.com/JonatanOrdonez/fundamentos-programacion-diseno/main/2024-01/Labs/Lab%2011/personajes.json")
    const json = await response.json()
    personajes = json.personajes
    console.log(personajes)


    for(let i = 0; i < personajes.length; i++) {

      const obj = personajes[i]
      nombre = obj.name
      imagen = obj.image
      agregarPersonaje(nombre, imagen)
        
    }

  }
  
  document.addEventListener("DOMContentLoaded", render)
  

  // 1. Completar el código aqui para cargar el archivo json y crear los elementos HTML.
    // 2. Para cargar el archivo json se debe usar la función fetch y luego convertir la respuesta a un objeto JSON usando la función json().
    // 3. La función agregarPersonaje(nombre, imagen) recibe los datos del personaje y crea el elemento HTML con la información del personaje.