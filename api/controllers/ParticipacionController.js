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
        select: actors,
        on: req.query.id || 0
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
          'actor_id': actor
        })

        res.redirect('/actor')
      } catch(err) {
        res.json({
          error: err
        })
      }
    }
  },
  list: async (req, res) => {
    let all = await Participacion.find()

    res.view('Todas', {
      all
    })
  },
  details: async (req, res) =>{ 
    const { id } = req.query
    if (!id) {
      res.redirect('/')
    }
    
    let that = await Participacion.findOne(id)
    res.view('DetailsParticipate', {
      that
    })
  },
  update: async (req, res) => {
    if (!req.body.id) {
      res.redirect('/')
    }

    let r = await Participacion.update(req.body.id, req.body)
    res.redirect('/participacion/list')
  }
};

