> Pinned source for Bun bun-v1.4.3: [docs/guides/runtime/import-html.mdx](https://github.com/oven-sh/bun/blob/c6da4a4d3010e5553438c60f6bd76d981976867c/docs/guides/runtime/import-html.mdx)
> Canonical documentation: https://bun.com/docs/guides/runtime/import-html

# Import a HTML file as text

To import a `.html` file in Bun as a text file, use the `type: "text"` attribute in the import statement.

```ts file.ts icon="/icons/typescript.svg"
import html from "./file.html" with { type: "text" };

console.log(html); // <!DOCTYPE html><html><head>...
```

With hot module reloading or watch mode, Bun reloads whenever `./file.html` changes.
