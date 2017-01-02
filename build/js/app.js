(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Entry(title, body) {
  this.title = title;
  this.body = body;
}
Entry.prototype.wordCount = function() {
  var words = [];
  words = this.body.split(" ");
  return words.length;
};

Entry.prototype.vowelCount = function() {
  var vowels = [];
  vowels = this.body.match(/[AEIOU]/gi);
  return vowels.length;
};

Entry.prototype.consonantCount = function() {
  var vowels = [];
  vowels = this.body.match(/[b-df-hj-np-tv-z]/gi);
  return vowels.length;
};

Entry.prototype.getTeaser = function() {
  var teaser = [];
  teaser = this.body.split(/([\.\!\?])/);
  var sentence = teaser[0].split(" ");
  if (sentence.length <= 8) {
    return teaser[0] + teaser[1];
  } else if (sentence.length > 8) {
    var output = "";
    for (i=0; i < 8; i++){
      output = output.concat(sentence[i] + " ");
    }
    return output + "...";
  }
};

exports.entryModule = Entry;

},{}],2:[function(require,module,exports){
var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var newEntry = new Entry(title, body);
    var wordCount = newEntry.wordCount();
    var vowelCount = newEntry.vowelCount();
    var consonantCount = newEntry.consonantCount();
    var teaser = newEntry.getTeaser();
    $('#wordCount').text(wordCount);
    $('#vowelCount').text(vowelCount);
    $('#consonantCount').text(consonantCount);
    $('#teaserText').text(teaser);
    $('#title-display').text(title);
    $('#body-display').text(body);

    $('#entry-display').show();
    $('#entry-form').hide();
  });

});

},{"./../js/journal.js":1}]},{},[2]);
