function consulta(n1, n2, n3, callback){
	console.log("Inicia mi programa");
	callback();
}
console.log("inicia mi programa");

consulta(1,2,3,function(){
	setTimeout(function(){
	console.log("Termino el prog");
	}, 3000);
});
console.log("ya termino?");
