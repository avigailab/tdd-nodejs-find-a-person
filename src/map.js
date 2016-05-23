
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
	var post=
    this._posts.filter(
    function( s ) { return s.indexOf() !== -1 && s.indexOf('at ') !== -1; });
	return post.length==0;
};
  
module.exports = Map;
