> Pinned source for Bun bun-v1.4.4: [docs/guides/util/escape-html.mdx](https://github.com/oven-sh/bun/blob/38afee6c84fcf48c0edb2466aa4b27d287a59c30/docs/guides/util/escape-html.mdx)
> Canonical documentation: https://bun.com/docs/guides/util/escape-html

# Escape an HTML string

`Bun.escapeHTML()` escapes HTML characters in a string. It makes the following replacements.

- `"` becomes `"&quot;"`
- `&` becomes `"&amp;"`
- `'` becomes `"&#x27;"`
- `<` becomes `"&lt;"`
- `>` becomes `"&gt;"`

This function is optimized for large input. It converts non-string values to a string before escaping them.

```ts
Bun.escapeHTML("<script>alert('Hello World!')</script>");
// &lt;script&gt;alert(&#x27;Hello World!&#x27;)&lt;/script&gt;
```

***

See [Utils](https://bun.com/docs/runtime/utils).
