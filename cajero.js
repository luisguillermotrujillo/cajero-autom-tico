  let botonIngresar = document.getElementById("ingresar");

  let nombreUsuario = document.getElementById("usuario");

  let password = document.getElementById("password");

  let cuentas = [

    { nombre: "Mali", saldo: 200, password: "helloworld" },

    { nombre: "Gera", saldo: 290, password: "l33t" },

    { nombre: "Maui", saldo: 67, password: "123" },
  ];

  document.getElementById("Ingresar").addEventListener("click", function (event) {

    event.preventDefault();

    nombreUsuario = acceso(nombreUsuario);

    password = acceso(password);

    if (nombreUsuario == "Mali" && password == "helloworld") {

      localStorage.setItem("nombreUsuario", nombreUsuario);

      localStorage.setItem("password", password);

      window.location.replace("./CajeroAutomatico.html");

    } 
  
    else if (nombreUsuario == "Gera" && password == "l33t") {

      localStorage.setItem("nombreUsuario", nombreUsuario);

      localStorage.setItem("password", password);

      window.location.replace("./CajeroAutomatico.html");

    } 
  
    else if (nombreUsuario == "Maui" && password == "123") {

      localStorage.setItem("nombreUsuario", nombreUsuario);

      localStorage.setItem("password", password);

      window.location.replace("./CajeroAutomatico.html");

    } 
  
    else {

      document.write("Error dato no valido");

    }

  });

  function acceso(form) {

    let valueForm = form.value;

    return valueForm;

  }
