import { ProxyState } from "../AppState.js"



class SnacksService{

  
  addQuarter(){
    ProxyState.total += .25
    document.getElementById('money-total').innerText = ProxyState.total.toFixed(2).toString()
  }
  }



export const snacksService = new SnacksService()