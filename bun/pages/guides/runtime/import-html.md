> Pinned source for Bun bun-v1.4.2: [docs/guides/runtime/import-html.mdx](https://github.com/oven-sh/bun/blob/744846f844374847c902b5e7fd59b4342a51ef99/docs/guides/runtime/import-html.mdx)
> Canonical documentation: https://bun.com/docs/guides/runtime/import-html

# Import a HTML file as text

To import a `.html` file in Bun as a text file, use the `type: "text"` attribute in the import statement.

```ts file.ts icon="/icons/typescript.svg"
import html from "./file.html" with { type: "text" };

console.log(html); // <!DOCTYPE html><html><head>...
```

With hot module reloading or watch mode, Bun reloads whenever `./file.html` changes.
