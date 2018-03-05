/**
 * ActorController
 *
 * @description :: Server-side logic for managing actors
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	home: (req, res) => {
    res.view('ListadoActores')
  },
  create: (req, res) => {
    res.json({
      on: 'RegistroActores',
      type: 'post'
    })
  }
};

