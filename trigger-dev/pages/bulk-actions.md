> Pinned source for Trigger.dev v4.8.10: [docs/bulk-actions.mdx](https://github.com/triggerdotdev/trigger.dev/blob/523400fcb4d65f3f24303b92566862a72817907c/docs/bulk-actions.mdx)
> Canonical documentation: https://trigger.dev/docs/bulk-actions

# Bulk actions in the dashboard

Replay or cancel multiple runs from the dashboard using filters or selected run IDs.

**Bulk actions let you replay or cancel multiple runs asynchronously from the dashboard.**

Use bulk actions when you need to retry failed runs after deploying a fix, or stop a group of queued or executing runs.

> **Note**
>
> For backend code, see [Bulk actions with the SDK](https://trigger.dev/docs/runs/bulk-actions).

## Create a bulk action in the dashboard

1. Open the runs page and click **Bulk action** in the top right.

   ![Open the bulk action panel from the runs page](https://raw.githubusercontent.com/triggerdotdev/trigger.dev/523400fcb4d65f3f24303b92566862a72817907c/docs/images/bulk-action-open-panel.png)
2. Filter the runs table to target a group of runs, or select individual runs from the table.
3. Choose **Replay** or **Cancel**, add an optional name, then confirm the action.

   When you replay, you can also choose:

   - **Version**: "Current version" runs each replay on the environment's [current version](https://trigger.dev/docs/deployment/overview#current-version), the promoted one (the default). "Same as original run" keeps each run on the version it first ran on, and is only offered when you replay into the same environment (version numbers are per environment). You can also pick a specific version.
   - **Environment**: replay the runs into another environment of the same project, for example to retry production runs in staging.

   ![Configure and create a bulk action](https://raw.githubusercontent.com/triggerdotdev/trigger.dev/523400fcb4d65f3f24303b92566862a72817907c/docs/images/bulk-action-create.png)
4. Open the bulk action page to see progress, view affected runs, or replay the action.

   ![View bulk action progress](https://raw.githubusercontent.com/triggerdotdev/trigger.dev/523400fcb4d65f3f24303b92566862a72817907c/docs/images/bulk-action-page.png)

> **Note**
>
> You can only cancel runs that are still cancelable, such as queued or executing runs. Runs that have already reached a final state cannot be canceled.

## Which runs are included

When you select runs by ID, the bulk action includes every selected run, however old it is. The 7-day default only applies when you use filters.

Both the dashboard's status names and the SDK's status names work in a runs list URL: `statuses=FAILED` matches the same runs as the dashboard's "Failed" filter.

If a filter in the page's URL can't be read (for example a status name that doesn't exist), the dashboard ignores only that filter and tells you which one. A bulk action using **matching your filters** can't be created while a filter is ignored. Fix or remove the filter first, so the action never covers more runs than you meant.

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
