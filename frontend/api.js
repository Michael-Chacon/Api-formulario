const form = document.querySelector("#form");
const result = document.querySelector("#result");
const profiles = document.querySelector("#profiles")

form.addEventListener("submit", sendData);

//Procesar los inputs del formulario
async function sendData(e) {
  e.preventDefault();
  const dataForm = new FormData(form);
  const objForm = Object.fromEntries(dataForm);
  try {
    const datos = await post(objForm);
    form.reset()
    users(datos)
    pintarResultado(datos);
    result.innerHTML = `
            name: ${datos.name}, lastName: ${datos.lastname}, gmail: ${datos.gmail} 
        `;
  } catch (error) {
    console.error("Failed to post data:", error);
  }
}

const header = new Headers({
  "Content-Type": "application/json",
});
const URL = "http://localhost:8080/api/post";

// Enviar y recibir datos al endpoint post
const post = async (data) => {
  try {
    const getData = await fetch(URL, {
      method: "POST",
      headers: header,
      body: JSON.stringify(data),
    });

    if (!getData.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const datos = await getData.json();
    return datos;
  } catch (error) {
    console.error("Error during fetch:", error);
    throw error;
  }
};


function pintarResultado(datos) {
  result.innerHTML = `   
            <li class="list-group-item">${datos.name}</li>
            <li class="list-group-item">${datos.lastname}</li>
            <li class="list-group-item">${datos.gmail}</li>
    `;
}

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
  console.log(datos)
}
