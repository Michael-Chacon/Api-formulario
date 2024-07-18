const form = document.querySelector("#form");
const profiles = document.querySelector("#profiles")

form.addEventListener("submit", sendData);

// Cargar datos cuando se recarga la pagina
document.addEventListener("DOMContentLoaded", () => {
  makeGet()
})

//Obtener los datos del endpoin showUsers
async function makeGet(){
  const get = await getData();
  users(get)

}

//Procesar los inputs del formulario
async function sendData(e) {
  e.preventDefault();
  const dataForm = new FormData(form);
  const objForm = Object.fromEntries(dataForm);
  try {
    const response = await post(objForm);
    if(response.ok){
      form.reset()
      makeGet()
    }
  } catch (error) {
    console.error("Failed to post data:", error);
  }
}

const header = new Headers({
  "Content-Type": "application/json",
});
const URL = "http://localhost:8080/api";

// Enviar y recibir datos al endpoint post
const post = async (data) => {
  try {
    const getData = await fetch(`${URL}/post`, {
      method: "POST",
      headers: header,
      body: JSON.stringify(data),
    });

    if (!getData.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return getData

  } catch (error) {
    console.error("Error during fetch:", error);
    throw error;
  }
}

// Obtener datos del endpoin showUsers
const getData = async () => {
  try{
    const datos = await fetch(`${URL}/showUsers`)

    if (!datos.ok){
      throw new Error('Problemas con el servidor. Cofigo del error: ' + datos.status)
    }

    return await datos.json()

  }catch(error){
    console.log('Algo salio mal: ' + error)
  }
}

// Mostrar los datos en el html
function users(datos){
  profiles.innerHTML = ''
  datos.forEach(user => {
    profiles.innerHTML += /*html*/ `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${user.name} ${user.lastname}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${user.gmail}</h6>
      <a href="#" class="card-link">Delete</a>
      <a href="#" class="card-link">View profile</a>
    </div>
  </div>
    `
  })
}
