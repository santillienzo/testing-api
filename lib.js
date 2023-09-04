// Definir la URL de la API
const apiUrl = 'https://practicas-backend-fg.onrender.com/api/personas';

// Realizar una solicitud GET a la API
fetch(apiUrl)
  .then(response => {
    // Verificar si la solicitud fue exitosa (código de estado 200)
    if (response.status === 200) {
      // Convertir la respuesta a formato JSON
      return response.json();
    } else {
      // Manejar errores de solicitud
      throw new Error('No se pudo obtener la información de la API');
    }
  })
  .then(data => {
    // Hacer algo con los datos recibidos de la API
    // Por ejemplo, acceder a la información que necesitas
    console.table(data)
    // const id = data.id;
    // const email = data.email;
    // const firstName = data.firstName;
    // const lastName = data.lastName;
    // const phoneNumber = data.phoneNumber;
    // const address = data.address;
    // const birthdate = data.birthdate;

    // Hacer algo con estos datos, como mostrarlos en la página
    console.log(`ID: ${id}`);
    console.log(`Email: ${email}`);
    console.log(`Nombre: ${firstName} ${lastName}`);
    console.log(`Teléfono: ${phoneNumber}`);
    console.log(`Dirección: ${address}`);
    console.log(`Fecha de Nacimiento: ${birthdate}`);
  })
  .catch(error => {
    // Manejar errores generales
    alert("Hay un error. Ver consola")
    console.error(error);
  });