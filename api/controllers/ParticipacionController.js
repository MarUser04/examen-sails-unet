/**
 * ParticipacionController
 *
 * @description :: Server-side logic for managing participacions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: async (req, res) => {
    try {
      let actors = await Actor.find({
        select: ['id', 'nombre_real']
      })
      
      res.view('ParticipacionForm', {
        select: actors
      })
    }
    catch (err) {
      res.json(err)
    }
  },
  add: async (req, res) => {
    const {
      titulo,
      anoR,
      number,
      papel,
      actor // id
    } = req.body

    if (!titulo || !anoR || !number || !actor) {
      res.redirect('/participacion/create')
    }
    else {
      try {
        let r = await Participacion.create({
          'titulo': titulo,
          'ano_realizacion': anoR,
          'duracion_mn': number,
          'papel': papel,
          'actor': actor
        })

        res.redirect('/actor')
      } catch(err) {
        res.json({
          error: err
        })
      }
    }
  }
};

