# SYNOPSIS
An example of how to write a plugin/add-on for levelweb.

# DESCRIPTION
Levelweb plugins are node modules, just `npm install` or
`git clone` your module into the `node_modules` folder
and run levelweb, your module will be added.

# USAGE

### A data method
A module can contain any arbitrary code that is run when 
the app is loaded. Exported methods are added either as 
RPC methods or http routes (depending on their type).

```js
exports.foo = { 

  //
  // 'readable', 'writable', 'sync', 'async', 'http`
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

### A simple http route
In cases where you need to use http from a module, simply export
a route and provide the type `http`. If the groups specified match
any of the user's groups, the method will be executed. `this` has
the context of the database and session.

```js
exports['/imageupload/:filename'] = {
  type: 'http',
  groups: ['user'],
  method: function(req, res, urlParams) {
  
    var db = this.db
    var session = this.session
  
  // handle a file upload
  }
}
```


# EXAMPLE
![screenshot](/example.png)
