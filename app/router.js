app.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
    
        .state('form', {
            url: '/form',
            templateUrl: 'views/form.html',
            controller: 'formController'
        })
        

        .state('form.basicinfo', {
            url: '/basicinfo',
            templateUrl: 'views/form-basicinfo.html'
        })
        
        
        .state('form.about', {
            url: '/about',
            templateUrl: 'views/form-about.html'
        })

        .state('form.social', {
            url: '/social',
            templateUrl: 'views/form-social.html'
        })

        .state('form.summary', {
            url: '/summary',
            templateUrl: 'views/form-summary.html'
        })

        .state('athletes',{
            url: '/athletes',
            templateUrl: 'views/athletes.html',
            controller: 'athleteController'
        })

        
        
       
   
    $urlRouterProvider.otherwise('/athletes');
})