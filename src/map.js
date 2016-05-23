
function Map(posts) {
  this._posts = posts;
}

Map.prototype.find_a_person = function(name) {
var post=
    this._posts.filter(
    function( s ) { return s.indexOf(name) !== -1; });
return post;
};
Map.prototype.find_a_person_location = function(name) {
	var post=
    this._posts.filter(
    function( s ) { return s.indexOf(name) !== -1 && s.indexOf('at ') !== -1; });
	return post.length!==0;
};
Map.prototype.check_map = function() {
	var places=["Arad","Chabad house Bangkok","Langtang valley"];
	var names=["avigail","Or A.","r"];
	var my_posts=[];
	var flag;
	var posts=this._posts;
	names.forEach(function(name) {
	flag=false;
	posts.forEach(function(post) {
		if(post.indexOf(name)!== -1)
			flag=true;
		else
			if(flag)
			   return false;	
		});
	});

//if(my_posts.length==0)
	return true;

};
  
module.exports = Map;
