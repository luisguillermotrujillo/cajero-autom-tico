// let nombreUsuario = prompt("cuenta de usuario");

let inputConsultarSaldo = document.getElementById("inputConsultarSaldo");

let botonConsultar = document.getElementById("botonConsultar");

let ingresarSaldo = document.getElementById("inputIngresarSaldo");

let retirarSaldo = document.getElementById("inputRetirarSaldo");

let botonIngresar = document.getElementById("ingresar");

let consultar_Ingresar_Retirar;

let nombreUsuario = document.getElementById("usuario");

let password = document.getElementById("password");

let cuentas = [
  { nombre: "Mali", saldo: 200, password: "helloworld" },

  { nombre: "Gera", saldo: 290, password: "l33t" },

  { nombre: "Maui", saldo: 67, password: "123" },
];

document.getElementById("Ingresar").addEventListener("click", function (event) {
  event.preventDefault();
  //   Acceso(nombreUsuario);
  //   Acceso(password);

  nombreUsuario = acceso(nombreUsuario);

  password = acceso(password);

  // console.log(Acceso(nombreUsuario));

  // console.log(Acceso(password));

  //   Acceso(nombreUsuario)

  //   Acceso(password)

  if (nombreUsuario == "Mali" && password == "helloworld") {
    // let password = prompt("contraseña");

    localStorage.setItem("nombreUsuario", nombreUsuario);

    localStorage.setItem("password", password);

    //if (password == "helloworld") {

    window.location.replace("./CajeroAutomatico.html");

    //   Consultar_Ingresar_Retirar = prompt("Consultar  Ingresar  Retirar");

    //}

    //   if (Consultar_Ingresar_Retirar == "Consultar") {

    //     document.write("saldo disponible: 200");

    //   } else if (Consultar_Ingresar_Retirar == "Ingresar") {

    //     document.getElementById("ingresar_saldo").addEventListener("click", function (event) {

    //     // event.preventDefault();

    //   })

    //     // valor_ingresado = parseFloat(prompt("¿Cuanto desea ingresar?"));

    //     valor_ingresado = ingresarSaldo.value;

    //     console.log(valor_ingresado);

    //     let suma = valor_ingresado + cuentas[0].saldo;

    //     while (suma < 10 || suma > 990) {

    //       valor_ingresado = parseFloat(prompt("Ingrese un valor correcto"));

    //       suma = valor_ingresado + cuentas[0].saldo;
    //     }

    //     if (suma >= 10 && suma <= 990) {

    //       document.write(valor_ingresado + " valor ingresado <br>");

    //       document.write(valor_ingresado + cuentas[0].saldo + " saldo total");
    //     }

    //   }

    //   else if (Consultar_Ingresar_Retirar == "Retirar") {

    //     valor_ingresado = parseFloat(prompt("¿Cuanto desea retirar?"));

    //     suma = cuentas[0].saldo - valor_ingresado;

    //     while (suma < 10 || suma > 990) {

    //       valor_ingresado = parseFloat(prompt("Ingrese un valor correcto"));

    //       document.write(suma);

    //       suma = cuentas[0].saldo - valor_ingresado;
    //     }

    //   }

    //   if (suma >= 10 && suma <= 990) {

    //     document.write(valor_ingresado + " valor ingresado <br>");

    //     document.write(cuentas[0].saldo - valor_ingresado + " saldo total");
    //   }
  } else if (nombreUsuario == "Gera" && password == "l33t") {
    localStorage.setItem("nombreUsuario", nombreUsuario);

    localStorage.setItem("password", password);

    // let password = prompt("contraseña");

    //if (password == "l33t") {

    window.location.replace("./CajeroAutomatico.html");

    //   Consultar_Ingresar_Retirar = prompt("Consultar  Ingresar  Retirar");

    //}

    //   if (Consultar_Ingresar_Retirar == "Consultar") {

    //     document.write("saldo disponible: 290");

    //   } else if (Consultar_Ingresar_Retirar == "Ingresar") {

    //     valor_ingresado = parseFloat(prompt("¿Cuanto desea ingresar?"));

    //     let suma = valor_ingresado + cuentas[0].saldo;

    //     while (suma < 10 || suma > 990) {

    //       valor_ingresado = parseFloat(prompt("Ingrese un valor correcto"));

    //       suma = valor_ingresado + cuentas[1].saldo;
    //     }

    //     if (suma >= 10 && suma <= 990) {

    //       document.write(valor_ingresado + " valor ingresado <br>");

    //       document.write(valor_ingresado + cuentas[1].saldo + " saldo total");
    //     }

    //   }

    //   else if (Consultar_Ingresar_Retirar == "Retirar") {

    //     valor_ingresado = parseFloat(prompt("¿Cuanto desea retirar?"));

    //     suma = cuentas[1].saldo - valor_ingresado;

    //     while (suma < 10 || suma > 990) {

    //       valor_ingresado = parseFloat(prompt("Ingrese un valor correcto"));

    //       document.write(suma);

    //       suma = cuentas[1].saldo - valor_ingresado;
    //     }

    //   }

    //   if (suma >= 10 && suma <= 990) {

    //     document.write(valor_ingresado + " valor ingresado <br>");

    //     document.write(cuentas[1].saldo - valor_ingresado + " saldo total");
    //   }
  } else if (nombreUsuario == "Maui" && password == "123") {
    localStorage.setItem("nombreUsuario", nombreUsuario);

    localStorage.setItem("password", password);

    // let password = prompt("contraseña");

    //if (password == "123") {

    window.location.replace("./CajeroAutomatico.html");

    //   Consultar_Ingresar_Retirar = prompt("Consultar  Ingresar  Retirar");

    //}

    //   if (Consultar_Ingresar_Retirar == "Consultar") {

    //     document.write("saldo disponible: 67");

    //   } else if (Consultar_Ingresar_Retirar == "Ingresar") {

    //     valor_ingresado = parseFloat(prompt("¿Cuanto desea ingresar?"));

    //     let suma = valor_ingresado + cuentas[2].saldo;

    //     while (suma < 10 || suma > 990) {

    //       valor_ingresado = parseFloat(prompt("Ingrese un valor correcto"));

    //       suma = valor_ingresado + cuentas[2].saldo;
    //     }

    //     if (suma >= 10 && suma <= 990) {

    //       document.write(valor_ingresado + " valor ingresado <br>");

    //       document.write(valor_ingresado + cuentas[2].saldo + " saldo total");
    //     }

    //   }

    //   else if (Consultar_Ingresar_Retirar == "Retirar") {

    //     valor_ingresado = parseFloat(prompt("¿Cuanto desea retirar?"));

    //     suma = cuentas[2].saldo - valor_ingresado;

    //     while (suma < 10 || suma > 990) {

    //       valor_ingresado = parseFloat(prompt("Ingrese un valor correcto"));

    //       document.write(suma);

    //       suma = cuentas[2].saldo - valor_ingresado;
    //     }

    //   }

    //   if (suma >= 10 && suma <= 990) {

    //     document.write(valor_ingresado + " valor ingresado <br>");

    //     document.write(cuentas[2].saldo - valor_ingresado + " saldo total");
    //   }
  } else {
    document.write("Error dato no valido");
  }
});

// alert(numeroUsuario+" "+password);

function acceso(form) {
  let valueForm = form.value;

  return valueForm;
}
