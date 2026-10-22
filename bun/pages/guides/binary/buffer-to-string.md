> Pinned source for Bun bun-v1.4.4: [docs/guides/binary/buffer-to-string.mdx](https://github.com/oven-sh/bun/blob/38afee6c84fcf48c0edb2466aa4b27d287a59c30/docs/guides/binary/buffer-to-string.mdx)
> Canonical documentation: https://bun.com/docs/guides/binary/buffer-to-string

# Convert a Buffer to a string

The [`Buffer`](https://nodejs.org/api/buffer.html) class provides a `.toString()` method that converts a `Buffer` to a string.

```ts
const buf = Buffer.from("hello");
const str = buf.toString();
// => "hello"
```

***

You can optionally specify an encoding and byte range.

```ts
const buf = Buffer.from("hello world!");
const str = buf.toString("utf8", 0, 5);
// => "hello"
```

***

See [Binary Data](https://bun.com/docs/runtime/binary-data#conversion).
