> Release-pinned source for Trigger.dev v4.5.16: [docs/realtime/react-hooks/swr.mdx](https://trigger.dev/docs/realtime/react-hooks/swr)

# SWR hooks

Fetch and cache data using SWR-based hooks

SWR hooks use the [swr](https://swr.vercel.app/) library to fetch data once and cache it. These hooks are useful when you need to fetch data without real-time updates.

> **Note**
>
> While SWR can be configured to poll for updates, we recommend using our other [Realtime
> hooks](https://trigger.dev/docs/realtime/react-hooks) for most use-cases due to rate-limits and the way the Trigger.dev
> API works.

## useRun

The `useRun` hook allows you to fetch a run by its ID.

```tsx
"use client"; // This is needed for Next.js App Router or other RSC frameworks

import { useRun } from "@trigger.dev/react-hooks";

export function MyComponent({ runId }: { runId: string }) {
  const { run, error, isLoading } = useRun(runId);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>Run: {run.id}</div>;
}
```

The `run` object returned is the same as the [run object](https://trigger.dev/docs/management/runs/retrieve) returned by the Trigger.dev API. To correctly type the run's payload and output, you can provide the type of your task to the `useRun` hook:

```tsx
import { useRun } from "@trigger.dev/react-hooks";
import type { myTask } from "@/trigger/myTask";

export function MyComponent({ runId }: { runId: string }) {
  const { run, error, isLoading } = useRun<typeof myTask>(runId, {
    refreshInterval: 0, // Disable polling
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Now run.payload and run.output are correctly typed

  return <div>Run: {run.id}</div>;
}
```

## Common SWR options

You can pass the following options to the all SWR hooks:

**Property (type: boolean)**

Revalidate the data when the window regains focus.

**Property (type: boolean)**

Revalidate the data when the browser regains a network connection.

**Property (type: number)**

Poll for updates at the specified interval (in milliseconds). Polling is not recommended for most
use-cases. Use the Realtime hooks instead.

## Common SWR return values

**error (type: Error)**

An error object if an error occurred while fetching the data.

**isLoading (type: boolean)**

A boolean indicating if the data is currently being fetched.

**isValidating (type: boolean)**

A boolean indicating if the data is currently being revalidated.

**isError (type: boolean)**

A boolean indicating if an error occurred while fetching the data.

&#x20;
