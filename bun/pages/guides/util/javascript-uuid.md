> Pinned source for Bun bun-v1.4.5: [docs/guides/util/javascript-uuid.mdx](https://github.com/oven-sh/bun/blob/a7733435cf40429e3b35c36072769df2052b80f1/docs/guides/util/javascript-uuid.mdx)
> Canonical documentation: https://bun.com/docs/guides/util/javascript-uuid

# Generate a UUID

Use `crypto.randomUUID()` to generate a UUID v4. It works in Bun, Node.js, and browsers, with no dependencies.

```ts
crypto.randomUUID();
// => "123e4567-e89b-42d3-a456-426614174000"
```

***

Bun also provides `Bun.randomUUIDv7()`, which generates a [UUID v7](https://www.rfc-editor.org/rfc/rfc9562.html#name-uuid-version-7).

```ts
Bun.randomUUIDv7();
// => "0196a000-bb12-7000-905e-8039f5d5b206"
```

***

See [Utils](https://bun.com/docs/runtime/utils).
