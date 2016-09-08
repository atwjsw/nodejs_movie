var express = require('express')
var path = require('path')
var port = process.env.PORT || 3000
var app = express()

app.set('views', './views/pages')
app.set('view engine', 'jade')
app.use(express.bodyParser())
app.use(express.static(path.join(__dirname, 'bower_components')))
app.listen(port)

console.log('imooc started on port ' + port)

//routing
app.get("/", function(req, res) {
	res.render('index', {
		title: 'imooc 首页',
		movies: [{
			title: '机械战警',
			_id: 1,
			poster: "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1542497410,2056618581&fm=58"
		},{
			title: '机械战警',
			_id: 2,
			poster: "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1542497410,2056618581&fm=58"
		},{
			title: '机械战警',
			_id: 3,
			poster: "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1542497410,2056618581&fm=58"
		}]
	})
})

app.get("/admin/movie", function(req, res) {
	res.render('admin', {
		title: 'imooc 后台录入页',
		movie: {
			title: '',
			doctor: '',
			country: '',
			year: '',
			poster: '',
			flash: '',
			summary: '',
			language: ''
		}
	})
})

app.get("/movie/:id", function(req, res) {
	res.render('detail', {
		title: 'imooc detail页',
		movie: {
				doctor: "何塞帕迪里亚",
				country: "American",
				title: "机械战警",
				year: 2014,
				poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
				language: "英语",
				flash: 'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
				summary: "机械战警机械战警机械战警机械战警机械战警机械战警"
		}
	})
})

app.get("/admin/list", function(req, res) {
	res.render('list', {
		title: 'imooc 列表页',
		movies: [{
				_id: 1,
				doctor: "何塞帕迪里亚",
				country: "美国",
				title: "机械战警",
				year: 2014,
				poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
				language: "英语",
				flash: 'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
				summary: "机械战警机械战警机械战警机械战警机械战警机械战警"
		}]
	})
})
