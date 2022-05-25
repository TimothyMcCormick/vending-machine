
import { Snack } from "./Models/Snack.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  /** @type {import('./Models/Snack').Snack[]} */
  
  values = []

  total = 0


  

  snacks = [
    new Snack('Coca Cola', './assets/img/coca-cola.jpg', 2.50),
    new Snack('Flamin Hot Funyuns', './assets/img/flaming-hot-funyuns.webp', 5.75)
  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
