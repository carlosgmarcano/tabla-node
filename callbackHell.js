const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
]

const getSalarios = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find((item) => item.id === id)
        salario ? resolve(salario.salario) : reject(`No existe la persona con id: ${id}`)
    })
}

const idPersona = 5;

getSalarios(idPersona)
    .then(empleado => console.log(empleado))
    .catch(err => console.log(err))