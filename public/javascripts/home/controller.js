
app.controller('HomeController', function ($scope, $http, $state, $localStorage,) {

   $scope.loader = true;

   $scope.getAllNews = function () {
      $http.get('/show_news').then(function (response) {
         $scope.loader = false;
         $scope.news = response.data;
      }).catch(function (error) {
         console.log(error);
      });
   }

   $scope.getAllNews();

   $scope.readNews = function (item) {
      $state.go('views');
      $localStorage.data = item;
   }

});

app.controller('ViewsController', function ($scope, $localStorage) {

   $scope.content = $localStorage.data;

   $scope.readMore = function () {
      var strWindowFeatures = "location=yes,scrollbars=yes,status=yes";
      var url = $scope.content.url;
      window.open(url, "_blank", strWindowFeatures);
   }

});

app.controller('GeneralController', function ($scope, $http, $localStorage, $state) {

   $scope.loader = true;

   $scope.getAllNews = function () {
      $http.get('/general').then(function (response) {
         $scope.loader = false;
         $scope.general = response.data;
      }).catch(function (error) {
         console.log(error);
      });
   }

   $scope.getAllNews();

   $scope.readNews = function (item) {
      $state.go('generalview');
      $localStorage.generaldata = item;
   }

});

app.controller('GeneralViewController', function ($scope, $localStorage) {

   $scope.generalcontent = $localStorage.generaldata;

   $scope.readMore = function () {
      var strWindowFeatures = "location=yes,scrollbars=yes,status=yes";
      var url = $scope.generalcontent.url;
      window.open(url, "_blank", strWindowFeatures);
   }

});


app.controller('BusinessController', function ($scope, $http, $localStorage, $state) {

   $scope.loader = true;

   $scope.getAllNews = function () {
      $http.get('/business').then(function (response) {
         $scope.loader = false;
         $scope.business = response.data;
      }).catch(function (error) {
         console.log(error);
      });
   }

   $scope.getAllNews();

   $scope.readNews = function (item) {
      $state.go('businessview');
      $localStorage.businessdata = item;
   }

});

app.controller('BusinessViewController', function ($scope, $localStorage) {

   $scope.businesscontent = $localStorage.businessdata;

   $scope.readMore = function (item) {
      var strWindowFeatures = "location=yes,scrollbars=yes,status=yes";
      var url = $scope.businesscontent.url;
      window.open(url, "_blank", strWindowFeatures);
   }

});

app.controller('EntertainmentController', function ($scope, $http, $localStorage, $state) {

   $scope.loader = true;

   $scope.getAllNews = function () {
      $http.get('/entertainment').then(function (response) {
         $scope.loader = false;
         $scope.entertainment = response.data;
      }).catch(function (error) {
         console.log(error);
      });
   }

   $scope.getAllNews();

   $scope.readNews = function (item) {
      $state.go('entertainmentview');
      $localStorage.entertainmentdata = item;
   }

});

app.controller('EntertainmentViewController', function ($scope, $localStorage) {

   $scope.entertainmentcontent = $localStorage.entertainmentdata;

   $scope.readMore = function (item) {
      var strWindowFeatures = "location=yes,scrollbars=yes,status=yes";
      var url = $scope.entertainmentcontent.url;
      window.open(url, "_blank", strWindowFeatures);
   }

});

app.controller('HealthController', function ($scope, $http, $localStorage, $state) {

   $scope.loader = true;

   $scope.getAllNews = function () {
      $http.get('/health').then(function (response) {
         $scope.loader = false;
         $scope.health = response.data;
      }).catch(function (error) {
         console.log(error);
      });
   }

   $scope.getAllNews();

   $scope.readNews = function (item) {
      $state.go('healthview');
      $localStorage.healthdata = item;
   }

});

app.controller('HealthViewController', function ($scope, $localStorage) {

   $scope.healthcontent = $localStorage.healthdata;

   $scope.readMore = function (item) {
      var strWindowFeatures = "location=yes,scrollbars=yes,status=yes";
      var url = $scope.healthcontent.url;
      window.open(url, "_blank", strWindowFeatures);
   }

});

app.controller('TechnologyController', function ($scope, $http, $localStorage, $state) {

   $scope.loader = true;

   $scope.getAllNews = function () {
      $http.get('/technology').then(function (response) {
         $scope.loader = false;
         $scope.technology = response.data;
      }).catch(function (error) {
         console.log(error);
      });
   }

   $scope.getAllNews();

   $scope.readNews = function (item) {
      $state.go('technologyview');
      $localStorage.technologydata = item;
   }

});

app.controller('TechnologyViewController', function ($scope, $localStorage, $state) {

   $scope.technologycontent = $localStorage.technologydata;

   $scope.readMore = function (item) {
      var strWindowFeatures = "location=yes,scrollbars=yes,status=yes";
      var url = $scope.technologycontent.url;
      window.open(url, "_blank", strWindowFeatures);
   }

});


app.controller('ScienceController', function ($scope, $http, $localStorage, $window, $state) {

   $scope.loader = true;

   $scope.getAllNews = function () {
      $http.get('/science').then(function (response) {
         $scope.loader = false;
         $scope.science = response.data;
      }).catch(function (error) {
         console.log(error);
      });
   }

   $scope.getAllNews();

   $scope.readNews = function (item) {
      $state.go('scienceview');
      $localStorage.sciencedata = item;
   }

});

app.controller('ScienceViewController', function ($scope, $localStorage) {

   $scope.sciencecontent = $localStorage.sciencedata;

   $scope.readMore = function (item) {
      var strWindowFeatures = "location=yes,scrollbars=yes,status=yes";
      var url = $scope.sciencecontent.url;
      window.open(url, "_blank", strWindowFeatures);
   }

});


app.controller('SportsController', function ($scope, $http, $localStorage, $state) {

   $scope.loader = true;

   $scope.getAllNews = function () {
      $http.get('/sports').then(function (response) {
         $scope.loader = false;
         $scope.sports = response.data;
      }).catch(function (error) {
         console.log(error);
      });
   }

   $scope.getAllNews();

   $scope.readNews = function (item) {
      $state.go('sportsview');
      $localStorage.sportsdata = item;
   }

});

app.controller('SportsViewController', function ($scope, $localStorage) {

   $scope.sportscontent = $localStorage.sportsdata;

   $scope.readMore = function (item) {
      var strWindowFeatures = "location=yes,scrollbars=yes,status=yes";
      var url = $scope.sportscontent.url;
      window.open(url, "_blank", strWindowFeatures);
   }

});