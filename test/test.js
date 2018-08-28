const assert = require('assert');
const commons = require('../build/wikimedia-commons-file-path');

describe('wikimedia-commons-file-path', function() {
  it('should compute the original file path w/ File: ', function() {
    assert.equal(
      commons('File:Commons-logo.svg'),
      'https://upload.wikimedia.org/wikipedia/commons/4/4a/Commons-logo.svg'
    );
  });
  it('should compute the original file path w/o File: prefix', function() {
    assert.equal(
      commons('Commons-logo.svg'),
      'https://upload.wikimedia.org/wikipedia/commons/4/4a/Commons-logo.svg'
    );
  });
  it('should compute a thumbnail file path', function() {
    assert.equal(
      commons('File:Innsbruck.jpg', 360),
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Innsbruck.jpg/360px-Innsbruck.jpg'
    );
  });
});
