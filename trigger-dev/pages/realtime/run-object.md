> Release-pinned source for Trigger.dev v4.5.16: [docs/realtime/run-object.mdx](https://trigger.dev/docs/realtime/run-object)

# The run object

The run object schema for Realtime subscriptions

The [run object](https://trigger.dev/docs/realtime/run-object#the-run-object) is the main object returned by Realtime subscriptions (e.g., `runs.subscribeToRun()`). It contains all the information about the run, including the run ID, task identifier, payload, output, and more.

Type-safety is supported for the run object, so you can infer the types of the run's payload and output. See [type-safety](#type-safety) for more information.

## The run object

### Properties

**Property (type: string; required)**

The run ID.

**Property (type: string; required)**

The task identifier.

**Property (type: object; required)**

The input payload for the run.

**Property (type: object)**

The output result of the run.

**Property (type: Date; required)**

Timestamp when the run was created.

**Property (type: Date; required)**

Timestamp when the run was last updated.

**Property (type: number; required)**

Sequential number assigned to the run.

**Property (type: RunStatus; required)**

Current status of the run.

| Status               | Description                                                                                               |
| -------------------- | --------------------------------------------------------------------------------------------------------- |
| `WAITING_FOR_DEPLOY` | Task hasn't been deployed yet but is waiting to be executed                                               |
| `QUEUED`             | Run is waiting to be executed by a worker                                                                 |
| `EXECUTING`          | Run is currently being executed by a worker                                                               |
| `REATTEMPTING`       | Run has failed and is waiting to be retried                                                               |
| `FROZEN`             | Run has been paused by the system, and will be resumed by the system                                      |
| `COMPLETED`          | Run has been completed successfully                                                                       |
| `CANCELED`           | Run has been canceled by the user                                                                         |
| `FAILED`             | Run has been completed with errors                                                                        |
| `CRASHED`            | Run has crashed and won't be retried, most likely the worker ran out of resources, e.g. memory or storage |
| `INTERRUPTED`        | Run was interrupted during execution, mostly this happens in development environments                     |
| `SYSTEM_FAILURE`     | Run has failed to complete, due to an error in the system                                                 |
| `DELAYED`            | Run has been scheduled to run at a specific time                                                          |
| `EXPIRED`            | Run has expired and won't be executed                                                                     |
| `TIMED_OUT`          | Run has reached it's maxDuration and has been stopped                                                     |

**Property (type: number; required)**

Duration of the run in milliseconds.

**Property (type: number; required)**

Total cost of the run in cents.

**Property (type: number; required)**

Base cost of the run in cents before any additional charges.

**Property (type: string\[]; required)**

Array of tags associated with the run.

**Property (type: string)**

Key used to ensure idempotent execution.

**Property (type: Date)**

Timestamp when the run expired.

**Property (type: string)**

Time-to-live duration for the run.

**Property (type: Date)**

Timestamp when the run finished.

**Property (type: Date)**

Timestamp when the run started.

**Property (type: Date)**

Timestamp until which the run is delayed.

**Property (type: Date)**

Timestamp when the run was queued.

**Property (type: Record\<string, DeserializedJson>)**

Additional metadata associated with the run.

**Property (type: SerializedError)**

Error information if the run failed.

**Property (type: boolean; required)**

Indicates whether this is a test run.

## Type-safety

You can infer the types of the run's payload and output by passing the type of the task to the `subscribeToRun` function. This will give you type-safe access to the run's payload and output.

```ts
import { runs, tasks } from "@trigger.dev/sdk";
import type { myTask } from "./trigger/my-task";

// Somewhere in your backend code
async function myBackend() {
  const handle = await tasks.trigger("my-task", { some: "data" });

  for await (const run of runs.subscribeToRun<typeof myTask>(handle.id)) {
    // This will log the run every time it changes
    console.log(run.payload.some);

    if (run.output) {
      // This will log the output if it exists
      console.log(run.output.some);
    }
  }
}
```

When using `subscribeToRunsWithTag`, you can pass a union of task types for all the possible tasks that can have the tag.

```ts
import { runs } from "@trigger.dev/sdk";
import type { myTask, myOtherTask } from "./trigger/my-task";

// Somewhere in your backend code
for await (const run of runs.subscribeToRunsWithTag<typeof myTask | typeof myOtherTask>("my-tag")) {
  // You can narrow down the type based on the taskIdentifier
  switch (run.taskIdentifier) {
    case "my-task": {
      console.log("Run output:", run.output.foo); // This will be type-safe
      break;
    }
    case "my-other-task": {
      console.log("Run output:", run.output.bar); // This will be type-safe
      break;
    }
  }
}
```

This works with all realtime subscription functions:

- `runs.subscribeToRun<TaskType>()`
- `runs.subscribeToRunsWithTag<TaskType>()`
- `runs.subscribeToBatch<TaskType>()`
