> Pinned source for Bun bun-v1.4.3: [docs/guides/util/escape-html.mdx](https://github.com/oven-sh/bun/blob/c6da4a4d3010e5553438c60f6bd76d981976867c/docs/guides/util/escape-html.mdx)
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
