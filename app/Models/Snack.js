


export class Snack{
  constructor (name, img, price){
    this.name = name,
    this.img = img,
    this.price = price
  }

  

  get Template(){
    return`
    <div class="col-md-6 bg-dark text-light border rounded shadow p-3 snack-img">
          <div class="text-center">
            <h2>${this.name}</h2>
            <img class="snack-img img-fluid" src="${this.img}" alt="">
            <h2>${this.price}</h2>
          </div>
        </div>
    
    `
  }
}
