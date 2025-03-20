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

// 5️⃣ Abby encontró una caja fuerte con un código de acceso en un array de cuatro dígitos, por ejemplo: [1, 5, 3, 8]. Si la suma del primer y el último número es par, imprimirá "Acceso concedido", si no, "Acceso denegado".

const isValidCode = code => {
	if ((code[0] + code[code.length - 1]) % 2 === 0) {
		console.log('Acceso concedido.');
	} else {
		console.log('Acceso denegado.');
	}
};
isValidCode([1, 5, 3, 8]);

// 6️⃣ Camila quiere generar dos números aleatorios entre 1 y 100 y determinar cuál es el mayor. Después los guardará en un array poniendo en la primera posición el mayor y en segunda posición el menor. Si son iguales, imprimirá "Empate", si no, imprimirá el array.

const generateRandomNumbers = emptyArray => {
	const firstNumber = Math.floor(Math.random() * 100);
	const secondNumber = Math.floor(Math.random() * 100);
	if (firstNumber > secondNumber) {
		emptyArray.unshift(firstNumber);
		emptyArray.push(secondNumber);
	} else if (secondNumber > firstNumber) {
		emptyArray.unshift(secondNumber);
		emptyArray.push(firstNumber);
	}
	if (firstNumber === secondNumber) {
		console.log('EMPATE');
	} else {
		console.log(emptyArray);
	}
};
generateRandomNumbers([]);

// 7️⃣ Bego está calculando descuentos para varios clientes. Recibe un array con tres precios originales ([120, 75, 40]). Para cada precio, genera un número aleatorio entre 1 y 100. Si el número es menor que 50, aplica un 10% de descuento. Si es mayor o igual a 50, aplica un 20%. Debe imprimir el precio original, el número generado y el precio final con descuento para cada uno.

// Ejemplo de cómo debería verse el resultado:
// Precio: 120 | Número generado: 45 | Precio final: 108 (10% de descuento)
// Precio: 75 | Número generado: 65 | Precio final: 60 (20% de descuento)
// Precio: 40 | Número generado: 30 | Precio final: 36 (10% de descuento)

const getDiscount = originalPrice => {
	const firstNumber = Math.floor(Math.random() * 100);
	const secondNumber = Math.floor(Math.random() * 100);
	const thirdNumber = Math.floor(Math.random() * 100);
	if (firstNumber > 50) {
		originalPrice[0] - originalPrice[0] * 0.1;
	} else {
		originalPrice[0] - originalPrice[0] * 0.2;
	}
	if (secondNumber > 50) {
		originalPrice[0] - originalPrice[0] * 0.1;
	} else {
		originalPrice[0] - originalPrice[0] * 0.2;
	}
	if (thirdNumber > 50) {
		originalPrice[0] - originalPrice[0] * 0.1;
	} else {
		originalPrice[0] - originalPrice[0] * 0.2;
	}
	console.log(
		`Precio: ${originalPrice[0]} | Número generado: ${firstNumber} | Precio final:`
	);
	console.log(
		`Precio: ${originalPrice[1]} | Número generado: ${secondNumber} | Precio final:`
	);
	console.log(
		`Precio: ${originalPrice[2]} | Número generado: ${thirdNumber} | Precio final:`
	);
};
getDiscount([120, 75, 40]);

// 8️⃣ Sabrina está en un restaurante con dos amigos. Recibe un array con tres cuentas, por ejemplo: [120, 75, 93]. Cada cuenta debe dividirse entre 3 para pagar de manera justa. Si el resultado de la división es impar, debe redondearse al número par más cercano. Sabrina debe imprimir el precio original, el precio dividido y el precio final (redondeado si es necesario) para cada cuenta.

// Ejemplo de cómo debería verse el resultado:
// Cuenta original: 120 | Dividido: 40 | Precio final: 40
// Cuenta original: 75 | Dividido: 25 | Precio final: 26 (Redondeado al número par más cercano)
// Cuenta original: 93 | Dividido: 31 | Precio final: 32 (Redondeado al número par más cercano)

