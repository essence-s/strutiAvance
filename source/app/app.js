	passC('.groupSecc');
	//dasddd
	class playersData{
		constructor(numPlayers){	
			this.numPlayers=numPlayers;
			this.dataArrayPl=[];
			this.jugadorActual=0;
		}
		getArrayPlayers(){
			return this.dataArrayPl;
		}
		getJugadorActual(){
			return this.jugadorActual;
		}
		siguienteJugador(){
			if (this.jugadorActual==this.numPlayers-1) {
				this.jugadorActual=0;
			}else{
				this.jugadorActual=this.jugadorActual+1;
			}
		}
		declarar(){
			
			for(let i=0;i<this.numPlayers;i++){

				this.dataArrayPl.push({
					nombre:'JUGADOR'+i+'',
					puntos:0
				})
			}
		}

		cambiarNombre(idPlayer,newNombre){
			let io=this.dataArrayPl;
			let cantiPropi=io[idPlayer];
			let puntosActual=cantiPropi.puntos;
			// console.log(Object.values(cantiPropi));
			io.splice(idPlayer,1,{nombre:newNombre,puntos:puntosActual})
		}

		sumarPuntos(idPlayer,puntosS){
			let io=this.dataArrayPl;
			let cantiPropi=io[idPlayer];
			let nombreActual=cantiPropi.nombre;
			let puntosSumados=cantiPropi.puntos+puntosS;
			io.splice(idPlayer,1,{nombre:nombreActual,puntos:puntosSumados})
		}
	}
	let dtP=new playersData(3);
	dtP.declarar();
	// dtP.siguienteJugador();	 
	// console.log(dtP.getJugadorActual());
//dasddd	
	function enco(elet){
		let selecOpcio=document.querySelectorAll(elet)
		return selecOpcio

	}
	function enco1(elet){
		let selecOpcio=document.querySelector(elet)
		return selecOpcio

	}

	function efPass(esconderV,mostrarV){			
		document.querySelector(esconderV).className="coteSelecModito pasarN"
		document.querySelector(mostrarV).style.display='block';
	}


	// confirmacion s o n
	
	function confirmS(texto){


		return new Promise((resolve,reject)=>{

		 	let lConfirm=document.querySelector('#confirmS');
			let text=lConfirm.querySelector(".textCS");
			text.innerHTML=texto;	

			let aceptar=lConfirm.querySelector(".aceptarS");
			let cancelar=lConfirm.querySelector(".cancelarS");
			lConfirm.style.display='block';
			aceptar.addEventListener('click',function(){
				lConfirm.style.display='none';
				resolve(true);
			});
			cancelar.addEventListener('click',function(){
				lConfirm.style.display='none';
				resolve(false);
			});
	
		})		
	}
	// confirmS('texto').then(function(rr){
	// 	return rr;
	// })
 
 async function ejem(){
 	let date= await confirmS('texto').then(function(rr){
		return rr;
	})

	if (date==true) {
		console.log('se pudo mennnnn true');
	}else if (date==false) {
		console.log('se pudo mennnnn falso');
	}
	return 'dsad';
 }
// ejem();


// let ola=false;
// 	ola=confirmS('texto').then(function(rr){
// 		return rr;
// 		// console.log(ola);
// 	});

// console.log(ola);

	// function rr(result){
	// 	return result;
	// }
	// function saludar(nombre) {
	//   alert('Hola ' + nombre);
	// }

	// function procesarEntradaUsuario(callback) {
	//   var nombre = prompt('Por favor ingresa tu nombre.');
	//   callback(nombre);
	// }

	// procesarEntradaUsuario(saludar);

	enco('.opciones').forEach(opci=>{

		opci.addEventListener('click',function(){
			
			let element=this.getAttribute('mensaje')
			

			efPass('.coteSelecModito','.coteMenuG');
			
		});
	})


	//INICIO script para la SEGUNDO cuadro

	function detecConti(datoinput){
		let inputs = document.querySelectorAll(datoinput);
		// console.log(inputs);
		let juntarCont=[];
		let dato=[];

		let devolver=[];

		let amS=[
			'Argentina',
			'Brasil',
			'Bolivia',
			'Chile',
			'Colombia',
			'Ecuador',
			'Guyana',
			'Paraguay',
			'Perú',
			'Surinam',
			'Uruguay',
			'Venezuela'	
		]
		let amN=[
			'Mexico',
			'Estados Unidos',
			'Canada',
			'Alaska'
		]
		juntarCont.push(amS,amN);
		// console.log(juntarCont);
		// console.log(inputs.length);
		for(let i=0;i<inputs.length;++i){
			let nomDato=inputs[i].getAttribute('id');
			dato.push({
				datoConti:nomDato,
				datoCheck:inputs[i].checked,
				datoP:juntarCont[i]
			});
			
		};
		dato.forEach(da=>{
			if (da.datoCheck) {
				
				devolver.push(da.datoP);
			}
		});
		return devolver;
	}

	let seleccionados=[];
	btnAceptarConti.addEventListener('click',function(){
		let datosTodC=detecConti('.checkConti');
		console.log(datosTodC);
		seleccionados=datosTodC;

		console.log(seleccionados);
		let dIlet2=datPorInsert(seleccionados);
		insertDatHtml(dIlet2);
		clearInterval(relojin);
		relojitoRegresivo('#relojRegresivo');
	});


	//FIN script para la SEGUNDO cuadro
