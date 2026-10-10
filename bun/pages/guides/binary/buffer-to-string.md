> Pinned source for Bun bun-v1.4.3: [docs/guides/binary/buffer-to-string.mdx](https://github.com/oven-sh/bun/blob/c6da4a4d3010e5553438c60f6bd76d981976867c/docs/guides/binary/buffer-to-string.mdx)
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
