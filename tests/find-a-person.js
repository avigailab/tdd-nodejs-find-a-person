var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var Map = require('./../src/map');

describe('Find a person', function() {
  it('Given a person name, return all posts (of a map) containing her name (in any of a post fields)', function() {
    var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post"]);
    var posts = map.find_a_person("Or A.");
    expect(posts).to.be.eql(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley"]);
  });
});
describe('Find a person(EMPTY)', function() {
  it('Given a person name, return all posts (of a map) containing her name (in any of a post fields)', function() {
    var map = new Map (["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post"]);
    var posts = map.find_a_person("avigail")
    expect(posts).to.be.eql([]);
  });
});
describe('Find a person(We)', function() {
  it('Given a person name, return all posts (of a map) containing her name (in any of a post fields)', function() {
    var map = new Map (["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post"]);
    var posts = map.find_a_person("We")
    expect(posts).to.be.eql(["We found Or A. R.I.P at Langtang valley"]);
  });
});

describe('Find a person (location) 1', function() {
  it('Given a person name, return if posts (of a map) containing location (in any of a post fields)', function() {
    var map = new Map (["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post"]);
    var ans = map.find_a_person_location("Or A.");
    expect(ans).to.be.eql(true);
  });
});
describe('Find a person (location) 2', function() {
  it('Given a person name, return if posts (of a map) containing location (in any of a post fields)', function() {
    var map = new Map (["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "avigail "]);
    var ans = map.find_a_person_location("avigail");
    expect(ans).to.be.eql(false);
  });
});
describe('Find a person (location) 2', function() {
  it('Given a person name, return if posts (of a map) containing location (in any of a post fields)', function() {
    var map = new Map (["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "avigail at"]);
    var ans = map.find_a_person_location("avigail");
    expect(ans).to.be.eql(false);
  });
});
describe('Check Map', function() {
  it('return if of a map is valid 1', function() {
    var map = new Map (["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "avigail at"]);
    var ans = map.check_map();
    expect(ans).to.be.eql(true);
  });
});
describe('Check Map 2', function() {
  it('return if of a map is valid 2', function() {
    var map = new Map (["I met r at Chabad house Bangkok", "We found Or A. R.I.P at Chabad house Bangkok", "avigail at"]);
    var ans = map.check_map();
    expect(ans).to.be.eql(true);
  });
});






