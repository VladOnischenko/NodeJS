import SuperHero from "./Superhero/Superhero.js";
import fileService from "./FileService.js";

class HeroService {
  async create(hero, picture) {
    const fileName = fileService.saveFile(picture)
    if(fileName){
      return await SuperHero.create({ ...hero, Images: fileName });
    }

    return await SuperHero.create({ ...hero });
  }

  async getAll(page = 1, limit = 5) {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit

    return SuperHero.find().limit(endIndex).skip(startIndex)
  }
  async getOne(id) {
    if (!id) {
      throw new Error("Id is not defined");
    }

    return await SuperHero.findById(id);
  }
  async update(hero) {
    if (!hero._id) {
      throw new Error("Id is not defined");
    }

    return await SuperHero.findByIdAndUpdate(hero._id, hero, { new: true });
  }
  async delete(id) {
    if (!id) {
      throw new Error("Id is not defined")
    }

    return await SuperHero.findByIdAndDelete(id);
  }
}


export default new HeroService();