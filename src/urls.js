const getUrls = () => {

	return [

		'https://tiendamia.com/pe/search?amzs=watches', // relojes

		// 										/////calzados//////
		// 												//hombres
		'https://tiendamia.com/pe/categorias?amzc=calzado-hombre', //calzados hombres
		'https://tiendamia.com/pe/categorias?amzc=deportivo-hombre&leftfilter=-_Amazon%20Fashion_X_Top%20Brands_-&filtersearch=L3M/aT1mYXNoaW9uLW1lbnMtc2hvZXMmYmJuPTYxMjc3NzAwMTEmcmg9biUzQTcxNDExMjMwMTElMkNuJTNBNzE0NzQ0MTAxMSUyQ24lM0E2NzkyNTUwMTElMkNuJTNBNjEyNzc3MDAxMSUyQ3BfMzYlM0EtMTk5MDAlMkNwX25fZmVhdHVyZV9laWdodGVlbl9icm93c2UtYmluJTNBMTQ2MzAzOTIwMTEmcz1mZWF0dXJlZC1yYW5rJmxvPWltYWdlJmRjJnFpZD0xNTU3NDg3NjIzJnJuaWQ9MTQ2MzAzODIwMTEmcmVmPXNyX25yX3Bfbl9mZWF0dXJlX2VpZ2h0ZWVuX2Jyb3dzZS1iaW5fMQ==',//zapatos hombres deportivos
		'https://tiendamia.com/pe/categorias?amzc=casual-hombre', // calzados hombres casual
		'https://tiendamia.com/pe/categorias?amzc=botas-hombre', // calzados hombres botas

													//damas
		'https://tiendamia.com/pe/categorias?amzc=calzado-dama', //calzados damas
		'https://tiendamia.com/pe/categorias?amzc=deportivo-dama&leftfilter=-_Amazon%20Fashion_X_Top%20Brands_-&filtersearch=L3M/aT1mYXNoaW9uLXdvbWVucy1zaG9lcyZiYm49Njc5MzYwMDExJnJoPW4lM0E3MTQxMTIzMDExJTJDbiUzQTcxNDc0NDAwMTElMkNuJTNBNjc5MzM3MDExJTJDbiUzQTYxMjc3NzEwMTElMkNuJTNBNjc5MzYwMDExJTJDcF8zNiUzQS0yMDAwMCUyQ3Bfbl9mZWF0dXJlX2VpZ2h0ZWVuX2Jyb3dzZS1iaW4lM0ExNDYzMDM5MjAxMSZsbz1pbWFnZSZkYyZxaWQ9MTU1NzcwNDQwMCZybmlkPTE0NjMwMzgyMDExJnJlZj1zcl9ucl9wX25fZmVhdHVyZV9laWdodGVlbl9icm93c2UtYmluXzE=', // calzados dama deprotivos
		'https://tiendamia.com/pe/categorias?amzc=casual-dama', // calzados damas casual
		'https://tiendamia.com/pe/categorias?amzc=vestir-dama', // calzados damas vestir
		'https://tiendamia.com/pe/categorias?amzc=botas-dama', // calzados damas botas

												//niños
		'https://tiendamia.com/pe/categorias?amzc=calzado-nino', //calzados niños

												//niñas
		'https://tiendamia.com/pe/categorias?amzc=calzado-nina', // calzados niña

		// 										//Cross
		// 'https://tiendamia.com/pe/search?amzs=crocs', // calzados cross

		// 								///// Bebes y niños ////////
		// 'https://tiendamia.com/pe/categorias?amzc=ropa-beba', // ropa para bebe niña
		// 'https://tiendamia.com/pe/categorias?amzc=ropa-bebe', // ropa para bebe niño
		// 'https://tiendamia.com/pe/search?amzs=avent', // accesorios para bebe
		// 'https://tiendamia.com/pe/categorias?amzc=juegos-bebes', // jugetes
		// 'https://tiendamia.com/pe/categorias?amzc=ropa-nina', // ropa de niña
		// 'https://tiendamia.com/pe/categorias?amzc=ropa-nino', // ropa niño
		// 								// Juegos //
		// 'https://tiendamia.com/pe/categorias?amzc=juegos-ninos', // juegos index
		// 'https://tiendamia.com/pe/categorias?amzc=lego', //lego
		// 'https://tiendamia.com/pe/categorias?amzc=playmobil', //playmobil
		// 'https://tiendamia.com/pe/categorias?amzc=barbie', // barbie
		// 'https://tiendamia.com/pe/search?amzs=lol%20surprise', //lol
		// 'https://tiendamia.com/pe/search?amzs=funko%20pop', //funko pop
		// 'https://tiendamia.com/pe/search?amzs=fisher%20price', // fisher price
		// 'https://tiendamia.com/pe/categorias?amzc=videojuegos', // video juegos
		// 'https://tiendamia.com/pe/categorias?amzc=otros-juegos', // otros
		// 								//dormitorios///
		// 'https://tiendamia.com/pe/categorias?amzc=dormitorio-ninos', //dormitorios niños
		// 'https://tiendamia.com/pe/categorias?amzc=dormitorio-decoracion', // dormitorio decoración
		// 'https://tiendamia.com/pe/categorias?amzc=dormitorio-cama', //juegos de cama
		// 'https://tiendamia.com/pe/search?amzs=oshkosh', // oshkosh
		// 						///Ropa y acsesorios ///
		// 						      //dama//
		// 'https://tiendamia.com/pe/categorias?amzc=remeras-dama', // camisas, polos
		// 'https://tiendamia.com/pe/categorias?amzc=blazers-dama', // blazers
		// 'https://tiendamia.com/pe/categorias?amzc=pantalones-dama', // pantalones
		// 'https://tiendamia.com/pe/categorias?amzc=polleras-dama', // faldas
		// 'https://tiendamia.com/pe/categorias?amzc=vestidos-dama', // vestidos
		// 'https://tiendamia.com/pe/categorias?amzc=swim-dama', // traje de baño
		// 'https://tiendamia.com/pe/categorias?amzc=enteritos-dama', // enterisos
		// 'https://tiendamia.com/pe/categorias?amzc=sweaters-dama', // chopas
		// 'https://tiendamia.com/pe/categorias?amzc=jeans-dama', // jeans
		// 'https://tiendamia.com/pe/categorias?amzc=calzas-dama', // leggins
		// 'https://tiendamia.com/pe/categorias?amzc=shorts-dama', // shorts
		// 'https://tiendamia.com/pe/categorias?amzc=ropa-casual-dama', // ropa casual
		// 'https://tiendamia.com/pe/categorias?amzc=lenceria-dama', // lenceria
		// 'https://tiendamia.com/pe/categorias?amzc=trajes-dama', // trajes
		// 'https://tiendamia.com/pe/categorias?amzc=medias-dama', //medias
		// 'https://tiendamia.com/pe/categorias?amzc=relojes-dama', // relojes
		// 'https://tiendamia.com/pe/categorias?amzc=carteras-dama', // carteras
		// 'https://tiendamia.com/pe/search?amzs=belts%20for%20woman&leftfilter=-_Condition_X_New_-&filtersearch=L3M/az1iZWx0cytmb3Ird29tYW4mcmg9cF9uX2NvbmRpdGlvbi10eXBlJTNBNjQ2MTcxNjAxMSZkYyZxaWQ9MTU1NzcxNDMzOCZybmlkPTY0NjE3MTQwMTEmcmVmPXNyX25yX3Bfbl9jb25kaXRpb24tdHlwZV8x', //correas
		// 'https://tiendamia.com/pe/categorias?amzc=accesorios-dama', // accesorios

		// 						////hombres /////
		// 'https://tiendamia.com/pe/categorias?amzc=remeras-hombre&leftfilter=-_Amazon%20Fashion_X_Top%20Brands_-&filtersearch=L3M/aT1mYXNoaW9uLW1lbnMtY2xvdGhpbmcmYmJuPTEwNDQ1ODEzMDExJnJoPW4lM0E3MTQxMTIzMDExJTJDbiUzQTEwNDQ1ODEzMDExJTJDbiUzQTcxNDc0NDEwMTElMkNuJTNBMTA0MDY1OCUyQ24lM0EyNDc2NTE3MDExJTJDbiUzQTEwNDU2MjQlMkNwXzM2JTNBLTE5OTAwJTJDcF9uX2ZlYXR1cmVfZWlnaHRlZW5fYnJvd3NlLWJpbiUzQTE0NjMwMzkyMDExJmRjJnFpZD0xNTU3NTM3MTEyJnJuaWQ9MTQ2MzAzODIwMTEmeD0wJnk9MCZyZWY9c3JfbnJfcF9uX2ZlYXR1cmVfZWlnaHRlZW5fYnJvd3NlLWJpbl8x',//rameras camisas
		// 'https://tiendamia.com/pe/categorias?amzc=musculosas-hombre', // musculosas
		// 'https://tiendamia.com/pe/categorias?amzc=camisas-casual-hombre&leftfilter=-_Amazon%20Fashion_X_Top%20Brands_-&filtersearch=L3M/aT1mYXNoaW9uLW1lbnMtY2xvdGhpbmcmYmJuPTEwNDQ1ODEzMDExJnJoPW4lM0E3MTQxMTIzMDExJTJDbiUzQTEwNDQ1ODEzMDExJTJDbiUzQTcxNDc0NDEwMTElMkNuJTNBMTA0MDY1OCUyQ24lM0EyNDc2NTE3MDExJTJDbiUzQTEwNDU2MzAlMkNwXzM2JTNBLTE5OTAwJTJDcF9uX2ZlYXR1cmVfZWlnaHRlZW5fYnJvd3NlLWJpbiUzQTE0NjMwMzkyMDExJmxvPWltYWdlJmRjJnFpZD0xNTU3NzA2Mjg0JnJuaWQ9MTQ2MzAzODIwMTEmcmVmPXNyX25yX3Bfbl9mZWF0dXJlX2VpZ2h0ZWVuX2Jyb3dzZS1iaW5fMQ==',// camisa casuales
		// 'https://tiendamia.com/pe/categorias?amzc=buzos-hombre', //buzos
		// 'https://tiendamia.com/pe/categorias?amzc=camperas-hombre', // camperas
		// 'https://tiendamia.com/pe/categorias?amzc=pantalones-hombre', // pantalones
		// 'https://tiendamia.com/pe/categorias?amzc=ropa-casual-hombre', // casual
		// 'https://tiendamia.com/pe/categorias?amzc=camisas-vestir-hombre', // camisas de vestir
		// 'https://tiendamia.com/pe/search?amzs=t-shirt%20with%20collar%20men', // polas con cuello
		// 'https://tiendamia.com/pe/search?amzs=men%20long%20sleeve&navigation=L3M/az1tZW4rbG9uZytzbGVldmUmcmg9cF83MiUzQTI2NjE2MTgwMTEmZGMmcWlkPTE1Nzc3MjQwNTcmcm5pZD0yNjYxNjE3MDExJnJlZj1zcl9ucl9wXzcyXzE=', // polas manga larga
		// 'https://tiendamia.com/pe/categorias?amzc=sweaters-hombre', // chopas
		// 'https://tiendamia.com/pe/categorias?amzc=jeans-hombre', // jeans
		// 'https://tiendamia.com/pe/categorias?amzc=bermudas-hombre', // bermudas
		// 'https://tiendamia.com/pe/categorias?amzc=swim-hombre', // ropa de baño
		// 'https://tiendamia.com/pe/categorias?amzc=interior-hombre', // ropa interior
		// 'https://tiendamia.com/pe/categorias?amzc=dormir-hombre', // ropa para dormir
		// 'https://tiendamia.com/pe/categorias?amzc=trajes-hombre', // trajes
		// 'https://tiendamia.com/pe/categorias?amzc=medias-hombre', // medias
		// 'https://tiendamia.com/pe/categorias?amzc=joyas-caballero', // joyeria
		// 'https://tiendamia.com/pe/search?amzs=men%20wallets&leftfilter=-_Amazon%20Fashion_X_Top%20Brands_-&filtersearch=L3M/az1tZW4rd2FsbGV0cyZyaD1uJTNBNzE0MTEyMzAxMSUyQ3Bfbl9mZWF0dXJlX2VpZ2h0ZWVuX2Jyb3dzZS1iaW4lM0ExNDYzMDM5MjAxMSZkYyZxaWQ9MTU1NzcxMzcyNyZybmlkPTE0NjMwMzgyMDExJnJlZj1zcl9ucl9wX25fZmVhdHVyZV9laWdodGVlbl9icm93c2UtYmluXzE=',//billeteras
		// 'https://tiendamia.com/pe/search?amzs=belts%20for%20men', // correas
		// 'https://tiendamia.com/pe/categorias?amzc=accesorios-caballero', //acsesorios

		// 							////// tallas especiales ////
		// 												//dama//
		// 'https://tiendamia.com/pe/categorias?amzc=plus-size-femenino', // pluz-size
		// 'https://tiendamia.com/pe/categorias?amzc=maternidad', // maternidad
		// 'https://tiendamia.com/pe/categorias?amzc=petite', //petite

		// 									// caballeros //
		// 'https://tiendamia.com/pe/categorias?amzc=grandes-hombre', //grandes

		// 							///// Ropa Juvenil ////
		// 'https://tiendamia.com/pe/categorias?amzc=juvenil-femenino', // femenina
		// 'https://tiendamia.com/pe/categorias?amzc=juvenil-caballero', // juvenil Caballeros

		// 					///// Electrodomesticos ////
		// 'https://tiendamia.com/pe/categorias?amzc=accesorios-celulares', // celulares
		// 'https://tiendamia.com/pe/categorias?amzc=camaras', //camaras
		// 'https://tiendamia.com/pe/categorias?amzc=television-video', // television
		// 'https://tiendamia.com/pe/categorias?amzc=videojuegos', // video juegos
		// 'https://tiendamia.com/pe/categorias?amzc=tablets', // tablets
		// 'https://tiendamia.com/pe/search?amzs=headphones%20&navigation=L3M/az1oZWFkcGhvbmVzJnJoPXBfbl9jb25kaXRpb24tdHlwZSUzQTY0NjE3MTYwMTElMkNwXzcyJTNBMjY2MTYxODAxMSUyQ3BfODUlM0EyNDcwOTU1MDExJmRjJnFpZD0xNTc3NzQ2ODYyJnJuaWQ9MjQ3MDk1NDAxMSZyZWY9c3JfbnJfcF84NV8x',// audiculares
		// 'https://tiendamia.com/pe/categorias?amzc=cables-accesorios', // cable acesorios
		// 'https://tiendamia.com/pe/categorias?amzc=almacenamiento-discos', // almacenamientos pendrive
		// 'https://tiendamia.com/pe/categorias?amzc=vinilos', // vinilos
		// 'https://tiendamia.com/pe/categorias?amzc=car-audio', // audio
		// 'https://tiendamia.com/pe/categorias?amzc=cuidado-personal', // cuidado personal
		// 										//musica//
		// 'https://tiendamia.com/pe/categorias?amzc=bajo-guitarra', // guitarras bajos
		// 'https://tiendamia.com/pe/categorias?amzc=bateria-percusion', // bateria percusion
		// 'https://tiendamia.com/pe/categorias?amzc=piano-organo',// piano organo
		// 'https://tiendamia.com/pe/categorias?amzc=pedales', // pedalos
		// 'https://tiendamia.com/pe/categorias?amzc=microfonos', // microfonos

		// 					//////////// lentes ///////////////
		// 'https://tiendamia.com/pe/search?amzs=sunglasses',

		// 				//////////// Deporte ///////////////
		// 'https://tiendamia.com/pe/categorias?amzc=futbol', // futbol
		// 'https://tiendamia.com/pe/categorias?amzc=gimnasio', // gimnasio
		// 'https://tiendamia.com/pe/categorias?amzc=camping', // camping
		// 'https://tiendamia.com/pe/categorias?amzc=caza', // caza
		// 'https://tiendamia.com/pe/categorias?amzc=pesca', // pesca
		// 'https://tiendamia.com/pe/categorias?amzc=natacion', // natacion
		// 'https://tiendamia.com/pe/categorias?amzc=motos-accesorios', //motos
		// 'https://tiendamia.com/pe/categorias?amzc=termos', // termos
		// 'https://tiendamia.com/pe/search?amzs=ciclismo%20accesorios', // ciclismo

		// 		////////////Productos para adultos //////////////7
		// 'https://tiendamia.com/pe/categorias?amzc=productos-adultos',

		// 	////////////  Instrumentos de trabajo //////////////7
		// 'https://tiendamia.com/pe/categorias?amzc=autoparts', // partes de autos
		// 'https://tiendamia.com/pe/categorias?amzc=motorcycle-parts', // partes de motos
		// 'https://tiendamia.com/pe/categorias?amzc=bycicle-parts', // partes de bicicletas
		// 'https://tiendamia.com/pe/search?amzs=mechanic+equipment', // mecanica
		// 'https://tiendamia.com/pe/categorias?amzc=herramientas', // herramientas

		// 			/////////////////celulares /////////////////
		// 'https://tiendamia.com/pe/search?amzs=celulares',

		// 							///////// Libros /////////////
		// 'https://tiendamia.com/pe/categorias?amzc=libros-arte', //arte
		// 'https://tiendamia.com/pe/categorias?amzc=libros-biografias', // biografia
		// 'https://tiendamia.com/pe/categorias?amzc=comics-novelas', // comics novelas
		// 'https://tiendamia.com/pe/categorias?amzc=libros-misterio', //misterios
		// 'https://tiendamia.com/pe/categorias?amzc=libros-negocios', // negocios
		// 'https://tiendamia.com/pe/categorias?amzc=libros-ninos&leftfilter=-_Format_X_Paperback_-&filtersearch=L3M/aT1zdHJpcGJvb2tzJmJibj00JnJoPW4lM0EyODMxNTUlMkNuJTNBMTAwMCUyQ24lM0E0JTJDcF9uX2ZlYXR1cmVfbmluZV9icm93c2UtYmluJTNBMzI5MTQzOTAxMSUyQ3Bfbl9mZWF0dXJlX2Jyb3dzZS1iaW4lM0EyNjU2MDIyMDExJmxvPWltYWdlJmRjJmZzdD1hcyUzQW9mZiZxaWQ9MTU2NDY2MDMwNSZybmlkPTYxODA3MjAxMSZyZWY9c3JfbnJfcF9uX2ZlYXR1cmVfYnJvd3NlLWJpbl8x', // para niños
		// 'https://tiendamia.com/pe/categorias?amzc=libros-auto-ayuda', // autoayuda
		// 'https://tiendamia.com/pe/categorias?amzc=libros-cocina', // cocina
		// 'https://tiendamia.com/pe/categorias?amzc=libros-educacion', // libro de educación
		// 'https://tiendamia.com/pe/search?amzs=libros%20ciencia%20ficcion', // ciencia ficcion
		// 'https://tiendamia.com/pe/categorias?amzc=libros-romance', // romance
		// 'https://tiendamia.com/pe/categorias?amzc=libros-manualidaes', // manualidades

	]

}

module.exports = {getUrls}