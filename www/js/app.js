window.addEventListener('load', function() {
    /*	
			Declare views
	
			Aquí podem afegir diferents pàgines html , indicar on estan i el nom del controller ( mirar controller.js )
	
	*/
    $JSView.declareView({ 
        inici: {
            url: '/inici',
            template: 'views/inici.html',
            controller: 'inici'
        },
        Sol: {
            url: '/Sol',
            template: 'views/Sol.html',
            controller: 'sol'
        },
        Mercuri: {
            url: '/mercuri',
            template: 'views/mercuri.html',
            controller: 'mercuri'
        }
        Venus: {
            url: '/venus',
            template: 'views/venus.html',
            controller: 'venus'
    });
     
    /*Declare modal*/
    $JSView.declareModal({
        modalA: {
            url: '/modalA',
            template: 'views/modalA.html',
            controller: 'modalA'
        }
    });
     
    /*Asign view start*/
    $JSView
        .initView('inici');
 
}, false);
