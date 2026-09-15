> Pinned source for Trigger.dev v4.6.1: [docs/replaying.mdx](https://github.com/triggerdotdev/trigger.dev/blob/4132259b9da38c0131570ab7561fca8e016162df/docs/replaying.mdx)
> Canonical documentation: https://trigger.dev/docs/replaying

# Replaying

A replay is a copy of a run with the same payload but against the latest version in that environment. This is useful if something went wrong and you want to try again with the latest version of your code.

### Replaying from the UI

1. ![Select a task, then in the bottom right
   click "Replay"](https://raw.githubusercontent.com/triggerdotdev/trigger.dev/4132259b9da38c0131570ab7561fca8e016162df/docs/images/replay-run-action.png)
2. You can edit the payload  (if available) and choose the environment  to replay the run in.

   ![Select a task, then in the bottom right
   click "Replay"](https://raw.githubusercontent.com/triggerdotdev/trigger.dev/4132259b9da38c0131570ab7561fca8e016162df/docs/images/replay-run-modal.png)

1) ![On the runs page, press the triple dot button](https://raw.githubusercontent.com/triggerdotdev/trigger.dev/4132259b9da38c0131570ab7561fca8e016162df/docs/images/replay-runs-list.png)

- ![Click replay](https://raw.githubusercontent.com/triggerdotdev/trigger.dev/4132259b9da38c0131570ab7561fca8e016162df/docs/images/replay-runs-list-popover.png)

### Detecting replays in your task

You can check if a run is a replay using the [context](https://trigger.dev/docs/context) object:

```ts
export const myTask = task({
  id: "my-task",
  run: async (payload, { ctx }) => {
    if (ctx.run.isReplay) {
      // This run is a replay of a previous run
    }
  },
});
```

### Replaying using the SDK

You can replay a run using the SDK:

```ts
const replayedRun = await runs.replay(run.id);
```

When you call `trigger()` or `batchTrigger()` on a task you receive back a run handle which has an `id` property. You can use that `id` to replay the run.

You can also access the run id from inside a run. You could write this to your database and then replay it later.

```ts
export const simpleChildTask = task({
  id: "simple-child-task",
  run: async (payload, { ctx }) => {
    // the run ID (and other useful info) is in ctx
    const runId = ctx.run.id;
  },
});
```

### Bulk replaying

See [Bulk actions](https://trigger.dev/docs/bulk-actions) for more information.
