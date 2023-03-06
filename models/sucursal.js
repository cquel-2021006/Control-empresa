const {Schema, model} = require('mongoose');

const SucursalSchema = Schema({

    nombre: {
        type: String,
        required: [true, 'El nombre de la sucursal es obligatorio']
    },
    estado: {
        type: boolean,
        default: true
    }

})

module.exports = model('Sucursal', SucursalSchema)