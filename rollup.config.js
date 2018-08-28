import common from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  input: './index',
  plugins: [nodeResolve(), common()],
  output: {
    file: 'build/wikimedia-commons-file-path.js',
    format: 'umd',
    name: 'wikimedia-commons-file-path'
  }
};
