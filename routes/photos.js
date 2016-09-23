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
	response.render('photos', {
		title: 'Photos',
		photos: photos
	});
};