const howMuchEachOnePay = bill => {
	const firstBill = bill[0] % 3;
	const secondBill = bill[0];
	const thirdBill = bill[0];
	if (firstBill !== 0) {
	}
};
howMuchEachOnePay([120, 75, 93]);
// 9️⃣ Macarena quiere calcular la edad de tres clientes. Recibe un array con tres años de nacimiento entre 1950 y 2010. Sabiendo que estamos en el año 2025, debe calcular la edad de cada uno y determinar si al menos uno es mayor de 18. Si hay al menos un cliente mayor de edad, imprimirá "Hay un cliente mayor de edad", si no, "Todos son menores de edad".

// 🔟 Abby encontró un código de seguridad con tres números entre 100 y 999. Si el primer número es mayor que el segundo pero menor que el tercero, imprimirá "Código válido", si no, "Código incorrecto".

// 1️⃣1️⃣ Camila está organizando la lista de clientes de su tienda. Un cliente nuevo, "Lucía", llega y debe agregarse al final de la lista de clientes: ["Carlos", "María", "Sofía"]. Luego, debe mostrar cuántos clientes hay en la lista.

// 1️⃣2️⃣ Bego está revisando el stock de su tienda. Un producto aleatorio ya no está disponible y debe ser eliminado de la lista: ["Pan", "Leche", "Huevos"]. Después, debe mostrar cuántos productos quedan.

// 1️⃣3️⃣ Sabrina está registrando pedidos en un restaurante. Un nuevo pedido, "Pizza", ha sido añadido en primer lugar a la lista de pedidos: ["Hamburguesa", "Ensalada"]. Luego, debe imprimir el primer pedido en la lista.

// 1️⃣4️⃣ Macarena está revisando las reservas de su hotel. Un cliente canceló su reserva en la lista: ["Habitación 101", "Habitación 203", "Habitación 305"]. Luego, debe mostrar cuántas reservas quedan.

// 1️⃣5️⃣ Abby encontró una lista de suministros en un refugio, por ejemplo: ["Botiquín", "Munición", "Agua", "Comida"]. Necesita asegurarse de que hay "Munición" y "Comida" disponibles. Si ambos están en la lista, debe mostrar "Suministros completos". Si falta alguno, debe mostrar "Suministros incompletos".

// 1️⃣6️⃣ Camila está organizando una lista de espera. Un cliente importante, "Fernando", debe ser colocado en la primera posición de la lista: ["Ana", "Luis", "Elena"]. Luego, debe mostrar quién es el último en la lista.

// 1️⃣7️⃣ Bego tiene una caja registradora con pagos pendientes. Ha procesado el primer pago en la lista de pagos y debe eliminarlo: [15.50, 32.75, 8.99]. Luego, debe mostrar cuántos pagos quedan por procesar.

// 1️⃣8️⃣ Sabrina está actualizando el menú de su restaurante. Un nuevo plato, "Pasta", ha sido agregado a la lista de platos: ["Sopa", "Carne asada"], y el último ha sido eliminado. Luego, debe mostrar la lista de platos.

// 1️⃣9️⃣ Macarena está organizando un torneo. Un nuevo jugador, "Diego", se ha inscrito y reemplazará al último de la lista de jugadores: ["Hugo", "Mateo", "Álvaro"]. Luego, debe mostrar la cantidad total de jugadores inscritos.

// 2️⃣0️⃣ Abby está recibiendo señales de radio con mensajes en espera. Ha procesado el mensaje más antiguo de la lista: ["Atención, infectados cerca", "Necesitamos refuerzos", "Zona despejada"] y ha recibido uno nuevo: "Solicitamos medicinas". Luego, debe mostrar los mensajes uno por uno en console.log independientes.
