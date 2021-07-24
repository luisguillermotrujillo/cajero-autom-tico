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

  let valorIngresado;

  nombreUsuario = localStorage.getItem("nombreUsuario");

  password = localStorage.getItem("password");

      //Consultar saldo de Mali

  if (nombreUsuario == "Mali") {

    botonConsultarSaldo.addEventListener("click", function (event) {

    inputConsultarSaldo.value = "  Tu saldo es de $ " + cuentas[0].saldo;
  });

      //ingresar saldo de Mali

    botonIngresarSaldo.addEventListener("click", function (event) {

      valorIngresado = parseFloat(inputIngresarSaldo.value);

      cuentas[2].saldo = valorIngresado + cuentas[0].saldo;

      while (cuentas[2].saldo < 10 || cuentas[2].saldo > 990) {

        alert("Ingrese un valor correcto");

        console.log(valorIngresado);

      break;

    }

    if (cuentas[2].saldo >= 10 && cuentas[2].saldo <= 990) {

      cuentas[2].saldo = valorIngresado + cuentas[0].saldo;

      inputIngresarSaldo.value =
        "  ingreso $: " + valorIngresado + " saldo $: " + cuentas[2].saldo;

    }

  });

      //retirar saldo de Mali

    botonRetirarSaldo.addEventListener("click", function (event) {

      valorIngresado = parseFloat(inputRetirarSaldo.value);

      cuentas[2].saldo = cuentas[0].saldo - valorIngresado;

      while (cuentas[2].saldo < 10 || cuentas[2].saldo > 990) {

        alert("Ingrese un valor correcto");

      break;

    }

    if (cuentas[2].saldo >= 10 && cuentas[2].saldo <= 990) {

      cuentas[2].saldo = cuentas[0].saldo - valorIngresado;

      inputRetirarSaldo.value =
        "  Retiro $: " + valorIngresado + " saldo $: " + cuentas[2].saldo;

      }

    });

  }

      //consulta saldo de Gera

    else if (nombreUsuario == "Gera") {

      botonConsultarSaldo.addEventListener("click", function (event) {

        inputConsultarSaldo.value = "  Tu saldo es de $ " + cuentas[1].saldo;

  });

      //ingresar saldo de Gera

    botonIngresarSaldo.addEventListener("click", function (event) {

      valorIngresado = parseFloat(inputIngresarSaldo.value);

      cuentas[2].saldo = valorIngresado + cuentas[1].saldo;

      while (cuentas[2].saldo < 10 || cuentas[2].saldo > 990) {

        alert("Ingrese un valor correcto");

        console.log(valorIngresado);

      break;

    }

    if (cuentas[2].saldo >= 10 && cuentas[2].saldo <= 990) {

      cuentas[2].saldo = valorIngresado + cuentas[1].saldo;

      inputIngresarSaldo.value =
        "  ingreso $: " + valorIngresado + " saldo $: " + cuentas[2].saldo;
    }

  });

      //retirar saldo de Gera

    botonRetirarSaldo.addEventListener("click", function (event) {

    valorIngresado = parseFloat(inputRetirarSaldo.value);

    cuentas[2].saldo = cuentas[1].saldo - valorIngresado;

    while (cuentas[2].saldo < 10 || cuentas[2].saldo > 990) {

      alert("Ingrese un valor correcto");

      break;

    }

    if (cuentas[2].saldo >= 10 && cuentas[2].saldo <= 990) {

      cuentas[2].saldo = cuentas[1].saldo - valorIngresado;

      inputRetirarSaldo.value =
        "  Retiro $: " + valorIngresado + " saldo $: " + cuentas[2].saldo;

      }

    });

  }

      //consulta saldo de Maui

    else if (nombreUsuario == "Maui") {

      botonConsultarSaldo.addEventListener("click", function (event) {

        inputConsultarSaldo.value = "  Tu saldo es de $ " + cuentas[2].saldo;

  });

      //ingresar saldo de Maui

    botonIngresarSaldo.addEventListener("click", function (event) {

      valorIngresado = parseFloat(inputIngresarSaldo.value);

      cuentas[2].saldo = valorIngresado + cuentas[2].saldo;

      while (cuentas[2].saldo < 10 || cuentas[2].saldo > 990) {

        alert("Ingrese un valor correcto");

        console.log(valorIngresado);

      break;

    }

    if (cuentas[2].saldo >= 10 && cuentas[2].saldo <= 990) {

      inputIngresarSaldo.value =
        "  ingreso $: " + valorIngresado + " saldo $: " + cuentas[2].saldo;

    }

  });

      //retirar saldo de Maui

    botonRetirarSaldo.addEventListener("click", function (event) {

      valorIngresado = parseFloat(inputRetirarSaldo.value);

      cuentas[2].saldo = cuentas[2].saldo - valorIngresado;

      while (cuentas[2].saldo < 10 || cuentas[2].saldo > 990) {

        alert("Ingrese un valor correcto");

      break;

    }

    if (cuentas[2].saldo >= 10 && cuentas[2].saldo <= 990) {

      inputRetirarSaldo.value =
        "  Retiro $: " + valorIngresado + " saldo $: " + cuentas[2].saldo;
        
    }

  });

}
