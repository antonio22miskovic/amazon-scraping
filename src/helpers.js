const fs = require('fs')

const clearString = (text) => { // limpia el formato obtenido del DOM
	if (text === null) {
		return null
	}
	return text.trim()
}

const clearStringPrice = async (text) => {
	if (text === null) {
		return null
	}
	let array = await text.trim().split('U$S')
	let data =  await {
		now: array[1] === undefined ? null :`U$S ${array[1]}` ,
		old: array[2] === undefined ? null :`U$S ${array[2]}` ,
	}
	return  data
}

const clearStringPriceCurrincy = async (text) => {
	if (text === null) {
		return null
	}
	let array = await text.trim().split('S/')
	let data =  await {
		now: array[1] === undefined ? null :`S/ ${array[1]}` ,
		old: array[2] === undefined ? null :`S/ ${array[2]}` ,
	}
	return  data
}

const clearResultArray = async (array) => {

let itmesMap = await array.map(item => {
    return [item.url,item]
});
var itmesMapArr = await new Map(itmesMap); // items de clave y valor

let result = [...itmesMapArr.values()]; // Conversión a un array

	return result

}


const jsonWrite = async (filePath,newFile) => { // sobre escribir archivo json

	await fs.writeFile(filePath,JSON.stringify(newFile), err => {
		if (err) {
			console.log(err)
		}else{
			return true
		}
	})

}



module.exports = {
	clearString,
	clearStringPrice,
	clearStringPriceCurrincy,
	clearResultArray,
	jsonWrite
}