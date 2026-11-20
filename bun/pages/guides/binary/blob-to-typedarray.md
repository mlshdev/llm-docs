> Pinned source for Bun bun-v1.4.5: [docs/guides/binary/blob-to-typedarray.mdx](https://github.com/oven-sh/bun/blob/a7733435cf40429e3b35c36072769df2052b80f1/docs/guides/binary/blob-to-typedarray.mdx)
> Canonical documentation: https://bun.com/docs/guides/binary/blob-to-typedarray

# Convert a Blob to a Uint8Array

The [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) class provides several methods for consuming its contents in different formats. Use `.bytes()` to read the contents as a `Uint8Array`.

```ts
const blob = new Blob(["hello world"]);
const arr = await blob.bytes();
```

Alternatively, read the contents into an `ArrayBuffer` with `.arrayBuffer()`, then create a `Uint8Array` from the buffer.

```ts
const blob = new Blob(["hello world"]);
const arr = new Uint8Array(await blob.arrayBuffer());
```

***

See [Binary Data](https://bun.com/docs/runtime/binary-data#conversion).
