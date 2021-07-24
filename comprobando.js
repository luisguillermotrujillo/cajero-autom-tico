    class enlazar{
    constructor(nombre,saldo, password){
        this.nombre = nombre;
        this.saldo = saldo;
        this.password = password;
    }
    let cuentas = [

    { nombre: "Mali", saldo: 200, password: "helloworld" },

    { nombre: "Gera", saldo: 290, password: "l33t" },

    { nombre: "Maui", saldo: 67, password: "123" },
    ];

    function verificar() {
        nombre=document.getElementById("nombre").value
        for (let i = 0; i < cuentas.length; i++) {
            if (nombreUsuario == "Mali" && password == "helloworld") {

    localStorage.setItem("nombreUsuario", nombreUsuario);

    localStorage.setItem("password", password);

    window.location.replace("./CajeroAutomatico.html");

    } 
    
        }
    }

    function verificar() {
        password=document.getElementById("password").value
        for (let i = 0; i < cuentas.length; i++) {
            if (nombre == password) {
                pront("bienvenido")
            }
            
        }
    }
    console.log(verificar());
