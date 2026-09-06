> Release-pinned source for Trigger.dev v4.5.16: [docs/troubleshooting-alerts.mdx](https://trigger.dev/docs/troubleshooting-alerts)

# Alerts

Get alerted when runs or deployments fail, or when deployments succeed.

We support receiving alerts for the following events:

- Run fails
- Deployment fails
- Deployment succeeds

## How to setup alerts

1. Click on "Alerts" in the left hand side menu, then click on "New alert" to open the new alert modal.
   ![Email alerts](https://raw.githubusercontent.com/triggerdotdev/trigger.dev/ee34a4b13710742ae26d94831547fa2b6cddc9bd/docs/images/troubleshooting-alerts-blank.png)
2. Choose to be notified by email, Slack notification or webhook whenever:

   - a run fails
   - a deployment fails
   - a deployment succeeds

     ![Email alerts](https://raw.githubusercontent.com/triggerdotdev/trigger.dev/ee34a4b13710742ae26d94831547fa2b6cddc9bd/docs/images/troubleshooting-alerts-modal.png)
3. Click on the triple dot menu on the right side of the table row and select "Disable" or "Delete".

   ![Disable and delete alerts](https://raw.githubusercontent.com/triggerdotdev/trigger.dev/ee34a4b13710742ae26d94831547fa2b6cddc9bd/docs/images/troubleshooting-alerts-disable-delete.png)

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

The type of alert webhook. One of: `alert.run.failed`, `alert.deployment.success`, or `alert.deployment.failed`

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
