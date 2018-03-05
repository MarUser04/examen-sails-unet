/**
 * ActorController
 *
 * @description :: Server-side logic for managing actors
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	home: async (req, res) => {
    let r = await Actor.find()
    res.view('ListadoActores', {
      actores: r
    })
  },
  create: async (req, res) => {
    let { 
      nombreReal,
      nombreCelebridad,
      date,
      cantidad,
      nominaciones,
      sexo
     } = req.body

    if (!nominaciones || !nombreCelebridad || !nombreReal || !date || ! cantidad || !sexo) {
      res.redirect('/actor')
    }
    else {
      try {
        let r = await Actor.create({
          'nombre_real': nombreReal,
          'nombre_celebre': nombreCelebridad,
          'fecha_nacimiento': date,
          'sexo': sexo,
          'cantidad_oscares': cantidad,
          'catidad_nominaciones': nominaciones
        })
  
        res.redirect('/participacion/create')
      }
      catch (err) {
        res.json(err)
      }
    }
  },
  editInDetails: async (req, res) => {
    const id = req.query.id

    if (!id) {
      res.redirect('/actor')
    }
    else {
      let actorDefault = await Actor.findOne(id).populate('participaciones')
      if (!actorDefault) {res.redirect('/actor')}
      res.view('ActoreditInDetails', {
        actorDefault
      })
    }
  },
  update: async (req, res) => {
    res.json(req.body)
  }
};

