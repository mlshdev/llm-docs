> Release-pinned source for Bun bun-v1.4.2: [docs/guides/binary/buffer-to-blob.mdx](https://bun.com/docs/guides/binary/buffer-to-blob)

# Convert a Buffer to a blob

You can construct a [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) from an array of "chunks", where each chunk is a string, binary data structure (including `Buffer`), or another `Blob`.

```ts
const buf = Buffer.from("hello");
const blob = new Blob([buf]);
```

***

See [Binary Data](https://bun.com/docs/runtime/binary-data#conversion).
