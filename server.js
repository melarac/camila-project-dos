var express = require('express')
var logger = require('morgan')
var bodyParser = require('body-parser')

var app = express()

app.set('view engine', 'ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(logger('dev'))
app.set('views', __dirname + '/public')

app.get('/', function(request, response){
    // response.send('<h1>Heeeyyyyy</h1>')
    response.render('home.ejs')
})

app.post('/', function(request, response){
    console.log(request.body)
    
    response.render('results.ejs', {
        data: 'bacon and eggs',
        gerrod: 'Gerrod needs a uniform'
    })
})

app.get('/rjay', function(request, response){
    response.render('rjay.ejs')
})

var port = process.env.PORT || 8080

app.listen(port, function(){
    console.log('App running on port ' + port)
})
Add Comment Collapse



