'use strict';

angular.module('adverts')
	.directive('osinuga', ['$http','shapes','d3','$', 
	function ($http,shapes,d3,$){


	return {
		restrict : 'E',
		link: function(scope,element) 
			  {

				$http.get('/modules/adverts/directives/eure.json').success(function(data) 
				{

						var buildings = [], roads = [], amenities = [], naturals = [];
						for(var i = 0; i < data.length; i++)
						{
							if(typeof data[i].building !== 'undefined' && data[i].building === true){
								buildings.push(shapes.createBuilding(data[i]));
							}
							if(typeof data[i].highway !== 'undefined'){
								roads.push(shapes.createRoad(data[i]) );
							}
							if(typeof data[i].natural !== 'undefined'){
								naturals.push(shapes.createNatural(data[i]) );
							}
							if(typeof data[i].amenity !== 'undefined'){
								amenities.push(shapes.createAmenity(data[i]));
							}
						}

						var container = 
						d3.select(element[0]).append('svg')
						                 .attr('width',600)
						                 .attr('height',400)
						                 .append('g')
		                                 .attr('transform', 'scale('+(600/800)+')');

						
						container.selectAll('.buildings')
						.data(buildings)
						.enter()
						.append('path')
							.classed('buildings',1)
							.attr('d', function(d){return d.toSvgPath();})
							.attr('id',function(d){return d.getId();})
							.on('click', function(d){
					          	scope.selectedID_   = d.getId();
					          	scope.selectedArea_ = d.getArea();
					          	scope.$apply();


								$http.get('/adverts/building/'+d.getId())
								.success(function (advert) {
						          	scope.addForm.show = false;
						          	console.log('Here');
								}).error(function (err) {
									scope.addForm.show = true;
									$("#addForm").fadeIn();
								});

					        });

						container.selectAll('.roads')
						.data(roads)
						.enter()
						.append('path')
						.classed('roads',1)
						.attr('d', function(d){return d.toSvgPath();} );

						container.selectAll('.amenities')
						.data(amenities)
						.enter()
						.append('path')
						.classed('amenities',1)
						.attr('d', function(d){return d.toSvgPath();} );

						container.selectAll('.naturals ')
						.data(naturals)
						.enter()
						.append('path')
						.classed('naturals ',1)
						.attr('d', function(d){return d.toSvgPath();} );
						
						container.selectAll('path')
						    .on('mouseover', function(d, i){
					          d3.select(this)
					            .classed('over', 1);
					        })
					        .on('mouseout', function(d, i){
					          d3.select(this)
					            .classed('over', 0);
					        });
				});
			  }
	};

}]);