const getUsuaruioById = (id, callback) => {

    const usuario = {
        id,
        nombre: 'Daniel',
    }

    setTimeout( () => {
        callback(usuario)
    }, 2500 )

}

getUsuaruioById(10, (usuario) => {
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
} )