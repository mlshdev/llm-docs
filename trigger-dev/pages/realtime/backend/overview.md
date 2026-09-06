> Release-pinned source for Trigger.dev v4.5.16: [docs/realtime/backend/overview.mdx](https://trigger.dev/docs/realtime/backend/overview)

# Subscribe to tasks from your backend

Subscribe to run progress, stream AI output, and react to task status changes from your backend code or other tasks.

**Subscribe to runs from your server-side code or other tasks using async iterators.** Get status updates, metadata changes, and streamed data without polling.

## What's available

| Category        | What it does                                                   | Guide                                                              |
| --------------- | -------------------------------------------------------------- | ------------------------------------------------------------------ |
| **Run updates** | Subscribe to run status, metadata, and tag changes             | [Run updates](https://trigger.dev/docs/realtime/backend/subscribe) |
| **Streaming**   | Read AI output, file chunks, or any continuous data from tasks | [Streaming](https://trigger.dev/docs/realtime/backend/streams)     |

> **Note**
>
> To learn how to emit streams from your tasks, see [Streaming data from tasks](https://trigger.dev/docs/tasks/streams).

## Authentication

All backend functions support both server-side and client-side authentication:

- **Server-side**: Use your API key (automatically handled in tasks)
- **Client-side**: Generate a Public Access Token with appropriate scopes

See our [authentication guide](https://trigger.dev/docs/realtime/auth) for detailed information on creating and using tokens.

## Quick example

Subscribe to a run:

```ts
import { runs, tasks } from "@trigger.dev/sdk";

// Trigger a task
const handle = await tasks.trigger("my-task", { some: "data" });

// Subscribe to real-time updates
for await (const run of runs.subscribeToRun(handle.id)) {
  console.log(`Run ${run.id} status: ${run.status}`);
}
```
