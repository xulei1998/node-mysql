var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '192.168.99.100',
  user     : 'root',
  password : '123456'
});

connection.connect(); //连接数据库 客户端连服务器
//创建数据库lucy 用utf8mb4格式
//若不存在，则创建数据库lucy，若存在则无需重新创建
connection.query('CREATE DATABASE IF NOT EXISTS lucy DEFAULT CHARSET utf8mb4 COLLATE utf8mb4_unicode_520_ci;', function (error, results, fields) {
  if (error) throw error;
  console.log(results[0]);
});
connection.query('use lucy;')
//创建user表
connection.query(`CREATE TABLE IF NOT EXISTS user(
  name text,
  age int
);`, function (error, results, fields) {
  if (error) throw error;
  console.log(results[0]);
});

connection.end();