	  
	  var myApp = angular.module('myApp', []);
	  myApp.controller('myCtrl', function($scope) {
	      $scope.name = [
	          'virat kohli',
	          'mahendra singh dhoni',
	          'saurabh ganguly',
	          'rahul dravid',
	          'kapil dev',
	          'sachin tendulkar',
	      ];

	      $scope.player = [{
	              name: 'VIRAT KOHLI',
	              location: 'INDIA'
	          },
	          {
	              name: 'JONTY RHODES',
	              location: 'South AFRICA'
	          },
	          {
	              name: 'RICKY PONTING',
	              location: 'AUSTRALIA'
	          },
	          {
	              name: 'BRIAN LARA',
	              location: 'WEST INDIES'
	          },
	          {
	              name: 'SANATH JAYASURIYA',
	              location: 'SRI LANKA'
	          },
	      ];

	      $scope.accuracy = '167.450989845';
	      $scope.timestmp = '1288333823006';

	      $scope.details = [{
	              name: 'Jaibala',
	              gender: 'm'
	          },
	          {
	              name: 'Carlos',
	              gender: 'f'
	          },
	          {
	              name: 'Mark',
	              gender: 'm'
	          },
	          {
	              name: 'Henry',
	              gender: 'm'
	          },
	          {
	              name: 'Joel',
	              gender: 'f'
	          },
	          {
	              name: 'Guttya',
	              gender: 'm'
	          },
	          {
	              name: 'Binashi',
	              gender: 'f'
	          },
	          {
	              name: 'orlendo',
	              gender: 'm'
	          },
	          {
	              name: 'jasmin',
	              gender: 'f'
	          }
	      ];

	      $scope.student = {
	          "name": "jaywant topno",
	          "city": "Bangalore",
	          "gender": "Male",
	          "country": "India",
	          "Age": "28"
	      };
	  });