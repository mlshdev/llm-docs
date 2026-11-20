> Pinned source for Bun bun-v1.4.5: [docs/guides/binary/typedarray-to-buffer.mdx](https://github.com/oven-sh/bun/blob/a7733435cf40429e3b35c36072769df2052b80f1/docs/guides/binary/typedarray-to-buffer.mdx)
> Canonical documentation: https://bun.com/docs/guides/binary/typedarray-to-buffer

# Convert a Uint8Array to a Buffer

The [`Buffer`](https://nodejs.org/api/buffer.html) class extends [`Uint8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) with additional methods. Use `Buffer.from()` to create a `Buffer` instance from a `Uint8Array`.

```ts
const arr: Uint8Array = ...
const buf = Buffer.from(arr);
```

***

See [Binary Data](https://bun.com/docs/runtime/binary-data#conversion).
