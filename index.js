
//
// write any arbitrary node stuff here to run when the app is loaded.
// exported methods get added as methods to the database so they can
// be used from the browser.
//

exports.foo = { 

  //
  // 'readable', 'writable', 'sync', 'async'
  //
  type: 'async', 

  //
  // any arbitrary group names to compare when the method is called
  //
  groups: ['admin', 'user'],

  //
  // if your method's `type` is async, it should have a callback
  //
  method: function(somevalue, callback) {

    // `this` is a reference to the database instance
    var db = this

    // now maybe use an actual database method
    db.put(somevalue, callback)
  }
}
