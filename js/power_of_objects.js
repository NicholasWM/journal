const person = {}

Object.defineProperties(person , {
  _name: {
      value: "Nicholas",
      enumerable: true,
      configurable: true,
      writable: true,
  },
  name: {
      get: function() {
          console.log('Reading name', this)
          return this._name
      },
      set: function(value) {
          console.log('Setting name', this)
          this._name = value
      },
      enumerable: true,
      configurable: true
  }
})
