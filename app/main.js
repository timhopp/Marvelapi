import ValuesController from "./Controllers/ValuesController.js";
import MarvelsController from "./Controllers/MarvelsController.js";

class App {
  marvelsController = new MarvelsController();
}

window["app"] = new App();
