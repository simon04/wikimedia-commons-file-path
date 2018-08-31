import buble from 'rollup-plugin-buble';
import common from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import {uglify} from 'rollup-plugin-uglify';

const shared = Object.freeze({
  input: './index',
  plugins: [nodeResolve(), common(), buble()],
  output: {
    file: 'build/wikimedia-commons-file-path.js',
    format: 'umd',
    name: 'wikimedia-commons-file-path'
  }
});

export default [
  shared,
  {
    ...shared,
    plugins: [nodeResolve(), common(), buble(), uglify()],
    output: {...shared.output, file: 'build/wikimedia-commons-file-path.min.js'}
  }
];
