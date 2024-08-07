
function numerosAleatorios(total){

    return new Promise((resolve, reject)=>{

            const objeto = []

            for (let i = 0; i < total; i++) {
                objeto.push(Math.floor(Math.random() * 20))
            }

        if(objeto){
            resolve(objeto)
        }else{
            reject("No se puede obtener los datos")
        }
    })
}

async function mostrarNumeros(){

    try{

        const objeto = await numerosAleatorios(5)  //Llamado a la base de datos.

        console.log("Generacion de numeros realizada")
        console.log("Id: ", objeto)

    }catch(error){
        
        console.log("Error al obtener datos", error)
    }
}

mostrarNumeros()