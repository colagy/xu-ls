'use strict';

const ls = localStorage

module.exports = {
  get(k) {
    let v = ls.getItem(k)
    if (!v) {
      return undefined
    }
    const t = v.split(':-')[0]
    v = v.split(':-')[1]
    switch (t) {
      case 'string':
        return v
        break;
      case 'number':
        return parseFloat(v)
        break;
      case 'object':
        return JSON.parse(v)
        break;
      case 'boolean':
        return v === 'false' ? false : true
        break;
      default:
        return v
        break;
    }
  },
  set(k, v) {
    const t = typeof v
    if (t === 'object') {
      v = JSON.stringify(v)
    }
    ls.setItem(k, t + ':-' + v)
  }
}
