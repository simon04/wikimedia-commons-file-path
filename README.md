# wikimedia-commons-file-path

Returns the image/thumbnail file path for Wikimedia Commons

```javascript
const commons = require('../build/wikimedia-commons-file-path');
console.log(commons('File:Innsbruck.jpg'));
// https://upload.wikimedia.org/wikipedia/commons/2/2a/Innsbruck.jpg
console.log(commons('File:Innsbruck.jpg', 300 /*px*/));
// https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Innsbruck.jpg/360px-Innsbruck.jpg
```
