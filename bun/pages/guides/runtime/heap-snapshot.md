> Release-pinned source for Bun bun-v1.4.2: [docs/guides/runtime/heap-snapshot.mdx](https://bun.com/docs/guides/runtime/heap-snapshot)

# Inspect memory usage using V8 heap snapshots

Bun implements V8's heap snapshot API. Use it to capture the heap at runtime and debug memory leaks in your JavaScript/TypeScript application.

```ts snapshot.ts icon="/icons/typescript.svg"
import v8 from "node:v8";

// Creates a heap snapshot file with an auto-generated name
const snapshotPath = v8.writeHeapSnapshot();
console.log(`Heap snapshot written to: ${snapshotPath}`);
```

***

## Inspect memory in Chrome DevTools

To view V8 heap snapshots in Chrome DevTools:

1. Open Chrome DevTools (F12 or right-click and select "Inspect")
2. Go to the "Memory" tab
3. Click the "Load" button (folder icon)
4. Select your `.heapsnapshot` file

![Chrome DevTools Memory Tab](https://raw.githubusercontent.com/oven-sh/bun/744846f844374847c902b5e7fd59b4342a51ef99/docs/images/chrome-devtools-memory.png)
