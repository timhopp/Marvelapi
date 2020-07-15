import store from "../store.js";
import Marvel from "../Models/Marvel.js";

// @ts-ignore
let _api = axios.create({
  baseURL: 'https://gateway.marvel.com:443/v1/public/characters?apikey=2148bbf76c5acd7c1b486d33517c8d71&limit=100',
  timeout: 3000
})
// @ts-ignore
let _sandBoxApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/tim/heroes',
  timeout: 15000
})


class MarvelsService {
  constructor(){
    console.log('hi from service')
    this.getHeroes()
    this.getmyHeroes()
  }
          removeTeam(marvelId) {
            _sandBoxApi.delete('/'+ marvelId).then(res => {
              console.log(res.data);
              store.commit("myHeroes", store.State.myHeroes.filter(h => h._id != marvelId))}).catch(err => console.error(err))
          }
          addTeam(marvelId) {
            let newHero = store.State.marvels.find(marvel => marvel._id == marvelId)
            _sandBoxApi.post('', newHero).then(res => {
              console.log(res.data);
              this.getmyHeroes()
            }).catch(err => console.error(err))
          }

  getHeroes(){
    _api.get("").then(res => {
      console.log(res.data.data.results)
      store.commit("marvels", res.data.data.results.map(rawMarvelsData => new Marvel(rawMarvelsData)))
    }).catch(err => console.error(err))
  }

  getmyHeroes(){
    _sandBoxApi.get("").then(res=> {
      console.log(res.data);
      store.commit("myHeroes", res.data.data.map(rawMarvelsData => new Marvel(rawMarvelsData)))
    }).catch(err => console.error(err))
  }

}

const service = new MarvelsService();
export default service;