> Pinned source for Bun bun-v1.4.3: [docs/guides/binary/buffer-to-arraybuffer.mdx](https://github.com/oven-sh/bun/blob/c6da4a4d3010e5553438c60f6bd76d981976867c/docs/guides/binary/buffer-to-arraybuffer.mdx)
> Canonical documentation: https://bun.com/docs/guides/binary/buffer-to-arraybuffer

# Convert a Buffer to an ArrayBuffer

The Node.js [`Buffer`](https://nodejs.org/api/buffer.html) class views and manipulates data in an underlying `ArrayBuffer`. The `buffer` property returns that `ArrayBuffer`.

```ts
const nodeBuf = Buffer.alloc(64);
const arrBuf = nodeBuf.buffer;
```

***

See [Binary Data](https://bun.com/docs/runtime/binary-data#conversion).
