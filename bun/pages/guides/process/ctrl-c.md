> Pinned source for Bun bun-v1.4.3: [docs/guides/process/ctrl-c.mdx](https://github.com/oven-sh/bun/blob/c6da4a4d3010e5553438c60f6bd76d981976867c/docs/guides/process/ctrl-c.mdx)
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
