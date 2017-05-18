var request = require('request')
var google = require('googleapis')

var scope = 'https://www.googleapis.com/auth/devstorage.read_write'

var key = require('./APIProject-876629c8738e.json')
function test1 () {
  var jwtClient = new google.auth.JWT(
    key.client_email,
    null,
    key.private_key,
    [scope],
    null
  )
  console.log(jwtClient.gToken())
  jwtClient.authorize(function (err, tokens) {
    if (err) {
      console.log(err)
      return
    }
    console.log(jwtClient)
  })
}
var jwt = require('jsonwebtoken')

function test2 () {
  var token = jwt.sign({
    'iss': '761326798069-r5mljlln1rd4lrbhg75efgigp36m78j5@developer.gserviceaccount.com',
    'scope': 'https://www.googleapis.com/auth/prediction',
    'aud': 'https://www.googleapis.com/oauth2/v4/token',
    'exp': 1328554385,
    'iat': 1328550785
  }, key.private_key, { algorithm: 'RS256' })

  console.log(token)

  var formData = {
    grant_type: 'urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer',
    assertion: token

  }
  request.post({ url: 'https://www.googleapis.com/oauth2/v4/token', form: formData }, function optionalCallback (err, httpResponse, body) {
    if (err) {
      return console.error('upload failed:', err)
    }
    console.log('Upload successful!  Server responded with:', body)
  })
}
test1()
test2()
