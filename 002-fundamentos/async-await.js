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

const getInfoUser = async(id) => {

    try {

        const employee = await getEmployee(id);
        const salary = await getSalary(id);

        return `El salario del empleado ${employee} es de ${salary}`;

    } catch(error) {

        throw error;

    }

}

const id = 4;

getInfoUser(id)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));

