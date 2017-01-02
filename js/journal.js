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
