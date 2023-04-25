import { readFileSync } from 'fs';
import { builtinModules } from 'module';
import typescript from '@rollup/plugin-typescript';

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'));
export default {
  input: 'src/index.ts',
  external: Object.keys(pkg.dependencies || {}).concat(builtinModules),
  output: [
    {
      format: 'es',
      file: pkg.module,
      sourcemap: true
    },
    {
      format: 'cjs',
      file: pkg.main,
      sourcemap: true
    }
  ],
  plugins: [
    typescript({ sourceMap: true })
  ]
}
