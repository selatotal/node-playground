var jwt = require('jsonwebtoken')
var token = 'YOUR-JWT-TOKEN-HERE'

try {
    var decoded = jwt.verify(token, 'YOUR-SECRET-HERE')
    console.log('OK: ', decoded)
} catch (err) {
    console.log('Error: ', err)
}
