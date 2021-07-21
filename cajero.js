// let nombreUsuario = prompt("cuenta de usuario");
var ConsultarSaldo = document.getElementById("Consultar_saldo");

var ingresarSaldo = document.getElementById("ingresar_saldo");

var retirarSaldo = document.getElementById("retirar_saldo");

let Consultar_Ingresar_Retirar;

var nombreUsuario = document.getElementById("usuario");

var password = document.getElementById("password");

let valor_ingresado;

    let cuentas = [
        { nombre: "Mali", saldo: 200, password: "helloworld" },

        { nombre: "Gera", saldo: 290, password: "l33t" },

        { nombre: "Maui", saldo: 67, password: "123" },
    ];

document.getElementById("Ingresar").addEventListener("click", function (event) {
  event.preventDefault();
//   Acceso(nombreUsuario);
//   Acceso(password);

  nombreUsuario = Acceso(nombreUsuario);
  password = Acceso(password);
  

  console.log(Acceso(nombreUsuario));
  console.log(Acceso(password));

//   Acceso(nombreUsuario)

//   Acceso(password)

  if (nombreUsuario == "Mali") {
    // let password = prompt("contraseña");

    if (password == "helloworld") {
        window.location.replace("./CajeroAutomatico.html");
    //   Consultar_Ingresar_Retirar = prompt("Consultar  Ingresar  Retirar");
    }

    if (Consultar_Ingresar_Retirar == "Consultar") {

      document.write("saldo disponible: 200");

    } else if (Consultar_Ingresar_Retirar == "Ingresar") {

      document.getElementById("ingresar_saldo").addEventListener("click", function (event) {
      event.preventDefault();
    })

      // valor_ingresado = parseFloat(prompt("¿Cuanto desea ingresar?"));

      valor_ingresado = ingresarSaldo.value;
      console.log(valor_ingresado);

      let suma = valor_ingresado + cuentas[0].saldo;

      while (suma < 10 || suma > 990) {

        valor_ingresado = parseFloat(prompt("Ingrese un valor correcto"));

        suma = valor_ingresado + cuentas[0].saldo;
      }

      if (suma >= 10 && suma <= 990) {
        
        document.write(valor_ingresado + " valor ingresado <br>");

        document.write(valor_ingresado + cuentas[0].saldo + " saldo total");
      }
    } else if (Consultar_Ingresar_Retirar == "Retirar") {
      valor_ingresado = parseFloat(prompt("¿Cuanto desea retirar?"));

      suma = cuentas[0].saldo - valor_ingresado;

      while (suma < 10 || suma > 990) {
        valor_ingresado = parseFloat(prompt("Ingrese un valor correcto"));

        document.write(suma);

        suma = cuentas[0].saldo - valor_ingresado;
      }
    }

    if (suma >= 10 && suma <= 990) {
      document.write(valor_ingresado + " valor ingresado <br>");

      document.write(cuentas[0].saldo - valor_ingresado + " saldo total");
    }
  } else if (nombreUsuario == "Gera") {
    // let password = prompt("contraseña");

    if (password == "l33t") {
        window.location.replace("./CajeroAutomatico.html");
    //   Consultar_Ingresar_Retirar = prompt("Consultar  Ingresar  Retirar");
    }

    if (Consultar_Ingresar_Retirar == "Consultar") {
      document.write("saldo disponible: 290");
    } else if (Consultar_Ingresar_Retirar == "Ingresar") {
      valor_ingresado = parseFloat(prompt("¿Cuanto desea ingresar?"));

      let suma = valor_ingresado + cuentas[0].saldo;

      while (suma < 10 || suma > 990) {
        valor_ingresado = parseFloat(prompt("Ingrese un valor correcto"));

        suma = valor_ingresado + cuentas[1].saldo;
      }

      if (suma >= 10 && suma <= 990) {
        document.write(valor_ingresado + " valor ingresado <br>");

        document.write(valor_ingresado + cuentas[1].saldo + " saldo total");
      }
    } else if (Consultar_Ingresar_Retirar == "Retirar") {
      valor_ingresado = parseFloat(prompt("¿Cuanto desea retirar?"));

      suma = cuentas[1].saldo - valor_ingresado;

      while (suma < 10 || suma > 990) {
        valor_ingresado = parseFloat(prompt("Ingrese un valor correcto"));

        document.write(suma);

        suma = cuentas[1].saldo - valor_ingresado;
      }
    }

    if (suma >= 10 && suma <= 990) {
      document.write(valor_ingresado + " valor ingresado <br>");

      document.write(cuentas[1].saldo - valor_ingresado + " saldo total");
    }
  } else if (nombreUsuario == "Maui") {
    // let password = prompt("contraseña");

    if (password == "123") {
        window.location.replace("./CajeroAutomatico.html");
    //   Consultar_Ingresar_Retirar = prompt("Consultar  Ingresar  Retirar");
    }

    if (Consultar_Ingresar_Retirar == "Consultar") {
      document.write("saldo disponible: 67");
    } else if (Consultar_Ingresar_Retirar == "Ingresar") {
      valor_ingresado = parseFloat(prompt("¿Cuanto desea ingresar?"));

      let suma = valor_ingresado + cuentas[2].saldo;

      while (suma < 10 || suma > 990) {
        valor_ingresado = parseFloat(prompt("Ingrese un valor correcto"));

        suma = valor_ingresado + cuentas[2].saldo;
      }

      if (suma >= 10 && suma <= 990) {
        document.write(valor_ingresado + " valor ingresado <br>");

        document.write(valor_ingresado + cuentas[2].saldo + " saldo total");
      }
    } else if (Consultar_Ingresar_Retirar == "Retirar") {
      valor_ingresado = parseFloat(prompt("¿Cuanto desea retirar?"));

      suma = cuentas[2].saldo - valor_ingresado;

      while (suma < 10 || suma > 990) {
        valor_ingresado = parseFloat(prompt("Ingrese un valor correcto"));

        document.write(suma);

        suma = cuentas[2].saldo - valor_ingresado;
      }
    }

    if (suma >= 10 && suma <= 990) {
      document.write(valor_ingresado + " valor ingresado <br>");

      document.write(cuentas[2].saldo - valor_ingresado + " saldo total");
    }
  } else {
    document.write("Error dato no valido");
  }

   
});

// alert(numeroUsuario+" "+password);

function Acceso(form) {
  let valueForm = form.value;

  return valueForm;
}