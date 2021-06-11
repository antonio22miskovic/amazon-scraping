const cheerio = require('cheerio')
const request = require('request-promise')
const {clearString, clearStringPrice, clearStringPriceCurrincy} = require('../src/helpers.js')
const dateTime = require('node-datetime');

class Scraping {

	async scrapingPage (url){
		try {

			console.log('url para scrapear:',url)
			var elements = []
			var result = []
			let $ = await request({
				url: url,
				headers: {
	        'User-Agent': '	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36'
	   		},
				transform: body => cheerio.load(body)
			})
			console.log('ya se iso la peticion')
			await $('.body-result').children('div').each( (i, item ) => { // ajuntar los elementos en un array
				elements.push(item)
			})
			var sacar_categoria_url = url.trim().split('=')

			var next_page_parte = $('.pages').find('ol > li').last().attr('data-url')
			var next_page = null

			if (next_page_parte !== undefined) {
				var text = url
				var result = text.trim().split('&navigation')
				next_page = result[0] + next_page_parte
			}

			if (await $('.body-result').children('div').html() === null) {
				console.log('entrando en la segunda estructura')
				await this.secundScraping($,url).then(res => {
					if (res.result.length !== 0) {
						for (var i = 0; i < res.result.length; i++) {
							result.push(res.result[i])
						}
					next_page = res.next
					}
				})
				console.log('productos obtenidos en la page:',result.length)
				return {
					result: result,
					next: next_page === undefined ? null : next_page
				}
			}

			for await ( let item of elements ) {

				let product = await $(item).find('a').attr('href')
				console.log('buscando la info que falta')
				let $p = await request({
					url: product,
					headers: {
		        'User-Agent': '	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36'
		   		},
					transform: body => cheerio.load(body)
				})
				console.log('info ya consultada')
				var las_p = await $p('.short-description > div > p').toArray()
				var las_p_sku = await $p('.short-description > p').toArray()
				var las_img = await $p('.product-img-box-wrap').find('a').toArray()
				var des = await $p('.short-description > #shortdesc_producto_ajax > p').toArray()
				var imgs = await [
					{img_1: $p(las_img[0]).find('img').attr('src') === undefined ? null : $p(las_img[0]).find('img').attr('src')},
					{img_2: $p(las_img[1]).find('img').attr('src') === undefined ? null : $p(las_img[1]).find('img').attr('src')},
					{img_3: $p(las_img[2]).find('img').attr('src') === undefined ? null : $p(las_img[2]).find('img').attr('src')},
					{img_4: $p(las_img[3]).find('img').attr('src') === undefined ? null : $p(las_img[3]).find('img').attr('src')},
					{img_5: $p(las_img[4]).find('img').attr('src') === undefined ? null : $p(las_img[4]).find('img').attr('src')},
					{img_6: $p(las_img[5]).find('img').attr('src') === undefined ? null : $p(las_img[5]).find('img').attr('src')},
				]
				 var description = ''
				 for await (let p of des) {
				 		description = await description +'. '+clearString($p(p).text())
				 }

				var tallas_array = $p('.catalog-product-view > div > div').find('.last > dd > div > select > option').toArray()
				var tallas = []
				for await (let tallas_option of tallas_array) {
				 	tallas.push({talla: clearString($p(tallas_option).text())})
				 }

				var dd = $p('.catalog-product-view > div > div').find('dd').eq(1)
				// console.log($p(dd).find('img').attr('src'))
				var colores_array = $p(dd).find('img').toArray()
				var colores = []
				for await (let color of colores_array) {
				 	colores.push({color: $p(color).attr('src')})
				}


				var dt = dateTime.create();
				var created_at = dt.format('Y-m-d H:M:S');

				var tax = null
				var prices = null
				var prices_currency =null
				var div_search_rating = $(item).find('.item-price')
				var rating = await clearString($(div_search_rating).find('.rating_number').text())

				var discount = await clearString($(item).find('.discount_blackfriday').text())

				if (await rating.length < 1) { // por si no hay rating
					rating = null
				}

				if (await discount.length < 1) { // por si no posee descuento
					discount = null
				}

				if (await $(item).find('.image-container').children('.top-right').attr('src') === undefined) { // ver si esta libre de impuesto
					tax = 'with tax' // con impuesto
				}else{
					tax = 'tax free' // libre de impuestos
				}

			  await clearStringPrice($(item).find('.dollar_price').text()).then(res => { prices = res })
			  await clearStringPriceCurrincy($(item).find('.currency_price').text()).then(res => { prices_currency = res })

				let data = await  {
					url: $(item).find('a').attr('href'),
					sku:clearString($p(las_p_sku[1]).find('span').text()),
					img: imgs,
					colores:colores,
					category:sacar_categoria_url[1],
					name: clearString($(item).find('.item-name').text()),
					availability: clearString($(las_p[2]).find('span').text()),
					brand: clearString($p(las_p[3]).find('span').text()),
					weight:clearString($p(las_p[4]).find('span').text()),
					tallas:tallas,
				  now_price: prices.now,
					price_real: prices.old,
					now_currente_price: prices_currency.now,
					currente_price_real: prices_currency.old,
					tax: tax,
					rating: rating === null ? null : parseInt(rating),
					discount: discount,
					description:description,
					created_at:created_at
				}
				console.log(data)
				if (await
					data.now_price  !== null  &&
					data.price_real  !==  null &&
					data.now_currente_price  !==  null &&
					data.currente_price_real  !==  null
					) {
						result.push(data)
				}

				}
			console.log(result.length)

			return {
				result: result,
				next: next_page === undefined ? null : next_page
			}

		} catch(e) {
			console.log(e)
			return []
		}

	}

