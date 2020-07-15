// BCW-SERVER SCHEMA
// var schema = new Schema({
//     name: { type: String, required: true },
//     img: { type: String, required: true },
//     description: { type: String, required: true },
//     user: { type: String, required: true }
// })



export default class Marvel {
  constructor(data) {
      this.name = data.name
      this.img = data.img || data.thumbnail.path + '.' + data.thumbnail.extension
      this.description = data.description 
      this._id = data._id || data.id
      this.user = data.user
  }

  get Template() {
    let Template = `
    <div class="card bg-fun m-3 p-3 rounded">
    <h3>${this.name}</h3>
    <img class="img-fluid" src="${this.img}"/>
    <p>${this.description}</p>
    `

    if(this.user){
      Template += `
      <button class = "btn btn-danger" onclick="app.marvelsController.removeTeam('${this._id}')">Remove from Team</button>
      </div>
      `
    } else {
      Template += `
      <button class = "btn btn-success" onclick="app.marvelsController.addTeam('${this._id}')">Add to Team</button>
      </div>
      `
    }
    
      return Template
  }
}