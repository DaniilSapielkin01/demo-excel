export class Emitter {
  constructor() {
    this.listeners = {}
  }

//Уведомляем слушателей если они есть
  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      return false
    } else {

      this.listeners[event].forEach(listener => {
           listener(...args)
         }
      )
    }


  }

  //Добавляем слушателя
  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || []
    this.listeners[event].push(fn)
    //функция позволяющая отписатся
    return () => {
      this.listeners[event] =
         this.listeners[event].filter(listener => listener !== fn)
    }
  }
}

// const emitter = new Emitter()
// emitter.subscribe('vladilen', data => console.log("Sub => ", data))
//
// emitter.emit('vladilen', 11)
// emitter.emit('11', 42)
