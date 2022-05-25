import { ProxyState } from "../AppState.js";
import { snacksService } from "../Services/SnacksService.js"



function _drawSnack(){
  let snack = ProxyState.snacks
  let template = ''
  snack.forEach(s => template += s.Template)
  console.log('drawing snack', snack);
  document.getElementById('snack').innerHTML = template
}

export class SnacksController{
  constructor(){
    console.log('snacks controller loaded', ProxyState.snacks);
    _drawSnack()
  }
  addQuarter(){
    
    snacksService.addQuarter()
  }
}