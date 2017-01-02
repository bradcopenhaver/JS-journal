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
  });
});
