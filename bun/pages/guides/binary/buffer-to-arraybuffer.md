> Pinned source for Bun bun-v1.4.2: [docs/guides/binary/buffer-to-arraybuffer.mdx](https://github.com/oven-sh/bun/blob/744846f844374847c902b5e7fd59b4342a51ef99/docs/guides/binary/buffer-to-arraybuffer.mdx)
> Canonical documentation: https://bun.com/docs/guides/binary/buffer-to-arraybuffer

# Convert a Buffer to an ArrayBuffer

The Node.js [`Buffer`](https://nodejs.org/api/buffer.html) class views and manipulates data in an underlying `ArrayBuffer`. The `buffer` property returns that `ArrayBuffer`.

```ts
const nodeBuf = Buffer.alloc(64);
const arrBuf = nodeBuf.buffer;
```

***

See [Binary Data](https://bun.com/docs/runtime/binary-data#conversion).
