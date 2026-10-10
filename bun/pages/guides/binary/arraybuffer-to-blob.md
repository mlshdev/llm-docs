> Pinned source for Bun bun-v1.4.3: [docs/guides/binary/arraybuffer-to-blob.mdx](https://github.com/oven-sh/bun/blob/c6da4a4d3010e5553438c60f6bd76d981976867c/docs/guides/binary/arraybuffer-to-blob.mdx)
> Canonical documentation: https://bun.com/docs/guides/binary/arraybuffer-to-blob

# Convert an ArrayBuffer to a Blob

You can construct a [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) from an array of "chunks", where each chunk is a string, binary data structure, or another `Blob`.

```ts
const buf = new ArrayBuffer(64);
const blob = new Blob([buf]);
```

***

By default the `type` of the resulting `Blob` is unset. Set it with the `type` option.

```ts
const buf = new ArrayBuffer(64);
const blob = new Blob([buf], { type: "application/octet-stream" });
blob.type; // => "application/octet-stream"
```

***

See [Binary Data](https://bun.com/docs/runtime/binary-data#conversion).
