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


const getEmployee = (id) => {

    return new Promise( (resolve, reject) => {

        const employee = employees.find( e => e.id === id )?.nombre;

        // if (employee) {
        //     resolve(employee);
        // } else {
        //     reject(`Empleado con ID ${ id } no existe`);
        // }

//con operadores ternarios
        (employee) 
            ? resolve(employee) 
            : reject(`Empleado con ID ${ id } no existe`);     
    } );
}

const getSalary = (id) => {
    return new Promise ( (resolve, reject) => {
        const salary = salarys.find( s => s.id === id)?.salary;

        (salary)
            ? resolve(salary)
            : reject(`No existe salarios para el ID: ${id}`);
    } )
}


id = 3;

// getEmployee(id)
//     .then( employee => console.log(employee) )
//     .catch( err => console.log(err));

// getSalary(id)
//     .then(salary => console.log(salary) )
//     .catch(err => console.log(err));



//manejando promesas anidadas

// getEmployee (id)
//     .then(employee => {

//         getSalary(id)
//             .then(salary => {
//                 console.log('El empleado:', employee, 'tiene un salario de:', salary);
//             })
//             .catch(err => console.log(err));
//     })
//     .catch(err => console.log(err));

let nombre;
getEmployee(id)
    .then(employee => {
        nombre = employee;
        return getSalary(id);
    })
    .then(salary => console.log('El empleado:', nombre, 'tiene un salario de:', salary))
    .catch(err => console.log(err))