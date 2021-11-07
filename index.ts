import md5 from 'blueimp-md5';

// based on https://github.com/derhuerst/commons-photo-url/blob/master/index.js
export default function getFilePath(file: string, width?: number): string {
  file = file.replace(/^File:/, '').replace(/\s+/g, '_');
  const encoded = encodeURIComponent(file);
  const base = 'https://upload.wikimedia.org/wikipedia/commons';
  const hash = md5(file);
  const ns = `${hash[0]}/${hash[0]}${hash[1]}`;
  if (width) {
    // thumbnail
    const suffix = file.match(/tiff?$/i)
      ? '.jpg'
      : file.match(/svg$/i)
      ? '.png'
      : '';
    return `${base}/thumb/${ns}/${encoded}/${width}px-${encoded}${suffix}`;
  } else {
    // original
    return `${base}/${ns}/${encoded}`;
  }
}
