> Release-pinned source for Bun bun-v1.4.2: [docs/guides/binary/buffer-to-typedarray.mdx](https://bun.com/docs/guides/binary/buffer-to-typedarray)

# Convert a Buffer to a Uint8Array

The Node.js [`Buffer`](https://nodejs.org/api/buffer.html) class extends [`Uint8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array), so no conversion is needed. All properties and methods on `Uint8Array` are available on `Buffer`.

```ts
const buf = Buffer.alloc(64);
buf instanceof Uint8Array; // => true
```

***

See [Binary Data](https://bun.com/docs/runtime/binary-data#conversion).
