> Pinned source for Bun bun-v1.4.2: [docs/guides/binary/arraybuffer-to-buffer.mdx](https://github.com/oven-sh/bun/blob/744846f844374847c902b5e7fd59b4342a51ef99/docs/guides/binary/arraybuffer-to-buffer.mdx)
> Canonical documentation: https://bun.com/docs/guides/binary/arraybuffer-to-buffer

# Convert an ArrayBuffer to a Buffer

The Node.js [`Buffer`](https://nodejs.org/api/buffer.html) API predates the introduction of `ArrayBuffer` into the JavaScript language. Bun implements both.

Use the static `Buffer.from()` method to create a `Buffer` from an `ArrayBuffer`.

```ts
const arrBuffer = new ArrayBuffer(64);
const nodeBuffer = Buffer.from(arrBuffer);
```

***

To create a `Buffer` that only views a portion of the underlying buffer, pass the offset and length to `Buffer.from()`.

```ts
const arrBuffer = new ArrayBuffer(64);
const nodeBuffer = Buffer.from(arrBuffer, 0, 16); // view first 16 bytes
```

***

See [Binary Data](https://bun.com/docs/runtime/binary-data#conversion).
