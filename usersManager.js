const crypto = require("crypto") //Llamamos a crypto dentro de un constante.

class UsersManager{
    //Atributo estatico para almacenar usuarios.
    static Usuarios = []

    //Metodo para crear un nuevo usuario.
    static CrearUsuario(usuario){
        //Hash de la contraseña con el modulo crypto.
        const hashedPassword = crypto
        .createHash('sha256')
        .update(usuario.Contraseña)
        .digest('hex')

        const newUser = {
            Nombre: usuario.Nombre, //Recibe el valor de usuario.
            Apellido: usuario.Apellido,
            NombreUsuario: usuario.NombreUsuario,
            Contraseña: hashedPassword //Nos permite guardar la contraseña hasheada.
        }

        //Agregar el usuario al arreglo.
        this.Usuarios.push(newUser)
    }

    //Metodo para mostrar los usuarios.
    static MostrarUsuarios(){

        console.log("Usuarios registrados")

        this.Usuarios.forEach(usuario =>{
            console.log(`[Nombre]: ${usuario.Nombre}, [Apellido]: ${usuario.Apellido}, [NombreUsuario]: ${usuario.NombreUsuario}`)
            console.log(`[Contraseña]: ${usuario.Contraseña}`)
        })
    }

    //Metodo para validar usuario y contraseña.
    static validarUsuario(nombreUsuario, contraseña){

        //Buscamos el usuario dentro del arreglo.
        const usuario = this.Usuarios.find(u => u.NombreUsuario === nombreUsuario)

        if(!usuario){  //Validamos q el usuario exista.
            console.log("Usuario no encontrado")
            return
        }

        //Hasheamos la contraseña del parametro y compararla con la almacenada.
        const hashedPassword = crypto 
        .createHash('sha256')
        .update(contraseña)
        .digest('hex')

        //Comparamos las constraseñas y arrojamos error.
        if (usuario.Contraseña === hashedPassword) {
            console.log("Logueado")
        }else{
            console.log("Contraseña incorrecta")
        }
    }
}

//Ejemplo de usos.

//Creamos un usuario de ejemplo.
UsersManager.CrearUsuario({
    Nombre: "Facundo",
    Apellido: "Rainaudi",
    NombreUsuario: "cafu",
    Contraseña: "FacuRai"
})

UsersManager.CrearUsuario({
    Nombre: "Kevin",
    Apellido: "Farias",
    NombreUsuario: "Fabio",
    Contraseña: "Kevin123"
})

//Mostramos los usuarios.
UsersManager.MostrarUsuarios()

//Validamos un usuario (correcto).
UsersManager.validarUsuario("cafu", "FacuRai")