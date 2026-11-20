> Pinned source for Bun bun-v1.4.5: [docs/guides/binary/buffer-to-string.mdx](https://github.com/oven-sh/bun/blob/a7733435cf40429e3b35c36072769df2052b80f1/docs/guides/binary/buffer-to-string.mdx)
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
