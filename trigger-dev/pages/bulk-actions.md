> Release-pinned source for Trigger.dev v4.5.16: [docs/bulk-actions.mdx](https://trigger.dev/docs/bulk-actions)

# Bulk actions in the dashboard

Replay or cancel multiple runs from the dashboard using filters or selected run IDs.

**Bulk actions let you replay or cancel multiple runs asynchronously from the dashboard.**

Use bulk actions when you need to retry failed runs after deploying a fix, or stop a group of queued or executing runs.

> **Note**
>
> For backend code, see [Bulk actions with the SDK](https://trigger.dev/docs/runs/bulk-actions).

## Create a bulk action in the dashboard

1. Open the runs page and click **Bulk action** in the top right.

   ![Open the bulk action panel from the runs page](https://raw.githubusercontent.com/triggerdotdev/trigger.dev/ee34a4b13710742ae26d94831547fa2b6cddc9bd/docs/images/bulk-action-open-panel.png)
2. Filter the runs table to target a group of runs, or select individual runs from the table.
3. Choose **Replay** or **Cancel**, add an optional name, then confirm the action.

   ![Configure and create a bulk action](https://raw.githubusercontent.com/triggerdotdev/trigger.dev/ee34a4b13710742ae26d94831547fa2b6cddc9bd/docs/images/bulk-action-create.png)
4. Open the bulk action page to see progress, view affected runs, or replay the action.

   ![View bulk action progress](https://raw.githubusercontent.com/triggerdotdev/trigger.dev/ee34a4b13710742ae26d94831547fa2b6cddc9bd/docs/images/bulk-action-page.png)

> **Note**
>
> You can only cancel runs that are still cancelable, such as queued or executing runs. Runs that have already reached a final state cannot be canceled.

## Create a bulk action from the SDK

Use `runs.bulk.replay()` or `runs.bulk.cancel()` when you want to create a bulk action from your backend code.

```ts Your backend code
import { runs } from "@trigger.dev/sdk";

const action = await runs.bulk.replay({
  filter: {
    status: "FAILED",
    taskIdentifier: "sync-customer",
    period: "24h",
  },
  name: "Replay failed customer syncs",
});

const completed = await runs.bulk.poll(action.id);
console.log(completed.status, completed.counts);
```

See [Bulk actions with the SDK](https://trigger.dev/docs/runs/bulk-actions) for canceling, listing, polling, and aborting bulk actions from your backend code.
