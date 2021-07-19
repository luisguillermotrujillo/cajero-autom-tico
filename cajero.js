    let nombreUsuario = prompt("cuenta de usuario");

    let Consultar_Ingresar_Retirar;

    let valor_ingresado;


    let cuentas = [

        { nombre: "Mali", saldo: 200, password: 'helloworld' },

        { nombre: "Gera", saldo: 290, password: 'l33t' },

        { nombre: "Maui", saldo: 67, password: '123' }
    ];


    if (nombreUsuario == "Mali") {

        let password = prompt("contraseña");

        if (password == 'helloworld') {

            Consultar_Ingresar_Retirar = prompt("Consultar  Ingresar  Retirar");

        }

        if (Consultar_Ingresar_Retirar == "Consultar") {

            document.write("saldo disponible: 200");

        }

        else if (Consultar_Ingresar_Retirar == "Ingresar") {

            valor_ingresado = parseFloat(prompt("¿Cuanto desea ingresar?"));

            let suma = valor_ingresado + cuentas[0].saldo;

        while (suma < 10 || suma > 990) {

            valor_ingresado = parseFloat(prompt("Ingrese un valor correcto"));

            suma = valor_ingresado + cuentas[0].saldo;

        }
            
        if (suma >= 10 && suma <= 990) {

            document.write(valor_ingresado + " valor ingresado <br>");

            document.write(valor_ingresado + cuentas[0].saldo + " saldo total");

        }

    }

        else if (Consultar_Ingresar_Retirar == "Retirar") {

        valor_ingresado = parseFloat(prompt("¿Cuanto desea retirar?"));

        suma = cuentas[0].saldo -valor_ingresado;

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

}
    else if (nombreUsuario == "Gera") {

        let password = prompt("contraseña");

        if (password == 'l33t') {

            Consultar_Ingresar_Retirar = prompt("Consultar  Ingresar  Retirar");

        }

        if (Consultar_Ingresar_Retirar == "Consultar") {

            document.write("saldo disponible: 290");

        }

        else if (Consultar_Ingresar_Retirar == "Ingresar") {

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

    }

        else if (Consultar_Ingresar_Retirar == "Retirar") {

        valor_ingresado = parseFloat(prompt("¿Cuanto desea retirar?"));

        suma = cuentas[1].saldo -valor_ingresado;

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

}

    else if (nombreUsuario == "Maui") {

        let password = prompt("contraseña");

        if (password == '123') {

            Consultar_Ingresar_Retirar = prompt("Consultar  Ingresar  Retirar");

        }

        if (Consultar_Ingresar_Retirar == "Consultar") {

            document.write("saldo disponible: 67");

        }

        else if (Consultar_Ingresar_Retirar == "Ingresar") {

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

    }

        else if (Consultar_Ingresar_Retirar == "Retirar") {

        valor_ingresado = parseFloat(prompt("¿Cuanto desea retirar?"));

        suma = cuentas[2].saldo -valor_ingresado;

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

}

else {

    document.write("Error dato no valido");
    
    }

    // var formulario = 

    
    var formulario = document.getElementById('enviar').addEventListener("click", function(event) {
        event.preventDefault()
    });

    var numeroUsuario = document.getElementById('usuario')[0].value;

    var password = document.getElementById('password')[0].value;

    alert(numeroUsuario+" "+password);

    function Acceso(form) {

        let valueForm = form.value;

        console.log(valueForm);

    }

    Acceso(numeroUsuario)