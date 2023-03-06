const { Schema, model } = require('mongoose');

const EmpresaSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre de la empresa es obligatorio']
    },
    correo: {
        type: String,
        required: [true, 'El correo de la empresa es obligatorio' ],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'El password de la empresa es obligatorio' ]
    },
    tipo: {
        type: String,
        required: true,
    },
    estado: {
        type: Boolean,
        default: true
    }
});


module.exports = model('Empresa', EmpresaSchema);