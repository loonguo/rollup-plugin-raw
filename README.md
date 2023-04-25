# rollup-plugin-raw
Importing asset as string

```js
import positionVertex from "./position.vert.wgsl?raw";
```

## Installation

```sh
npm install @loonguo/rollup-plugin-raw --save-dev
```

## Usage

```js
import raw from "@loonguo/rollup-plugin-raw";

rollup({
  input: 'src/index.js',
  plugins: [
    raw({
      include: "**/*.wgsl",
    })
  ]
});
```

## Typescript

```json
{
  "compilerOptions": {
    "types": [
      "@loonguo/rollup-plugin-raw"
    ]
  }
}
```