// 		let resultAlegg=[];
// console.log(resultAlegg.length)

	//INICIO script para la TERCER cuadro
	function numRandomEn(min, max) {
	  return Math.floor( Math.random()*(max - min)) + min;
	}
	let restantSelec=[];
	function randomBanderita(arraySele){
	
		let seleccionadosDato=arraySele;
		let aleatorio1=0;
		let aleatorio2=0;
		let resultAle=[]
		let i=0;
		let indicioVacio=0;

		seleccionadosDato.forEach(d=>{
			if(d.length==0){
				indicioVacio++;
			}
		});
		indicioVacio=(indicioVacio-seleccionadosDato.length)+1;
		if(indicioVacio==1) {
			return 2;
		}
		else{
			while(i < 1){
				aleatorio1=numRandomEn(0, seleccionadosDato.length);
				resultAle=seleccionadosDato[aleatorio1];
				if (resultAle.length==0) {
					console.log('vacioooo')
				}
				else{
					aleatorio2=numRandomEn(0, resultAle.length);
					i++;
					
				}	
				
			}
			return [aleatorio1,aleatorio2];
		} 
		
			
		
	}


	function datPorInsert(arryy){
		let banderaElegida;
		let dop=[];
		let numeRand=randomBanderita(arryy);
		console.log(numeRand)
		if (numeRand==2) {
			console.log('vacio todos')
			return 2;
		}
		else{
			console.log(arryy[numeRand[0]][numeRand[1]])
			banderaElegida=arryy[numeRand[0]][numeRand[1]]
			arryy[numeRand[0]].splice(numeRand[1],1);
			console.log(arryy)

			let opciElejir=detecConti('.checkConti')
			dop=[];
			for(let i=0;i<3;i++){	
				let opciRand=randomBanderita(opciElejir)
				let nombreOpciEle=opciElejir[opciRand[0]][opciRand[1]]
				opciElejir[opciRand[0]].splice(opciRand[1],1)
				console.log(nombreOpciEle);
				if (nombreOpciEle==banderaElegida) {
					i--;
				}else{
					dop.push(nombreOpciEle)
					console.log(dop)
				}
			}
			return [dop,banderaElegida];
		}
		
	}

	// randomBanderita();
	// let dop=[];
	// let banderaElegida;
	// let numInter=0,iNI=0;
