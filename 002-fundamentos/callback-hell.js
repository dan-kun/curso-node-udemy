const { Console } = require("console");

let idFind = 6;

const employees = [

    {
        id: 1,
        nombre: 'Daniel'
    },

    {
        id: 2,
        nombre: 'Enrique'
    },

    {
        id: 3,
        nombre: 'Fernando'
    },
]

const salarys = [

    {
        id: 1,
        salary: 1000
    },
    
    {
        id: 2,
        salary: 2000
    },
]

const getEmployee = (id, callback) => {

    const employee = employees.find( e => e.id === id )?.nombre;

    if (employee) {

        callback(null, employee);

    } else {
        callback(`Empleado con ID ${ id } no existe`);
    }

    
}

const getSalary = (id, callback) => {
    
    const salary = salarys.find( s => s.id === id )?.salary;

    if (salary) {
        
        callback(null, salary);

    } else {

        callback(`No existe salarios para el ID: ${id}`);

    }

}

getEmployee( idFind, ( err, employee) => {

    if (err) {
        console.log('ERROR!');
        return console.log(err);
    } 

    getSalary( idFind, (err, salary) => {

        if (err) {
            console.log('ERROR buscando el salario!!!');
            return console.log(err);
        }

        console.log(' El empleado', employee, 'tiene un salario de: ', salary);
    
    });

} );



