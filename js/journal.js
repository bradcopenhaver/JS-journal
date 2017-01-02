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
}

Entry.prototype.consonantCount = function() {
  var vowels = [];
  vowels = this.body.match(/[b-df-hj-np-tv-z]/gi);
  return vowels.length;
}

exports.entryModule = Entry;
