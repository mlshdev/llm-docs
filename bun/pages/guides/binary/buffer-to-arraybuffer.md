> Pinned source for Bun bun-v1.4.4: [docs/guides/binary/buffer-to-arraybuffer.mdx](https://github.com/oven-sh/bun/blob/38afee6c84fcf48c0edb2466aa4b27d287a59c30/docs/guides/binary/buffer-to-arraybuffer.mdx)
> Canonical documentation: https://bun.com/docs/guides/binary/buffer-to-arraybuffer

# Convert a Buffer to an ArrayBuffer

The Node.js [`Buffer`](https://nodejs.org/api/buffer.html) class views and manipulates data in an underlying `ArrayBuffer`. The `buffer` property returns that `ArrayBuffer`.

```ts
const nodeBuf = Buffer.alloc(64);
const arrBuf = nodeBuf.buffer;
```

***

See [Binary Data](https://bun.com/docs/runtime/binary-data#conversion).
