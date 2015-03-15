																																																																																																																																																								'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Advert Schema
 */
var AdvertSchema = new Schema({
	buildingId :{
		type: String
	},
	region : {
		type: String,
		default:'Seine Maritime'
	},
	city : {
		type: String,
		default:'Le Havre'
	},
	postcode: {
		type: Number,
		default:76600
	},
	name: {
		type: String,
		default:'OSINUGA OLUGBENGA DAVID'
	},
	email: {
		type: String,
		default:'justbenga@gmail.com'
	},
	phone: {
		type: Number,
		default:44256565
	},
	title: {
		type: String,
		default:'Appart'
	},
	type: {
		type: String,
		default:'HousF3 location'
	},
	description: {
		type: String,
		default:'Beautiful house'
	},
	price: {
		type: Number,
		default:800
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Advert', AdvertSchema);