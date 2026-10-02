> Pinned source for Trigger.dev v4.7.2: [docs/troubleshooting-alerts.mdx](https://github.com/triggerdotdev/trigger.dev/blob/28f424096e7c82e99e23cfa0c15068565ad98e90/docs/troubleshooting-alerts.mdx)
> Canonical documentation: https://trigger.dev/docs/troubleshooting-alerts

# Alerts

Get alerted when runs or deployments fail, or when deployments succeed.

We support receiving alerts for the following events:

- Run fails
- Deployment fails
- Deployment succeeds
- A new error group appears, regresses, or is unignored

The first three are created from the **Alerts** page. The fourth — an **Error group** alert — is created from the **Errors** page instead, but appears in the same Alerts table once created. It behaves quite differently from a run failure alert; see [Error group alerts](#error-group-alerts) below.

> **Note**
>
> If you want to be told about **every** run that fails, choose a **run fails** alert. An Error group
> alert will not do this — it deliberately stays quiet once it has alerted on a given error.

## How to setup alerts

1. Click on "Alerts" in the left hand side menu, then click on "New alert" to open the new alert modal.
   ![Email alerts](https://raw.githubusercontent.com/triggerdotdev/trigger.dev/28f424096e7c82e99e23cfa0c15068565ad98e90/docs/images/troubleshooting-alerts-blank.png)
2. Choose to be notified by email, Slack notification or webhook whenever:

   - a run fails
   - a deployment fails
   - a deployment succeeds

     ![Email alerts](https://raw.githubusercontent.com/triggerdotdev/trigger.dev/28f424096e7c82e99e23cfa0c15068565ad98e90/docs/images/troubleshooting-alerts-modal.png)
3. Click on the triple dot menu on the right side of the table row and select "Disable" or "Delete".

   ![Disable and delete alerts](https://raw.githubusercontent.com/triggerdotdev/trigger.dev/28f424096e7c82e99e23cfa0c15068565ad98e90/docs/images/troubleshooting-alerts-disable-delete.png)

## Error group alerts

Error group alerts are **issue-based**, not run-based. They are created from the **Errors** page in the dashboard (the "Configure alerts…" button), not from the New alert modal on the Alerts page. Once created they show up in the Alerts table alongside your other alerts, labelled "Error group".

An error group is one distinct error — the same error from many runs is a single group, with a status of **Unresolved**, **Resolved** or **Ignored** that you set from the Errors page.

### When an error group alert fires

The alert only fires when a group's status *changes* in one of these three ways:

| Trigger    | Meaning                                                                        |
| :--------- | :----------------------------------------------------------------------------- |
| New issue  | The error has been seen for the first time.                                    |
| Regression | The group was marked **Resolved**, and the error has occurred again since.     |
| Unignored  | The group was **Ignored**, and the ignore condition you set has been breached. |

### Why it goes quiet

This is the part that surprises people, so it is worth stating plainly:

**An Unresolved error group does not alert.** After an error group alert fires, the group is set to Unresolved, and it stays silent no matter how many more times that error occurs. It will only alert again once you mark it **Resolved** (and it then recurs) or **Ignored** (and the ignore condition is breached).

This is intentional — one persistently broken task should not flood your Slack channel with a message per failed run. But it means an Error group alert is not a substitute for a run failure alert. If a task has been failing in production for days and you have had no notification, check whether the only alert you have configured is an Error group alert whose group is sitting at Unresolved.

### Which alert type should I use?

- **"Tell me about every run that fails"** → a **run fails** alert, from the Alerts page. It fires for every run that fails once its retries are exhausted.
- **"Tell me when something new breaks"** → an **Error group** alert, from the Errors page.

The two are complementary, and many teams want both.

## Alert webhooks

For the alert webhooks you can use the SDK to parse them. Here is an example of how to parse the webhook payload in Remix:

```ts
import { ActionFunctionArgs, json } from "@remix-run/server-runtime";
import { webhooks, WebhookError } from "@trigger.dev/sdk";

export async function action({ request }: ActionFunctionArgs) {
  // Make sure this is a POST request
  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    // Construct and verify the webhook event
    // This secret can be found on your Alerts page when you create a webhook alert
    const event = await webhooks.constructEvent(request, process.env.ALERT_WEBHOOK_SECRET!);

    // Process the event based on its type
    switch (event.type) {
      case "alert.run.failed": {
        console.log("[Webhook Internal Test] Run failed alert webhook received", { event });
        break;
      }
      case "alert.deployment.success": {
        console.log("[Webhook Internal Test] Deployment success alert webhook received", { event });
        break;
      }
      case "alert.deployment.failed": {
        console.log("[Webhook Internal Test] Deployment failed alert webhook received", { event });
        break;
      }
      case "alert.error": {
        console.log("[Webhook Internal Test] Error group alert webhook received", { event });
        break;
      }
      default: {
        console.log("[Webhook Internal Test] Unhandled webhook type", { event });
      }
    }

    // Return a success response
    return json({ received: true }, { status: 200 });
  } catch (err) {
    // Handle webhook errors
    if (err instanceof WebhookError) {
      console.error("Webhook error:", { message: err.message });
      return json({ error: err.message }, { status: 400 });
    }

    if (err instanceof Error) {
      console.error("Error processing webhook:", { message: err.message });
      return json({ error: err.message }, { status: 400 });
    }

    // Handle other errors
    console.error("Error processing webhook:", { err });
    return json({ error: "Internal server error" }, { status: 500 });
  }
}
```

### Common properties

When you create a webhook alert, you'll receive different payloads depending on the type of alert. All webhooks share some common properties:

**Property (type: string)**

A unique identifier for this webhook event

**Property (type: datetime)**

When this webhook event was created

**Property (type: string)**

The version of the webhook payload format

**Property (type: string)**

The type of alert webhook. One of: `alert.run.failed`, `alert.deployment.success`, `alert.deployment.failed`, or `alert.error`

### Run Failed Alert

This webhook is sent when a run fails. The payload is available on the `object` property:

**Property (type: string)**

Unique identifier for the task

**Property (type: string)**

File path where the task is defined

**Property (type: string)**

Name of the exported task function

**Property (type: string)**

Version of the task

**Property (type: string)**

Version of the SDK used

**Property (type: string)**

Version of the CLI used

**Property (type: string)**

Unique identifier for the run

**Property (type: number)**

Run number

**Property (type: string)**

Current status of the run

**Property (type: datetime)**

When the run was created

**Property (type: datetime)**

When the run started executing

**Property (type: datetime)**

When the run finished executing

**Property (type: boolean)**

Whether this is a test run

**Property (type: string)**

Idempotency key for the run

**Property (type: string\[])**

Associated tags

**Property (type: object)**

Error information

**Property (type: boolean)**

Whether the run was an out-of-memory error

**Property (type: string)**

Machine preset used for the run

**Property (type: string)**

URL to view the run in the dashboard

**Property (type: string)**

Environment ID

**Property (type: string)**

Environment type (STAGING or PRODUCTION)

**Property (type: string)**

Environment slug

**Property (type: string)**

Organization ID

**Property (type: string)**

Organization slug

**Property (type: string)**

Organization name

**Property (type: string)**

Project ID

**Property (type: string)**

Project reference

**Property (type: string)**

Project slug

**Property (type: string)**

Project name

### Deployment Success Alert

This webhook is sent when a deployment succeeds. The payload is available on the `object` property:

**Property (type: string)**

Deployment ID

**Property (type: string)**

Deployment status

**Property (type: string)**

Deployment version

**Property (type: string)**

Short code identifier

**Property (type: datetime)**

When the deployment completed

**Property (type: array)**

Array of deployed tasks with properties: id, filePath, exportName, and triggerSource

**Property (type: string)**

Environment ID

**Property (type: string)**

Environment type (STAGING or PRODUCTION)

**Property (type: string)**

Environment slug

**Property (type: string)**

Organization ID

**Property (type: string)**

Organization slug

**Property (type: string)**

Organization name

**Property (type: string)**

Project ID

**Property (type: string)**

Project reference

**Property (type: string)**

Project slug

**Property (type: string)**

Project name

### Deployment Failed Alert

This webhook is sent when a deployment fails. The payload is available on the `object` property:

**Property (type: string)**

Deployment ID

**Property (type: string)**

Deployment status

**Property (type: string)**

Deployment version

**Property (type: string)**

Short code identifier

**Property (type: datetime)**

When the deployment failed

**Property (type: string)**

Error name

**Property (type: string)**

Error message

**Property (type: string)**

Error stack trace (optional)

**Property (type: string)**

Standard error output (optional)

**Property (type: string)**

Environment ID

**Property (type: string)**

Environment type (STAGING or PRODUCTION)

**Property (type: string)**

Environment slug

**Property (type: string)**

Organization ID

**Property (type: string)**

Organization slug

**Property (type: string)**

Organization name

**Property (type: string)**

Project ID

**Property (type: string)**

Project reference

**Property (type: string)**

Project slug

**Property (type: string)**

Project name

### Error Group Alert

This webhook is sent for an [error group alert](#error-group-alerts). The payload is available on the `object` property:

**Property (type: string)**

Why the alert fired. One of: `new_issue`, `regression`, `unignored`

**Property (type: string)**

Identifier for the error group

**Property (type: string)**

Error type

**Property (type: string)**

Error message

**Property (type: string)**

Sample stack trace, if available

**Property (type: string)**

When the error was first seen

**Property (type: string)**

When the error was last seen

**Property (type: number)**

Number of occurrences

**Property (type: string)**

Task the error occurred in

**Property (type: string)**

Environment ID

**Property (type: string)**

Environment name

**Property (type: string)**

Organization ID

**Property (type: string)**

Organization slug

**Property (type: string)**

Organization name

**Property (type: string)**

Project ID

**Property (type: string)**

Project reference

**Property (type: string)**

Project slug

**Property (type: string)**

Project name

**Property (type: string)**

URL to view the error in the dashboard
