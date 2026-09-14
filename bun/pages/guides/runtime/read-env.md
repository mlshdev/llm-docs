> Pinned source for Bun bun-v1.4.2: [docs/guides/runtime/read-env.mdx](https://github.com/oven-sh/bun/blob/744846f844374847c902b5e7fd59b4342a51ef99/docs/guides/runtime/read-env.mdx)
> Canonical documentation: https://bun.com/docs/guides/runtime/read-env

# Read environment variables

Access the current environment variables with `process.env`.

```ts index.ts icon="/icons/typescript.svg"
process.env.API_TOKEN; // => "secret"
```

***

Bun also exposes these variables as `Bun.env`, an alias of `process.env`.

```ts index.ts icon="/icons/typescript.svg"
Bun.env.API_TOKEN; // => "secret"
```

***

To print all currently-set environment variables, run `bun --print process.env`.

```sh terminal icon="terminal"
bun --print process.env
```

```txt
ProcessEnv {
  BAZ: "stuff",
  FOOBAR: "aaaaaa",
  <lots more lines>
}
```

***

See [Environment variables](https://bun.com/docs/runtime/environment-variables).
