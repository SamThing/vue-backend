require("dotenv-safe").load();
var jwt = require('jsonwebtoken');
var http = require('http');
const express = require('express')
var cors = require('cors')
var app = express()
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const helmet = require('helmet');
var mysql = require('mysql');

function execSQLQuery(sqlQry, res){
  const connection = mysql.createConnection({
    host     : 'localhost',
    port     : 3306,
    user     : 'root',
    password : 'example',
    database : 'desafio_leads2b'
  });
 
  connection.query(sqlQry, function(error, results, fields){
      if(error) 
        res.json(error);
      else
        res.json(results);
      connection.end();
      console.log('executou!');
  });
}

app.use(cors())
app.use(logger('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
 
var server = http.createServer(app);
server.listen(3000, "0.0.0.0");

function verifyJWT(req, res, next){
  var token = req.headers['x-access-token'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, process.env.SECRET, function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    
    // se tudo estiver ok, salva no request para uso posterior
    req.userId = decoded.id;
    next();
  });
}

app.get('/funcionarios', verifyJWT, (req, res, next) => {
  execSQLQuery('SELECT * FROM funcionario', res);
})

app.post('/login', (req, res, next) => {
  if(req.body.user === 'leads2b' && req.body.pwd === 'senha1234'){
    const id = 1; //esse id viria do banco de dados
    var token = jwt.sign({ id }, process.env.SECRET, {
      expiresIn: 300 // expires in 5min
    });
    res.status(200).send({ auth: true, token: token });
  } else {
    res.status(401).send('Login inválido!');
  }
})

//curl --data-urlencode "user=luiz" --data-urlencode "pwd=123" localhost:3000/login && echo ''