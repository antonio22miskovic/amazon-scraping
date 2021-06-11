
// const mysql = require('mysql')
// const dateTime = require('node-datetime');

// const conexion = mysql.createConnection({
// 	host: 'localhost',
//   database: 'amazon_scraping',
//   user:'test',
//   password:'heavy'
// })

// conexion.connect( (error) => {
// 	if (error) {
// 		throw error
// 	}else{
// 		console.log('conexion exitosa')
// 	}

// })

// const insertDB = async (values) => {

//   console.log("Connected!");
// 	var dt = dateTime.create();
// 	var created_at = dt.format('Y-m-d H:M:S');
// 	console.log(created_at);

//   var ordenar = []
//   for await (let item of values){
// 	  let value = [
// 			item.url,
// 			item.sku,
// 			item.img,
// 			item.category,
// 			item.name,
// 			item.availability,
// 			item.brand,
// 			item.weight,
// 			item.now_price,
// 			item.price_real,
// 			item.now_currente_price,
// 			item.currente_price_real,
// 			item.tax,
// 			item.rating,
// 			item.discount,
// 			item.description,
// 			created_at
// 	   ]
// 	  ordenar.push(value)
//   }
//   console.log(ordenar[1].length)
//   var sql = `INSERT INTO products (url,	sku,	img, category, name,	availability,	brand,	weight,	now_price, price_real,	now_currente_price,	currente_price_real,	tax,	rating,	discount,	description, created_at) VALUES ? `
//   await conexion.query(sql, ordenar[1], (err, results, fields) => {
// 	  if (err) {
// 	    return console.error(err.message);
// 	  }
// 	  // get inserted rows
// 	  console.log('Row inserted:' + results.affectedRows);
// 	});
// 	conexion.end();
// }



// module.exports = {conexion, insertDB}