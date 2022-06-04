import * as uuid from "uuid";
import * as path from "path";

class FileService{
   saveFile(file){
    try {
      const fileName = uuid.v4() + '.jpeg';
      const filePath = path.resolve('static', fileName); //Todo --> нужно проверить весь файл
      file.mv(filePath)
      return fileName
    } catch (e) {
      console.log(e)
    }
  }
}

export default new FileService()