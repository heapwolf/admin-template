# SYNOPSIS
An example of how to write a plugin/add-on for levelweb.

# DESCRIPTION
Levelweb plugins are node modules, just `npm install` or
`git clone` your module into the `node_modules` folder
and run levelweb, your module will be added.

# USAGE

### A data method
write any arbitrary node stuff in a module to run when the app is loaded.
exported methods get added as methods to the database so they can be used 
from the browser.

```js
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

    // `this` has a reference to the database instance
    // as well as the session object `{ sessionId='', groups=[], user='' }`

    var db = this.db
    var session = this.session

    // now maybe use an actual database method
    db.put(somevalue, callback)
  }
}
```

A simple http route

```js
exports['/imageupload/:filename'] = {
  type: 'http',
  groups: ['user'],
  function(req, res) {
  
    var db = this.db
    var session = this.session
  
  // handle a file upload
  }
}
```


# EXAMPLE
![screenshot](/example.png)
