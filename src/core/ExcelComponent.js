import {DomListener} from "@core/DomListener";

export class  ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
    this.emitter = options.emitter
    this.store = options.store
    this.subscribe = options.subscribe || []
    this.unsubscribes = []

    this.prepare()
  }

  //Настраиваем наш компонент до init
  prepare() {
  }

  //Возвращает шаблон компонента
  toHTML() {
    return ""
  }

  $dispatch(action) {
    this.store.dispatch(action)
  }

  storeChanged() {

  }

  //Уведомляем слушателей про событие event
  $emit(event, ...args) {
    this.emitter.emit(event, ...args)
  }

  //Подписываемся на событие event
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn)
    this.unsubscribes.push(unsub)
  }


  init() {
    this.initDOMListeners()
  }


  destroy() {
    this.removeDOMListeners()
    this.unsubscribes.forEach(unsub => unsub())
    // this.storeSub.unsubscribe()
  }

  isWatching(key) {
    return this.subscribe.includes(key)
  }

}
