var data = [
	[
'Aachi Aapakadai', 'Santa Clara',	'3075 El Camino Real Santa Clara CA', 'South Indian',	'4082432778'	'http://www.aachiaappakadai.com'], [		
'Aachi Aapakadai', 'Sunnyvale', 	'1105 W El Camino Real, Sunnyvale, CA',	'South Indian',	'4087322244',	'http://www.aachiaappakadai.com']		

];

$(document).ready(function() {

	
	var html = '';
	for(var i = 0; i < data.length; i++) {
		html += '<tr>';
		for(var field = 0; field < data[i].length; field++) {

			html += '<td>' + data[i][field] + '</td>'
		}
		html += '</tr>';
	}
	$('#listing').html(html);




});