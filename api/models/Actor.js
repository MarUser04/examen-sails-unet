/**
 * Actor.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre_real: {
      type: 'string',
      unique: true,
      required: true
    },
    nombre_celebre: {
      type: 'string',
      unique: true,
      required: true
    },
    fecha_nacimiento: {
      type: 'date',
      required: true
    },
    sexo: {
      type: 'string',
      required: true,
      enum: ['m', 'f']
    },
    cantidad_oscares: {
      type: 'integer',
      required: true
    },
    catidad_nominaciones: {
      type: 'integer',
      required: true
    },
    participaciones: {
      collection: 'participacion'
    }
  }
};

