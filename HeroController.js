import HeroService from "./HeroService.js";

class HeroController {
  async create(req, res) {
    try {
      if(req.files){
        const superhero = await HeroService.create(req.body, req.files.Images);
        console.log(res.json(superhero))
        return superhero;
      } else {
        const superhero = await HeroService.create(req.body);
        console.log(res.json(superhero))
        return superhero;
      }
    } catch (e) {
      res.status(500).json(e)
    }
  }
  async getAll(req, res) {
    try {
      const page = parseInt(req.query.page);
      const limit = parseInt(req.query.limit);
      const heroes = await HeroService.getAll(page, limit)
      return res.json(heroes)
    } catch (e) {
      res.status(500).json(e)
    }
  }
  async getOne(req, res) {
    try {
      const hero = await HeroService.getOne(req.params.id)
      return res.json(hero)
    } catch (e) {
      res.status(500).json(e)
    }
  }
  async update(req, res) {
    try {
      const updatedHero = await HeroService.update(req.body)
      return res.json(updatedHero)
    } catch (e) {
      res.status(500).json(e)
    }
  }
  async delete(req, res) {
    try {
      const hero = await HeroService.delete(req.params.id)
      return res.json(hero)
    } catch (e) {
      res.status(500).json(e)
    }
  }
}


export default new HeroController()