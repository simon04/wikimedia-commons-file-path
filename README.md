# wikimedia-commons-file-path

Returns the image/thumbnail file path for Wikimedia Commons.

It respects the MediaWiki configuration [`$wgThumbnailSteps`](https://www.mediawiki.org/wiki/Manual:$wgThumbnailSteps) for [common thumbnail sizes](https://www.mediawiki.org/wiki/Common_thumbnail_sizes). Since January 2026, Wikimedia Commons uses the following settings: `$wgThumbnailSteps = [20, 40, 60, 120, 250, 330, 500, 960, 1280, 1920, 3840];`

```javascript
import commons from "wikimedia-commons-file-path";
console.log(commons("File:Innsbruck.jpg"));
// https://upload.wikimedia.org/wikipedia/commons/2/2a/Innsbruck.jpg
console.log(commons("File:Innsbruck.jpg", 500 /*px*/));
// https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Innsbruck.jpg/500px-Innsbruck.jpg
console.log(commons("File:Innsbruck.jpg", 640 /*px*/)); // round up to 960px due to wgThumbnailSteps
// https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Innsbruck.jpg/960px-Innsbruck.jpg
```

To compute the MD5 hash, this library uses [`blueimp-md5`](https://www.npmjs.com/package/blueimp-md5).
