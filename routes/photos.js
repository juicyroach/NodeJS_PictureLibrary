var Photo = require('../models/Photo');
var path = require('path');
var fs = require('fs');

var join = path.join;

var photos = [];
photos.push({
	name: 'Anna Kendrick',
	path: 'http://esq.h-cdn.co/assets/15/21/1600x800/landscape-1432152187-anna-kendrick-01-1.jpg'
});
photos.push({
	name: 'Anna Kendrick',
	path: 'http://heightandweights.com/wp-content/uploads/2014/08/Anna-Kendrick-Wallpapers-91.jpg'
});

exports.list = function(request, response) {
	Photo.find({}, function(err, photos) {
		if (err) {
			return next(err);
		}
		response.render('photos', {
			title: 'Photos',
			photos: photos
		});
	});
};

exports.form = function(request, response) {
	response.render('photos/upload', {
		title: 'Photo upload'
	});
};

exports.submit = function(dir) {
	return function(request, response) {
		var img = request.files.image;
		var name = request.body.name;
		var path = join(dir, img.name);

		fs.rename(img.path, path, function(err) {
			if (err) {
				return next(err);
			}
			Photo.create({
				name: name,
				path: img.name
			}, function(err) {
				if (err) {
					return next(err);
				}
				response.redirect('/photos');
			});
		});
	}
};