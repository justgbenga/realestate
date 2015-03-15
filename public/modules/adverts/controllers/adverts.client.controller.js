'use strict';

// Adverts controller
angular.module('adverts').controller('AdvertsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Adverts',
	function($scope, $stateParams, $location, Authentication, Adverts) {
		$scope.authentication = Authentication;
		$scope.addForm = {url: 'modules/adverts/views/create-advert.client.view.html', show: false};
		
		$scope.showHideFrom = function(){
			$(document).ready(function()
			{
			    $("#formcontainer").mouseup(function(e)
			    {
			        $("#addForm").fadeOut();
			    });
			});
		}
		// Create new Advert
		$scope.create = function() {
			// Create new Advert object
			var advert = new Adverts ({
				buildingId: $scope.selectedID_,
				name: this.name,
				region:this.region,
				city:this.city,
				postcode:this.postcode,
				email:this.email,
				phone:this.phone,
				title:this.title,
				description:this.description,
				price:this.price
			});

			// Redirect after save
			advert.$save(function(response) {
				$location.path('adverts/' + response._id);

				// Clear form fields
				$scope.name = '';
				$scope.region = '';
				$scope.city = '';
				$scope.postcode = '';
				$scope.email = '';
				$scope.phone = '';
				$scope.title = '';
				$scope.description = '';
				$scope.price = '';
				
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Advert
		$scope.remove = function(advert) {
			if ( advert ) { 
				advert.$remove();

				for (var i in $scope.adverts) {
					if ($scope.adverts [i] === advert) {
						$scope.adverts.splice(i, 1);
					}
				}
			} else {
				$scope.advert.$remove(function() {
					$location.path('adverts');
				});
			}
		};

		// Update existing Advert
		$scope.update = function() {
			var advert = $scope.advert;

			advert.$update(function() {
				$location.path('adverts/' + advert._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Adverts
		$scope.find = function() {
			$scope.adverts = Adverts.query();
		};

		// Find existing Advert
		$scope.findOne = function() {
			$scope.advert = Adverts.get({ 
				advertId: $stateParams.advertId
			});
		};
	}
]);