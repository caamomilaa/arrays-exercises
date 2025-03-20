// 1️⃣ Camila está organizando la lista de asistentes para una conferencia. Tiene un array con nombres, por ejemplo: ["Pedro", "Ana", "Sofía", "Luis"]. Quiere saber si "Ana" está en la lista y, si es así, debe imprimir "Invitada confirmada en la posición X". Si no está, debe imprimir "Invitada no encontrada".

const itIsInTheGuestList = guestNames => {
  if (guestNames.includes('Ana')) {
    console.log(
      `Invitada confirmada en la posición ${guestNames.indexOf('Ana')}.`
    );
  } else {
    console.log(`Invitada no encontrada.`);
  }
};
itIsInTheGuestList(['Pedro', 'Ana', 'Sofía', 'Luis']);

// 2️⃣ Bego está buscando un producto específico en su tienda. La lista de productos es: ["Camiseta", "Pantalón", "Gorra", "Zapatos"]. Necesita saber en qué posición se encuentra "Gorra". Si lo encuentra, debe mostrar su posición. Si no lo encuentra, debe mostrar "Producto no disponible".

const searchAProduct = product => {
  const productsList = ['Camiseta', 'Pantalón', 'Gorra', 'Zapatos'];
  if (productsList.includes(product)) {
    console.log(
      `Se encuentra en la estantería ${productsList.indexOf('Gorra')}.`
    );
  } else {
    console.log('Producto no disponible.');
  }
};
searchAProduct('Gorra');

// 3️⃣ Sabrina está revisando su lista de correos electrónicos para enviar promociones, por ejemplo: ["cliente1@gmail.com", "cliente2@hotmail.com", "cliente3@gmail.com"]. Quiere asegurarse de que al menos uno de los correos pertenece a Gmail. Si lo encuentra, debe mostrar "Correo de Gmail encontrado". Si no, "No hay correos de Gmail".

const searchMailDomain = domain => {
  const mailsList = [
    'cliente1@gmail.com',
    'cliente2@hotmail.com',
    'cliente3@gmail.com'
  ];
  if (mailsList[0].includes(domain)) {
    console.log(`Correo de Gmail encontrado.`);
  } else {
    console.log(`No hay correos de Gmail.`);
  }
  if (mailsList[1].includes(domain)) {
    console.log(`Correo de Gmail encontrado.`);
  } else {
    console.log(`No hay correos de Gmail.`);
  }
  if (mailsList[2].includes(domain)) {
    console.log(`Correo de Gmail encontrado.`);
  } else {
    console.log(`No hay correos de Gmail.`);
  }
};

searchMailDomain('@gmail');

// 4️⃣ Macarena necesita generar un identificador único para cada usuario. Recibe un array con nombre y apellido, (por ejemplo: ['Enrique Sofresco', 'Esther Colero', 'Leandro Gado']) y debe imprimir las dos primeras letras de cada nombre y de cada apellido en mayúsculas, seguidas de un número aleatorio entre 10 y 99.

const 

// 5️⃣ Abby encontró una caja fuerte con un código de acceso en un array de cuatro dígitos, por ejemplo: [1, 5, 3, 8]. Si la suma del primer y el último número es par, imprimirá "Acceso concedido", si no, "Acceso denegado".
