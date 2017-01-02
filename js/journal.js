function Entry(title, body) {
  this.title = title;
  this.body = body;
}
Entry.prototype.wordCount = function() {
  var words = [];
  words = this.body.split(" ");
  return words.length;
};

exports.entryModule = Entry;
