$(function() {
	$('.del').click(function(e) {
		var target = $(e.target)
		var id = target.data('id')
		var tr = $('.item-id-' + id)

		$.ajax({
				type: 'DELETE',
				url: '/admin/movie/list?id=' + id
			})
			.done(function(results) {
				if (results.success === 1) {
					if (tr.length > 0) {
						tr.remove()
					}
				}
			})
	})

	$('#douban').blur(function() {
		
		var douban = $(this)
		var id = douban.val()
	
		if (id) {
			console.log(id)
			$.ajax({
				url: 'https://api.douban.com/v2/movie/subject/' + id,
				cache: true,
				type: 'get',
				dataType: 'jsonp',
				crossDomain: true,
				jsonp: 'callback',
				success: function(data) {
					console.log('callback')
					$('#inputDoctor').val(data.directors[0].name)
					$('#inputTitle').val(data.title)
						//$('inputLanguage').val(data.)
					$('#inputCountry').val(data.countries[0])
					$('#inputSummary').val(data.summary)
						//$('inputFlash').val(data.)
					$('#inputPoster').val(data.images.small)
					$('#inputYear').val(data.year)
				}

			})
		}
	})
})