# User API

La página web permite gestionar una lista de usuarios a través de una interfaz simple. Los usuarios pueden agregar nuevos usuarios y visualizar la lista actual de usuarios registrados. La aplicación se comunica con una API backend para realizar estas operaciones.

## Back-end con Spring Boot

Esta es una API simple para gestionar usuarios utilizando Spring Boot.

## Endpoints

### Obtener lista de usuarios

- **URL:** `/api/showUsers`
- **Método HTTP:** `GET`
- **Descripción:** Este endpoint devuelve una lista de todos los usuarios registrados.

### Agregar un nuevo usuario

- **URL:** `/api/post`

- **Método HTTP:** `POST`

- **Descripción:** Este endpoint agrega un nuevo usuario a la lista y devuelve la lista actualizada de usuarios.

  

## Front-end JS y Bootstrap

Esta es una implementación en JavaScript que consume una API para gestionar usuarios utilizando `fetch`.

## Métodos

### post(data)

- **Descripción:** Envía datos de un nuevo usuario al endpoint `/post` y recibe la lista actualizada de usuarios.
- **Uso:** Este método realiza una solicitud `POST` al endpoint `/post` con los datos del usuario proporcionados en el cuerpo de la solicitud.
- **Parámetros:**
  - `data` (Object): Un objeto que contiene los datos del usuario a agregar.
- **Retorno:** Devuelve la respuesta de la solicitud `fetch`.

### getData()

- **Descripción:** Obtiene la lista de usuarios del endpoint `/showUsers`.
- **Uso:** Este método realiza una solicitud `GET` al endpoint `/showUsers` y devuelve los datos obtenidos en formato JSON.
- **Parámetros:** Ninguno.
- **Retorno:** Devuelve un array de objetos `User` en formato JSON.