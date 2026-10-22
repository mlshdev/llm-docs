> Pinned source for Bun bun-v1.4.4: [docs/guides/runtime/import-json.mdx](https://github.com/oven-sh/bun/blob/38afee6c84fcf48c0edb2466aa4b27d287a59c30/docs/guides/runtime/import-json.mdx)
> Canonical documentation: https://bun.com/docs/guides/runtime/import-json

# Import a JSON file

Bun natively supports `.json` imports.

```json package.json icon="file-json"
{
  "name": "bun",
  "version": "1.0.0",
  "author": {
    "name": "John Dough",
    "email": "john@dough.com"
  }
}
```

***

Import the file like any other source file.

```ts data.ts icon="/icons/typescript.svg"
import data from "./package.json";

data.name; // => "bun"
data.version; // => "1.0.0"
data.author.name; // => "John Dough"
```

***

Bun also supports [Import Attributes](https://github.com/tc39/proposal-import-attributes/) and [JSON modules](https://github.com/tc39/proposal-json-modules) syntax.

```ts data.ts icon="/icons/typescript.svg"
import data from "./package.json" with { type: "json" };

data.name; // => "bun"
data.version; // => "1.0.0"
data.author.name; // => "John Dough"
```

***

See [TypeScript](https://bun.com/docs/runtime/typescript) for more on using TypeScript with Bun.
