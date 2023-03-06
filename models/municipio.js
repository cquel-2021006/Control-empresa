const { Schema, model } = require('mongoose');

const MunicipioSchema = Schema ({

    nombre: {
        type: String,
        required: [true, 'Por favor ingrese un Municipio']
    }

});

module.exports = model('Municipio', MunicipioSchema);