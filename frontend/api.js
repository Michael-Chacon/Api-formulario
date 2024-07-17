const form = document.querySelector("#form");
const result = document.querySelector("#result");

form.addEventListener("submit", sendData);

//Procesar los inputs del formulario
async function sendData(e) {
  e.preventDefault();
  const dataForm = new FormData(form);
  const objForm = Object.fromEntries(dataForm);
  console.log(objForm);
  try {
    const datos = await post(objForm);
    console.log(datos)
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
