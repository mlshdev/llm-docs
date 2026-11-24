> Pinned source for Trigger.dev v4.8.10: [docs/webhooks/providers/langfuse.mdx](https://github.com/triggerdotdev/trigger.dev/blob/523400fcb4d65f3f24303b92566862a72817907c/docs/webhooks/providers/langfuse.mdx)
> Canonical documentation: https://trigger.dev/docs/webhooks/providers/langfuse

# Langfuse webhooks

Receive and verify Langfuse webhooks with Trigger.dev. Check the HMAC-SHA256 signature in x-langfuse-signature and run a task for each Langfuse event, filtered on event.type.

**`webhooks.langfuse()` verifies the HMAC-SHA256 signature Langfuse sends in `x-langfuse-signature` on every request.**

```ts /trigger/langfuse.ts
import { webhook, webhooks } from "@trigger.dev/sdk";

export const langfuse = webhooks.endpoint.define({
  id: "langfuse",
  source: webhooks.langfuse(),
});

export const langfuseEvents = webhook({
  id: "langfuse-events",
  endpoint: langfuse,
  filter: "event.type == 'prompt-version' && event.action == 'created'",
  onEvent: async ({ event }) => {
    console.log(event);
  },
});
```

| Setting       | Value                                                                                                     |
| ------------- | --------------------------------------------------------------------------------------------------------- |
| Source        | `webhooks.langfuse()`                                                                                     |
| Verification  | HMAC-SHA256 in `x-langfuse-signature`                                                                     |
| Credential    | Signing secret issued by Langfuse                                                                         |
| Event type    | `event.type`                                                                                              |
| Langfuse docs | [Langfuse webhook docs](https://langfuse.com/docs/prompt-management/features/webhooks-slack-integrations) |

## Set up Langfuse

1. Start `trigger dev` or deploy, then copy the endpoint's **Webhook URL** from the **Webhooks** page.
2. In the Langfuse project, go to **Prompts > Automations > Create Automation**. Choose the prompt version event and the actions (created, updated, deleted) your subscribers need, and set the request URL to the webhook URL.
3. Copy the signing secret Langfuse shows (it starts with `lf-whsec_`), then choose **Set signing secret** on the Trigger.dev endpoint.
4. Send a test event from Langfuse, or use the endpoint's **Test** tab, and check the endpoint's **Deliveries** tab. See [Verify the connection](https://trigger.dev/docs/webhooks/connect#verify-the-connection) if nothing arrives.
