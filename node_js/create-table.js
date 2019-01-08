var mysql = require('mysql');

const connection = mysql.createConnection({
    host     : 'localhost',
    port     : 3306,
    user     : 'root',
    password : 'example',
    database : 'desafio_leads2b'
});

connection.connect(function(err){
    if(err) return console.log(err);
    console.log('conectou!');
    createTable(connection);
})

function createTable(conn){
      const sql = "CREATE TABLE IF NOT EXISTS desafio_leads2b.funcionario ("+
                    "id INT NOT NULL AUTO_INCREMENT,"+
                    "nome VARCHAR(100) NOT NULL,"+
                    "cpf VARCHAR(20) NOT NULL,"+
                    "cargo VARCHAR(45) NOT NULL,"+
                    "PRIMARY KEY (id),"+
                    "UNIQUE INDEX id_UNIQUE (id ASC),"+
                    "UNIQUE INDEX cpf_UNIQUE (cpf ASC));";
      
      conn.query(sql, function (error, results, fields){
          if(error) return console.log(error);
          console.log('criou a tabela!');
          addRows(conn);
      });
}

function addRows(conn){
  const sql = "INSERT INTO desafio_leads2b.funcionario (nome, cpf, cargo) VALUES ?";
  const values = [
        ['EDILSON MACEDO DE CARVALHO', '5901305230', 'SERVENTE DE LIMPEZA'],
        ['MARIA DE FATIMA DA SILVA', '43973620334', 'COPEIRA'],
        ['JOSE RIBAMAR BATISTA DA SILVA', '99752883320', 'MOTORISTA'],
        ['MARIA CREUSA DE AMORIM', '62636111387', 'AUXILIAR DE SERVICOS'],
        ['MARIA KEILANE DE SOUSA SILVA', '1741249376', 'RECEPCIONISTA'],
        ['ANTONIO DIEGO DA SILVA LIMA', '1417543388', 'MOTORISTA'],
        ['MARIA DE FATIMA DA COSTA BARBOZA', '14534428391', 'AUXILIAR DE SERVICOS'],
        ['DIANA DE ARAUJO SOUSA', '97745855349', 'AUXILIAR DE SERVICOS'],
        ['ADELMA PEREIRA LIMA', '65087682391', 'RECEPCIONISTA'],
        ['FRANCIMARY LOPES DE SOUSA', '93970420334', 'RECEPCIONISTA'],
        ['MARIA LUZIA PASCOA', '22509755153', 'RECEPCIONISTA'],
        ['NADJA DIONNE DE SOUSA', '96159430378', 'RECEPCIONISTA'],
        ['RAIMUNDA DA COSTA SEPULVEDA NASCIMENTO', '79772129353', 'RECEPCIONISTA'],
        ['HELLYSSON ANDRE SOUSA LEMOS', '3684566330', 'OPERADOR DE ÁUDIO'],
        ['ANTONIA DA CRUZ RIBEIRO PASCOA', '1220876313', 'SERVENTE DE LIMPEZA'],
        ['ERNANDES FERREIRA DOS SANTOS', '4368736303', 'SERVENTE DE LIMPEZA'],
        ['EXPEDITO DE SOUSA E SILVA', '89867700325', 'SERVENTE DE LIMPEZA'],
        ['JANAYNA MARIA NUNES BARBOSA', '75755521387', 'SERVENTE DE LIMPEZA'],
        ['JEFFERSON RODRIGUES DIAS', '46264590304', 'SERVENTE DE LIMPEZA'],
        ['MANOEL DE JESUS PAZ SILVA', '91165180391', 'SERVENTE DE LIMPEZA'],
        ['MARCELO CORREIA CAMPOS', '2367893330', 'SERVENTE DE LIMPEZA'],
        ['MARIA DA CONCEICAO ASSUNCAO DA SENHORA', '1010927337', 'SERVENTE DE LIMPEZA'],
        ['MARIA FRANCISCA GOMES DOS SANTOS', '74498070330', 'SERVENTE DE LIMPEZA'],
        ['REGINALDO CARDOSO MONTEIRO DOS SANTOS', '86153889387', 'SERVENTE DE LIMPEZA'],
        ['SEBASTIAO DE SOUSA FRAZAO', '2110617357', 'SERVENTE DE LIMPEZA'],
        ['ANTONIA PEREIRA DA SILVA', '18146295304', 'COPEIRA'],
        ['DENISE RODRIGUES DE ARAUJO', '78970539387', 'COPEIRA '],
        ['DEUSELINA AMBROSIO DE SOUSA', '574796312', 'COPEIRA '],
        ['ANTONIO JOSE DE SOUSA SILVA', '18210945300', 'GARÇOM '],
        ['MAURO PAULO DA SILVA', '743451333', 'ASCENSORISTA '],
        ['FRANCISCA DE PAULA DA SILVA FILHA', '75466902349', 'TELEFONISTA '],
        ['MARIA HELENA FONTINELE', '82706220104', 'TELEFONISTA '],
        ['SOLANGE MARIA DE SOUSA DIAS', '34130535315', 'TELEFONISTA '],
        ['ALLYSON PEREIRA LEMOS', '73260762353', 'MOTORISTA '],
        ['DHIEGO RIBEIRO DE OLIVEIRA', '67163041349', 'MOTORISTA'],
        ['MARCO ANTONIO BONA VASCONCELOS', '47039841304', 'MOTORISTA '],
        ['REGINALDO FERREIRA PEREIRA', '45394121320', 'MOTORISTA '],
        ['EDIVALDO FERREIRA DOS SANTOS FILHO', '488644399', 'MOTOQUEIRO'],
        ['JOSE ALBERTO SANTOS DE MOURA', '87729369320', 'MOTOQUEIRO']
    ];
  conn.query(sql, [values], function (error, results, fields){
          if(error) return console.log(error);
          console.log('adicionou registros!');
          conn.end();//fecha a conexão
      });
}