> Release-pinned source for Bun bun-v1.4.0: [docs/guides/util/which-path-to-executable-bin.mdx](https://bun.com/docs/guides/util/which-path-to-executable-bin)

# Get the path to an executable bin file

`Bun.which` finds the absolute path of an executable file, like the `which` command on Unix-like systems.

```ts foo.ts icon="/icons/typescript.svg"
Bun.which("sh"); // => "/bin/sh"
Bun.which("notfound"); // => null
Bun.which("bun"); // => "/home/user/.bun/bin/bun"
```

***

See [`Bun.which`](https://bun.com/docs/runtime/utils#bun-which).
