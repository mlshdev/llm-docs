> Release-pinned source for Trigger.dev v4.5.16: [docs/context.mdx](https://trigger.dev/docs/context)

# Context

Get the context of a task run.

Context (`ctx`) is a way to get information about a run.

> **Note**
>
> The context object does not change whilst your code is executing. This means values like
> `ctx.run.durationMs` will be fixed at the moment the `run()` function is called.

```typescript Context example
import { task } from "@trigger.dev/sdk";

export const parentTask = task({
  id: "parent-task",
  run: async (payload: { message: string }, { ctx }) => {
    if (ctx.environment.type === "DEVELOPMENT") {
      return;
    }
  },
});
```

## Context properties

**task (type: object)**

**exportName (type: string)**

The exported function name of the task e.g. `myTask` if you defined it like this: `export
      const myTask = task(...)`.

**id (type: string)**

The ID of the task.

**filePath (type: string)**

The file path of the task.

**attempt (type: object)**

**id (type: string)**

The ID of the execution attempt.

**number (type: number)**

The attempt number.

**startedAt (type: date)**

The start time of the attempt.

**backgroundWorkerId (type: string)**

The ID of the background worker.

**backgroundWorkerTaskId (type: string)**

The ID of the background worker task.

**status (type: string)**

The current status of the attempt.

**run (type: object)**

**id (type: string)**

The ID of the task run.

**context (type: any)**

The context of the task run.

**tags (type: array)**

An array of [tags](https://trigger.dev/docs/tags) associated with the task run.

**isTest (type: boolean)**

Whether this is a [test run](https://trigger.dev/docs/run-tests).

**isReplay (type: boolean)**

Whether this run is a [replay](https://trigger.dev/docs/replaying) of a previous run.

**createdAt (type: date)**

The creation time of the task run.

**startedAt (type: date)**

The start time of the task run.

**idempotencyKey (type: string)**

An optional [idempotency key](https://trigger.dev/docs/idempotency) for the task run.

**maxAttempts (type: number)**

The [maximum number of attempts](https://trigger.dev/docs/triggering#maxattempts) allowed for this task run.

**durationMs (type: number)**

The duration of the task run in milliseconds when the `run()` function is called. For live
values use the [usage SDK functions](https://trigger.dev/docs/run-usage).

**costInCents (type: number)**

The cost of the task run in cents when the `run()` function is called. For live values use the
[usage SDK functions](https://trigger.dev/docs/run-usage).

**baseCostInCents (type: number)**

The base cost of the task run in cents when the `run()` function is called. For live values
use the [usage SDK functions](https://trigger.dev/docs/run-usage).

**version (type: string)**

The [version](https://trigger.dev/docs/versioning) of the task run.

**maxDuration (type: number)**

The [maximum allowed duration](https://trigger.dev/docs/runs/max-duration) for the task run.

**queue (type: object)**

**id (type: string)**

The ID of the queue.

**name (type: string)**

The name of the queue.

**environment (type: object)**

**id (type: string)**

The ID of the environment.

**slug (type: string)**

The slug of the environment.

**type (type: string)**

The type of the environment (PRODUCTION, STAGING, DEVELOPMENT, or PREVIEW).

**branchName (type: string)**

If the environment is `PREVIEW` then this will be the branch name.

**git (type: object)**

**commitAuthorName (type: string)**

The name of the commit author.

**commitMessage (type: string)**

The message of the commit.

**commitRef (type: string)**

The ref of the commit.

**commitSha (type: string)**

The SHA of the commit.

**dirty (type: boolean)**

Whether the commit is dirty, i.e. there are uncommitted changes.

**remoteUrl (type: string)**

The remote URL of the repository.

**pullRequestNumber (type: number)**

The number of the pull request.

**pullRequestTitle (type: string)**

The title of the pull request.

**pullRequestState (type: string)**

The state of the pull request (open, closed, or merged).

**organization (type: object)**

**id (type: string)**

The ID of the organization.

**slug (type: string)**

The slug of the organization.

**name (type: string)**

The name of the organization.

**project (type: object)**

**id (type: string)**

The ID of the project.

**ref (type: string)**

The reference of the project.

**slug (type: string)**

The slug of the project.

**name (type: string)**

The name of the project.

**batch (type: object)**

Optional information about the batch, if applicable.

**id (type: string)**

The ID of the batch.

**machine (type: object)**

Optional information about the machine preset used for execution.

**name (type: string)**

The name of the machine preset.

**cpu (type: number)**

The CPU allocation for the machine.

**memory (type: number)**

The memory allocation for the machine.

**centsPerMs (type: number)**

The cost in cents per millisecond for this machine preset.
