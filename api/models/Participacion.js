/**
 * Participacion.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    titulo: {
      type: 'string',
      required: true,
      unique: true
    },
    ano_realizacion: {
      type: 'date',
      required: true
    },
    duracion_mn: {
      type: 'integer',
      required: true
    },
    papel: {
      type: 'string',
      required: true
    },
    actor: {
      model: 'actor'
    }
  }
};

