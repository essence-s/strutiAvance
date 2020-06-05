	passC('.groupSecc');
	//dasddd
	class playersData{
		constructor(){	
			this.numPlayers=0;
			this.dataArrayPl=[];
			this.jugadorActual=0;
		}
		cantJugadores(numPlayers){
			this.numPlayers=numPlayers;
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
			this.dataArrayPl=[];
			for(let i=0;i<this.numPlayers;i++){

				this.dataArrayPl.push({
					idJ:i,
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
			// io.splice(idPlayer,1,{nombre:newNombre,puntos:puntosActual})
			io[idPlayer].nombre=newNombre;
		}

		sumarPuntos(idPlayer,puntosS){
			let io=this.dataArrayPl;
			let cantiPropi=io[idPlayer];
			let nombreActual=cantiPropi.nombre;
			let puntosSumados=cantiPropi.puntos+puntosS;
			// io.splice(idPlayer,1,{nombre:nombreActual,puntos:puntosSumados})
			io[idPlayer].puntos=puntosSumados;
		}
	}
	tiempoEsco.addEventListener('input',function(){
		// console.log(this.value)
		textTE.value=this.value;

	});
	//INICIO script para la PRIMER cuadro
	 
	//FIN script para la PRIMER cuadro
	let dtP=new playersData();
	
	// dtP.cambiarNombre(0,'red')
	let opciJugaInicio=document.querySelectorAll('.opciones');
	opciJugaInicio.forEach(oji=>{
		oji.addEventListener('click',function(){
			let elementS=this.getAttribute('mensaje');
			dtP.cantJugadores(elementS);
			dtP.declarar();
			cambioNombreFunc();
		})
	})

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

	function cerrarM(lugM){
		let lugs=document.querySelector(lugM)
		let elementC=document.createElement('div')
		let attrA=document.createAttribute('id')
		attrA.value='espaciMo'
		elementC.setAttributeNode(attrA)
		lugs.insertBefore(elementC,lugs.firstChild)
		let espaciMo=lugs.querySelector('#espaciMo')
		espaciMo.style.width='100%'
		espaciMo.style.height='100%'
		espaciMo.style.background='#00000091'
		espaciMo.addEventListener('click',function(){
			lugs.style.display='none';
			// lugs.style.animation='desaparecerR 0.7s ease-out forwards';
			
		})
		
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


	


	//INICIO script para la SEGUNDO cuadro
	tdos.addEventListener('click',function(){
		let inputs = document.querySelectorAll('.checkConti');
		let bole=this.checked;
		if(bole==true) {
			inputs.forEach(input=>{
				if(input.checked==false){
					input.click();
				}
			})
		}
		else if(bole==false) {
			inputs.forEach(input=>{
				if(input.checked==true){
					input.click();
				}		
			})
		}

	})
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
		numInterPRI=parseInt(textTE.value);
		relojitoRegresivo('#relojRegresivo');
	});

	function cambioNombreFunc(){
		try{
		
		let lugar=document.querySelector('.nombreJugadores table tbody')
		let insert='';
		dtP.getArrayPlayers().forEach(r=>{
			insert+=`
			<tr idJugadores='${r.idJ}'>
				<td>${r.nombre}</td>
				<td class="edit">cambiar</td>
			</tr>
			`
		});
		lugar.innerHTML=insert;
		editC=document.querySelectorAll('.edit')

		editC.forEach(ed=>{
		ed.addEventListener('click',function(){
			idJ=this.parentElement.getAttribute('idJugadores');			
			mdal.style.display='block';
			input.value=dtP.getArrayPlayers()[idJ].nombre
			input.focus();
		})
	})
		}catch(e){
			console.log(e);
		}
	}
	let editC;
	
	editC=document.querySelectorAll('.edit')
	let mdal=document.querySelector('.coteModalCambioNombre')
	let idJ;
	let input=document.querySelector('.coteModalCambioNombre input')
	cambioNombreFunc();
	cerrarM('.coteModalCambioNombre');

	let aceptMdal=document.querySelector('.coteModalCambioNombre form')
	aceptMdal.addEventListener('submit',function(e){
		try{
		e.preventDefault();
		mdal.style.display='none';
		let nuevoNom=input.value;
		dtP.cambiarNombre(idJ,nuevoNom);
		cambioNombreFunc();
		}catch(e){
			console.log(e);
		}
	})
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
	let numInterPRI;
	function relojitoRegresivo(lugarRelojRegre){
		
		let numInter=numInterPRI+1;
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

				lugarNombre.innerHTML=dtP.getArrayPlayers()[dtP.getJugadorActual()].nombre;
				lugarPunt.innerHTML=dtP.getArrayPlayers()[dtP.getJugadorActual()].puntos;
				dtP.siguienteJugador();
				lugPnt.style.zIndex='1';
				lugPnt.style.animation='aparicionR 0.3s ease forwards';
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
			
			lugarNombre.innerHTML=dtP.getArrayPlayers()[dtP.getJugadorActual()].nombre;
			lugarPunt.innerHTML=dtP.getArrayPlayers()[dtP.getJugadorActual()].puntos;
			dtP.siguienteJugador();
			lugPnt.style.zIndex='1';
			lugPnt.style.animation='aparicionR 0.3s ease forwards';
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

		lugPnt.style.animation='desaparecerR 0.4s ease-out forwards';
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
					lugPnt.style.animation='aparicionR 0.3s ease forwards';
					
				}else{
					console.log('Incorrecto!!!')
					clearInterval(relojin);
					// dtP.sumarPuntos(1,1)
					lugarNombre.innerHTML=dtP.getArrayPlayers()[dtP.getJugadorActual()].nombre;
					lugarPunt.innerHTML=dtP.getArrayPlayers()[dtP.getJugadorActual()].puntos;
					dtP.siguienteJugador();
					lugPnt.style.zIndex='1';
					lugPnt.style.animation='aparicionR 0.4s ease-out forwards';
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

	// parte insert PASS class expass
	let expass=document.querySelectorAll('.expass')
	expass.forEach((pass,n)=>{
		pass.addEventListener('click',function(){
			// let ele=this;
			let lug =document.querySelector('.conteSecciones')
			lug.style.right=n+'00%';
		});
	})