import MarvelsService from "../Services/MarvelsService.js"
import store from "../store.js"

//Private
function _draw() {
  let template = ''
  let heroTemplate = ''
  let marvels = store.State.marvels;
  let myHeroes = store.State.myHeroes;
  //How to only draw characters that have a description
  // if(marvels.forEach(marvel => marvel.description.typeof() == 'string')
  // store.State.myHeroes.filter(h => h._id != marvelId))
  let filtered = store.State.marvels.filter(m => m.description != '' && m.img != "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg")
  filtered.forEach(marvel => template += marvel.Template)
  myHeroes.forEach(hero => heroTemplate += hero.Template)
  document.getElementById('marvels').innerHTML = template
  document.getElementById('myHeroes').innerHTML = heroTemplate
}

//Public
export default class MarvelsController {
  constructor() {
    store.subscribe("marvels", _draw);
    store.subscribe("myHeroes", _draw);
    console.log('hi from controller')
  }
 

  addTeam(marvelId){
    MarvelsService.addTeam(marvelId)
  }

  removeTeam(marvelId){
    MarvelsService.removeTeam(marvelId)
  }


}