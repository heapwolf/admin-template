var fs = require('fs')

//
// html you want to add for this module
//
exports.html = fs.readFileSync('../markup/index.html')

//
// css you want to add to the page for this module
//
exports.css = fs.readFileSync('../css/index.css')

//
// uses SS-Standard icon set by default
//
exports.icon = 'foo'

//
// a label for the navigation tab
//
exports.label = 'Foobar'

//
// called when the module is loaded and the DOM is ready
//
exports.load = function(database) {

  console.log('LOADING EVENT')
}

//
// called when the navigation for this module is clicked
//
exports.click = function(database) {

  console.log('CLICKING EVENT')

  var db = database.get()

  db.foo('foo', function(err, data) {

    console.log('DATA EVENT')
    console.log(err || data)
  })

}

//
// in case you want to do some cleanup when the user navigates away
//
exports.leave = function(database) {

  console.log('LEAVING EVENT')
}