function pruebas(){
		
		let interD=setInterval(function(){
			let dIlet=datPorInsert(seleccionados);
			// console.log(dIlet);
			if (dIlet==2) {
				clearInterval(interD);
			}else{
				console.log(dIlet);
			}
			console.log(seleccionados);
		},1000);
	}
	
	let relojin;
	function relojitoRegresivo(lugarRelojRegre){
		
		let numInter=20+1;
		lugarRR=document.querySelector(lugarRelojRegre)
		let iNI=0;
		relojin=setInterval(function(){

			numInter--;
			if (numInter<=9) {
				numInter="0"+numInter;	
			}
			// console.log(numInter);
			lugarRR.innerHTML="00:"+numInter;
			if (iNI===parseInt(numInter)) {
				clearInterval(relojin);
				// numInter=20+1;
				return 2;
			}else{
				return 1;
			}

		},1000);
	}
	


	function insertDatHtml(arryyD){
		let incrusHtml="";
		if (arryyD==2) {
			console.log('vacio 2 :V');
		}else{
			let naP=arryyD[0];
			console.log(naP);
			naP.push(arryyD[1]);
			let maximus=naP.length;
			let naP2=[];
			console.log(naP);
			for(let i=0;i<maximus;i++){
				
				let nA=numRandomEn(0, naP.length);
				naP2.push(naP[nA]);
				naP.splice(nA,1);

			};
			console.log(naP2);
			naP2.forEach(d=>{
				incrusHtml+=`
					
					<div clickOption="${d}" class="opcBH" >
						<object class="imgL" data="svg/opcion3.svg" type="image/svg+xml"></object>
						${d}		
					</div>
					
				`
			})
		}
		coteOpciones.innerHTML=incrusHtml;
		banderaR.innerHTML=arryyD[1];
		banderaR.setAttribute('NombreBandera',arryyD[1]);
		clickOpcionesG();
	}

	let lugPnt=document.querySelector('.ctMensajePuntP .mMP');
	let btnLPnt=lugPnt.querySelector('.date button');
	let lugarPunt=lugPnt.querySelector('.date p span');
	let lugarNombre=lugPnt.querySelector('.date h1');
	aleatoriedad.addEventListener('click',async function(){	

		let date= await confirmS('RENDIRSE ENSERIO? ........').then(r=>{return r});

		if (date){
			clearInterval(relojin);
			lugarPunt.innerHTML=dtP.getArrayPlayers()[1].puntos;
			lugPnt.style.zIndex='1';
			lugPnt.style.animation='aparicionR 0.9s ease-out forwards';
		}
	});

	btnLPnt.addEventListener('click',function(){

		let dIlet2=datPorInsert(seleccionados);
		insertDatHtml(dIlet2);
		
		relojitoRegresivo('#relojRegresivo');
		// let maRot=document.querySelector('.ctDS');
		// maRot.style.animation='rotL 2s';
		// setTimeout(function(){
		// 	maRot.style.animation='';
		// },2000);

		lugPnt.style.animation='desaparecerR 0.7s ease-out forwards';
	});



	function clickOpcionesG(){

		let tablaPtns=document.querySelector('.tablaPtns tbody');
		let incrust='';
		dtP.getArrayPlayers().forEach(r=>{
			incrust+=`		
					<tr>
						<td class="notranslate lineWhite">${r.nombre}</td>
						<td class="notranslate">${r.puntos}</td>
					</tr>
			`
		})
		tablaPtns.innerHTML=incrust;

		let clickO=document.querySelectorAll('.opcBH');
		let banderaR=document.querySelector('#banderaR');
		let nombrebanderaR=banderaR.getAttribute('NombreBandera');
		clickO.forEach((cl,t)=>{

			cl.addEventListener('click',function(){
				let datoNombre=this.getAttribute('clickOption')
				console.log(datoNombre)
				if(datoNombre==nombrebanderaR){
					console.log('Correcto!!!')
					clearInterval(relojin);
					
					dtP.sumarPuntos(dtP.getJugadorActual(),1);
					lugarNombre.innerHTML=dtP.getArrayPlayers()[dtP.getJugadorActual()].nombre;
					lugarPunt.innerHTML=dtP.getArrayPlayers()[dtP.getJugadorActual()].puntos;
					dtP.siguienteJugador();
					lugPnt.style.zIndex='1';
					lugPnt.style.animation='aparicionR 0.9s ease-out forwards';
					
				}else{
					console.log('Incorrecto!!!')
					clearInterval(relojin);
					// dtP.sumarPuntos(1,1)
					lugarNombre.innerHTML=dtP.getArrayPlayers()[dtP.getJugadorActual()].nombre;
					lugarPunt.innerHTML=dtP.getArrayPlayers()[dtP.getJugadorActual()].puntos;
					dtP.siguienteJugador();
					lugPnt.style.zIndex='1';
					lugPnt.style.animation='aparicionR 0.9s ease-out forwards';
				}
			})

		})
	}
	





	
	// console.log(dtP.getArrayPlayers())
	
	// console.log(dtP.cambiarNombre(2,'pepito'));
	// console.log(dtP.sumarPuntos(2,1));
	// console.log(dtP.sumarPuntos(0,1));
	// console.log(dtP.sumarPuntos(2,1));
	// console.log(dtP.sumarPuntos(1,1));
	// console.log(dtP.getArrayPlayers())

	
	//FIN script para la TERCER cuadro