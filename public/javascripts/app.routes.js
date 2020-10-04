app.config(['$stateProvider', '$urlRouterProvider',

	function ($stateProvider, $urlRouterProvider) {

		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: '/partials/home.html',
				controller: 'HomeController',
			})

			.state('views', {
				url: '/views',
				templateUrl: '/partials/views.html',
				controller: 'ViewsController'
			})

			.state('general', {
				url: '/general',
				templateUrl: '/partials/general.html',
				controller: 'GeneralController'
			})

			.state('generalview', {
				url: '/generalview',
				templateUrl: '/partials/general-view.html',
				controller: 'GeneralViewController'
			})

			.state('business', {
				url: '/business',
				templateUrl: '/partials/business.html',
				controller: 'BusinessController'
			})

			.state('businessview', {
				url: '/businessview',
				templateUrl: '/partials/business-view.html',
				controller: 'BusinessViewController'
			})

			.state('health', {
				url: '/health',
				templateUrl: '/partials/health.html',
				controller: 'HealthController'
			})

			.state('healthview', {
				url: '/healthview',
				templateUrl: '/partials/health-view.html',
				controller: 'HealthViewController'
			})

			.state('entertainment', {
				url: '/entertainment',
				templateUrl: '/partials/entertainment.html',
				controller: 'EntertainmentController'
			})

			.state('entertainmentview', {
				url: '/entertainmentview',
				templateUrl: '/partials/entertainment-view.html',
				controller: 'EntertainmentViewController'
			})

			.state('science', {
				url: '/science',
				templateUrl: '/partials/science.html',
				controller: 'ScienceController'
			})

			.state('scienceview', {
				url: '/scienceview',
				templateUrl: '/partials/science-view.html',
				controller: 'ScienceViewController'
			})

			.state('technology', {
				url: '/technology',
				templateUrl: '/partials/technology.html',
				controller: 'TechnologyController'
			})

			.state('technologyview', {
				url: '/technologyview',
				templateUrl: '/partials/technology-view.html',
				controller: 'TechnologyViewController'
			})

			.state('sports', {
				url: '/sports',
				templateUrl: '/partials/sports.html',
				controller: 'SportsController'
			})

			.state('sportsview', {
				url: '/sportsview',
				templateUrl: '/partials/sports-view.html',
				controller: 'SportsViewController'
			});

		$urlRouterProvider.otherwise('home');
	}
]);