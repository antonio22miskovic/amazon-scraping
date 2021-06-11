// const {conexion, insertDB} = require('./src/mysql.js')
const {getUrls} = require('./src/urls.js')
const Scraping = require('./src/scraping.js')
const {clearResultArray, jsonWrite, newJson} = require('./src/helpers.js')
const cron = require('node-cron')

let urls = getUrls()
var result = []
var final_result = null

const run = async (urls) => {

	for await (let url of urls) {

		await new Scraping().init(url).then(res => {
			if (res.length !== 0) {
				for (var i = 0; i < res.length; i++) {
					result.push(res[i])
				}
			}
		})

	}
	console.log('resultado final:',result.length)
	await clearResultArray(result).then(res => {
		final_result = res
		console.log('resultado final limpio:',final_result.length)
	})
	await jsonWrite('./src/data/result.json',final_result)
}


// const iniciador = async (urls) => {
// 	let json = await require('./src/data/result.json')
// 	console.log('longitud del archivo',json)
// 	if (json.length  === 0) {
// 		run(urls)
// 	}
// }
run(urls)

// array = require('./src/data/watches_271.json')
// insertDB(array)

