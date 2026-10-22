> Pinned source for Bun bun-v1.4.4: [docs/guides/binary/blob-to-stream.mdx](https://github.com/oven-sh/bun/blob/38afee6c84fcf48c0edb2466aa4b27d287a59c30/docs/guides/binary/blob-to-stream.mdx)
> Canonical documentation: https://bun.com/docs/guides/binary/blob-to-stream

# Convert a Blob to a ReadableStream

The [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) class provides several methods for consuming its contents in different formats, including `.stream()`, which returns a `ReadableStream`.

```ts
const blob = new Blob(["hello world"]);
const stream = blob.stream();
```

***

See [Binary Data](https://bun.com/docs/runtime/binary-data#conversion).
