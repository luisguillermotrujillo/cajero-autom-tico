let cuentas = [
  { nombre: "Mali", saldo: 200, password: "helloworld" },

  { nombre: "Gera", saldo: 290, password: "l33t" },

  { nombre: "Maui", saldo: 67, password: "123" },
];

let inputConsultarSaldo = document.getElementById("inputConsultarSaldo");

let inputIngresarSaldo = document.getElementById("inputIngresarSaldo");

let inputRetirarSaldo = document.getElementById("inputRetirarSaldo");

let botonConsultarSaldo = document.getElementById("botonConsultarSaldo");

let botonIngresarSaldo = document.getElementById("botonIngresarSaldo");

let botonRetirarSaldo = document.getElementById("botonRetirarSaldo");

let nuevoSaldo;

let valorIngresado;

nombreUsuario = localStorage.getItem("nombreUsuario");

password = localStorage.getItem("password");

//consulta de Mali

//consultar saldo

if (nombreUsuario == "Mali") {
  botonConsultarSaldo.addEventListener("click", function (event) {
    // event.preventDefault();

    inputConsultarSaldo.value = "  Tu saldo es de $ " + cuentas[0].saldo;
  });

  //ingresar saldo

  botonIngresarSaldo.addEventListener("click", function (event) {
    valorIngresado = parseFloat(inputIngresarSaldo.value);

    nuevoSaldo = valorIngresado + cuentas[0].saldo;

    while (nuevoSaldo < 10 || nuevoSaldo > 990) {
      alert("Ingrese un valor correcto");
      console.log(valorIngresado);

      break;
    }

    if (nuevoSaldo >= 10 && nuevoSaldo <= 990) {
      nuevoSaldo = valorIngresado + cuentas[0].saldo;

      inputIngresarSaldo.value =
        "  ingreso $: " + valorIngresado + " saldo $: " + nuevoSaldo;
    }
  });

  //retirar saldo

  botonRetirarSaldo.addEventListener("click", function (event) {
    valorIngresado = parseFloat(inputRetirarSaldo.value);

    nuevoSaldo = cuentas[0].saldo - valorIngresado;

    while (nuevoSaldo < 10 || nuevoSaldo > 990) {
      alert("Ingrese un valor correcto");

      break;
    }

    if (nuevoSaldo >= 10 && nuevoSaldo <= 990) {
      nuevoSaldo = cuentas[0].saldo - valorIngresado;

      inputRetirarSaldo.value =
        "  Retiro $: " + valorIngresado + " saldo $: " + nuevoSaldo;
    }
  });
}

//consulta de Gera
else if (nombreUsuario == "Gera") {
  botonConsultarSaldo.addEventListener("click", function (event) {
    inputConsultarSaldo.value = "  Tu saldo es de $ " + cuentas[1].saldo;
  });

  //ingresar saldo

  botonIngresarSaldo.addEventListener("click", function (event) {
    valorIngresado = parseFloat(inputIngresarSaldo.value);

    nuevoSaldo = valorIngresado + cuentas[1].saldo;

    while (nuevoSaldo < 10 || nuevoSaldo > 990) {
      alert("Ingrese un valor correcto");
      console.log(valorIngresado);

      break;
    }

    if (nuevoSaldo >= 10 && nuevoSaldo <= 990) {
      nuevoSaldo = valorIngresado + cuentas[1].saldo;

      inputIngresarSaldo.value =
        "  ingreso $: " + valorIngresado + " saldo $: " + nuevoSaldo;
    }
  });

  //retirar saldo

  botonRetirarSaldo.addEventListener("click", function (event) {
    valorIngresado = parseFloat(inputRetirarSaldo.value);

    nuevoSaldo = cuentas[1].saldo - valorIngresado;

    while (nuevoSaldo < 10 || nuevoSaldo > 990) {
      alert("Ingrese un valor correcto");

      break;
    }

    if (nuevoSaldo >= 10 && nuevoSaldo <= 990) {
      nuevoSaldo = cuentas[1].saldo - valorIngresado;

      inputRetirarSaldo.value =
        "  Retiro $: " + valorIngresado + " saldo $: " + nuevoSaldo;
    }
  });
}

//consulta de Maui
else if (nombreUsuario == "Maui") {
  botonConsultarSaldo.addEventListener("click", function (event) {
    inputConsultarSaldo.value = "  Tu saldo es de $ " + cuentas[2].saldo;
  });

  //ingresar saldo

  botonIngresarSaldo.addEventListener("click", function (event) {
    valorIngresado = parseFloat(inputIngresarSaldo.value);

    nuevoSaldo = valorIngresado + cuentas[2].saldo;

    while (nuevoSaldo < 10 || nuevoSaldo > 990) {
      alert("Ingrese un valor correcto");
      console.log(valorIngresado);

      break;
    }

    if (nuevoSaldo >= 10 && nuevoSaldo <= 990) {
      nuevoSaldo = valorIngresado + cuentas[2].saldo;

      inputIngresarSaldo.value =
        "  ingreso $: " + valorIngresado + " saldo $: " + nuevoSaldo;
    }
  });

  //retirar saldo

  botonRetirarSaldo.addEventListener("click", function (event) {
    valorIngresado = parseFloat(inputRetirarSaldo.value);

    nuevoSaldo = cuentas[2].saldo - valorIngresado;

    while (nuevoSaldo < 10 || nuevoSaldo > 990) {
      alert("Ingrese un valor correcto");

      break;
    }

    if (nuevoSaldo >= 10 && nuevoSaldo <= 990) {
      nuevoSaldo = cuentas[2].saldo - valorIngresado;

      inputRetirarSaldo.value =
        "  Retiro $: " + valorIngresado + " saldo $: " + nuevoSaldo;
    }
  });
}
