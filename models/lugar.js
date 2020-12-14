const { Schema, model } = require('mongoose');

const LugarSchema = Schema({

    encabezado: {
        titulo: {
            type: String,
            required: true
        },
        imagen: {
            type: String,
            required: true
        }
    },

    contenido: {
        descripcion: {
            type: String,
            required: false,
            default: "Sin descripcion"
        },
        de_pago: {
            type: Boolean,
            required: true,
        },
        precio: {
            type: Number,
            required: false,
            default: 0.0
        },
        ubicacion: {
            type: String,
            required: false,
            default: "25.82113367733769, -108.22177007685517" // Sinaloa de leyva
        }
    },

    comentarios: [{
        usuario: {
            type: String,
            required: false
        },
        fecha: {
            type: Date,
            required: false,
            default: Date.now()
        },
        comentario: {
            type: String,
            required: false
        }
    }],

    me_gusta: [{
        usuario: {
            type: String,
            required: false
        },
        fecha: {
            type: Date,
            required: false,
            default: Date.now()
        },
    }],

    imagenes: [{
        titulo: {
            type: String,
            required: false
        },
        descripcion: {
            type: String,
            required: false,
            default: "Sin descripcion"
        },
        imagen: {
            type: String,
            required: false
        }
    }],

    creado_por: {
        id: {
            type: String,
            required: true
        },
        nombre: {
            type: String,
            required: true
        },
        imagen: {
            type: String,
            required: false
        }
    },

    fecha_creacion: {
        type: Date,
        required: false,
        default: Date.now()
    },

    estatus: {
        type: Number,
        default: 1,
        required: false
    }

});


LugarSchema.method('toJSON', function () {
    const {__v, _id, ...object} = this.toObject();
    object.id = _id;
    return object;
});

module.exports = model('Lugar', LugarSchema);