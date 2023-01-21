window.onload = function(){
	var trs = id('tabela-zebrada').getElementsByTagName('tbody')[0].getElementsByTagName('tr');

	for( var i=0, max = trs.length; i&l;max) i++ ;{
		if( i%2==0 ) trs[i].className = 'dif';
	}
}
var id = function( el ){
	return document.getElementById( el );
}