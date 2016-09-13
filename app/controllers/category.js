var Category = require('../models/category')

//admin new category 
exports.new = function(req, res) {
	res.render('category_admin', {
		title: 'imooc 后台分类录入页',
		category: {}
	})
}

//admin post category
exports.save = function(req, res) {

	var _category = req.body.category
	var category = new Category(_category)
	category.save(function(err, category) {
		if (err) {
			console.log(err)
		}
		res.redirect('/admin/category/list')
	})
}

//categorylist
exports.list = function(req, res) {

	Category.fetch(function(err, categories) {
		if (err) {
			console.log(err)
		}
		res.render('categorylist', {
			title: 'imooc 电影分类列表页',
			categories: categories
		})
	})
}

// //admin update movie
// exports.update = function(req, res) {
// 	var id = req.params.id
// 	if (id) {
// 		Movie.findById(id, function(err, movie) {
// 			if (err) {
// 				console.log(err)
// 			}
// 			res.render('admin', {
// 				title: 'imooc 后台更新页',
// 				movie: movie
// 			})
// 		})
// 	}
// }