	async secundScraping ($,url) {
		try {

			var elements = []
			var result = []
			console.log('secundo scrapind')
			await $('.category-products').children('ul').find('li').each( (i, item ) => { // ajuntar los elementos en un array
				elements.push(item)
			})

			var next_page = $('.pages').find('ol > li').children('a').last().attr('href')
			var sacar_categoria_url = url.trim().split('=')


			for await (let item of elements){

				var tax = null
				var block = $(item).find('.block_holder')
				var array  = null
				var array2 = null
				var array3 = null
				var array4 = null

				let product = await $(item).find('a').attr('href')
				console.log('buscando la info que falta en el segundo proceso')
				let $p = await request({
					url: product,
					headers: {
		        'User-Agent': '	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36'
		   		},
					transform: body => cheerio.load(body)
				})
				console.log('se odtuvo la info que falta en el segundo proceso')

				var las_p = await $p('.short-description > div > p').toArray()
				var las_p_sku = await $p('.short-description > p').toArray()
				var las_img = await $p('.product-img-box-wrap').find('a').toArray()
				var des = await $p('.short-description > #shortdesc_producto_ajax > p').toArray()
				var imgs = await [
					{img_1: $p(las_img[0]).find('img').attr('src') === undefined ? null : $p(las_img[0]).find('img').attr('src')},
					{img_2: $p(las_img[1]).find('img').attr('src') === undefined ? null : $p(las_img[1]).find('img').attr('src')},
					{img_3: $p(las_img[2]).find('img').attr('src') === undefined ? null : $p(las_img[2]).find('img').attr('src')},
					{img_4: $p(las_img[3]).find('img').attr('src') === undefined ? null : $p(las_img[3]).find('img').attr('src')},
					{img_5: $p(las_img[4]).find('img').attr('src') === undefined ? null : $p(las_img[4]).find('img').attr('src')},
					{img_6: $p(las_img[5]).find('img').attr('src') === undefined ? null : $p(las_img[5]).find('img').attr('src')},
				]
				 var description = ''
				 for await (let p of des) {
				 		description = await description +'. '+clearString($p(p).text())
				 }

				var tallas_array = $p('.catalog-product-view > div > div').find('.last > dd > div > select > option').toArray()
				var tallas = []
				for await (let tallas_option of tallas_array) {
				 	tallas.push({talla: clearString($p(tallas_option).text())})
				}

				var dd = $p('.catalog-product-view > div > div').find('dd').eq(1)
				// console.log($p(dd).find('img').attr('src'))
				var colores_array = $p(dd).find('img').toArray()
				var colores = []
				for await (let color of colores_array) {
				 	colores.push({color: $p(color).attr('src')})
				}


				var dt = dateTime.create();
				var created_at = dt.format('Y-m-d H:M:S');
				// console.log(imgs)
				// console.log(clearString($(las_p[2]).find('span').text()))
				// console.log(clearString($p(las_p[3]).find('span').text()))
				// console.log(clearString($p(las_p[4]).find('span').text()))
				// console.log(description)

				if (await $(item).find('img').attr('src') === undefined) { // ver si esta libre de impuesto
					tax = 'with tax' // con impuesto
				}else{
					tax = 'tax free' // libre de impuestos
				}

				var discount = await clearString($(block).children('div').find('.discount_blackfriday').text())

				if (await discount.length < 1) { // por si no posee descuento
						discount = null
				}

				var span_price_dolar = await $(block).children('div').find('span')[1]
				var price = await  clearString($(span_price_dolar).text())
				array = await price.split('U$S')

				var span_price_dolar_s = await $(block).children('div').find('span')[2]
				var price_s = await  clearString($(span_price_dolar_s).text())
				array2 = await price_s.split('S/')

				if (await array2.length === 1) {
					price_s = null
				}

				var span_price_old_s = await $(item).find('.price-box').children('span')
				var price_old_s = await $(span_price_old_s).find('span').children('span')[1]
				var text_old_price_s = await clearString($(price_old_s).text())
				array3 = await text_old_price_s.split('S/')

				if (await array3.length === 1) {
					text_old_price_s = null
				}

				var span_price_old = await $(item).find('.price-box').children('span')
				var price_old = await $(span_price_old).find('span').children('span')[0]
				var text_old_price = await clearString($(price_old).text())
				array4 = await text_old_price.split('U$S')

				if (await array4.length === 1) {
					text_old_price = null
				}


				var rating = await clearString($(block).find('.rating-fav').children('.rating_number').text())
				if (await rating.length < 1) {
					rating = null
				}


				let data = await  {

					url: $(item).find('a').attr('href'),
					sku:clearString($p(las_p_sku[1]).find('span').text()),
					img: imgs,
					colores:colores,
					category:sacar_categoria_url[1],
					name: clearString($(item).find('.block_holder').children('h2').text()),
					availability: clearString($(las_p[2]).find('span').text()),
					brand: clearString($p(las_p[3]).find('span').text()),
					weight:clearString($p(las_p[4]).find('span').text()),
					tallas:tallas,
				  now_price: text_old_price,
					price_real: price,
					now_currente_price: text_old_price_s,
					currente_price_real: price_s,
					tax: tax,
					rating: rating === null ? null : parseInt(rating),
					discount: discount,
					description:description,
					created_at:created_at
					}

				if (await
					data.now_price  !== null  &&
					data.price_real  !==  null &&
					data.now_currente_price  !==  null &&
					data.currente_price_real  !==  null
					) {
						result.push(data)
				}

			}

			return {
				result: result ,
				next: next_page === undefined ? null : next_page
			}

		} catch(e) {
			return {
				result: [],
				next: next_page === undefined ? null : next_page
			}
			console.log(e)
		}

	}

	async init (url) {
		try{

			var items = []
			let $ = await request({
				url: url,
				headers: {
	        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36'
	   		},
				transform: body => cheerio.load(body)
			})

			var total_page_array = await $('.pages').find('ol > li').toArray()
			var total_page = await $(total_page_array[4]).text()

			if (!parseInt(total_page)) {
				total_page = await $(total_page_array[5]).text()
			}

			if (await total_page > 30) {
				total_page = 30
			}
			var array_para_iterar = [1,2]
			// for (var i = 0; i < total_page; i++) {
			// 	array_para_iterar.push(i)
			// }
			var next = null
			var aprobar = true
			for await (let vuelta of array_para_iterar){

				if (aprobar === true) {

					if (await next === null) {
						next = url
					}
					await this.scrapingPage(next).then( async (res) => {
						if (await res.result.length !== 0) {
							let i = 0
							for await (let item of res.result){
								items.push(item)
							}
							if (next === res.next || next === null) {

							}else{
								next = res.next
							}
					}
					})
				}
			}
			console.log('esta categoria arrojo:',items.length)
			return items
		}catch(e){
			console.log(e)
				return []
		}
	}

}

module.exports = Scraping