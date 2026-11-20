> Pinned source for Bun bun-v1.4.5: [docs/guides/process/ctrl-c.mdx](https://github.com/oven-sh/bun/blob/a7733435cf40429e3b35c36072769df2052b80f1/docs/guides/process/ctrl-c.mdx)
> Canonical documentation: https://bun.com/docs/guides/process/ctrl-c

# Listen for CTRL+C

The `ctrl+c` shortcut sends an *interrupt signal* to the running process. Intercept it by listening for the `SIGINT` event. To close the process, you must explicitly call `process.exit()`.

```ts process.ts icon="/icons/typescript.svg"
process.on("SIGINT", () => {
  console.log("Ctrl-C was pressed");
  process.exit();
});
```

***

See [Utils](https://bun.com/docs/runtime/utils) for more utilities.
