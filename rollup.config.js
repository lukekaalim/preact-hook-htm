import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import flowEntry from 'rollup-plugin-flow-entry'

const rollupConfig = {
  input: 'src/index.js',
  output: [
    { file: 'dist/preact-hook-htm.esm.js', format: 'esm' },
    { file: 'dist/preact-hook-htm.cjs.js', format: 'cjs' },
    { file: 'dist/preact-hook-htm.umd.js', format: 'umd', name: 'PREACT_HOOK_HTM' },
  ],
  plugins: [resolve(), terser(), flowEntry()],
};

export default rollupConfig;
