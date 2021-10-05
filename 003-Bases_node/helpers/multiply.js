const fs = require('fs');

const createFile = async(table = 5, listar = false, finalTable) => {

    try {
        const fin = finalTable;

        
        let salida= '';    

        for(let i = 0; i <= fin; i++) {
            salida += `${table} x ${i} = ${table * i} \n`;
        }

        fs.writeFileSync( `./files/table_the_multiply_${table}.txt`, salida)

        if (listar) {
            console.log(`Imprimiendo la tabla del ${table} `);
            console.log(salida);
        }

        return `tabla de la base ${table} creada`;
        
    } catch(error) {
        throw error;
    }

}

module.exports = {
    createFile
}