> Pinned source for Trigger.dev v4.8.10: [docs/webhooks/providers/zendesk.mdx](https://github.com/triggerdotdev/trigger.dev/blob/523400fcb4d65f3f24303b92566862a72817907c/docs/webhooks/providers/zendesk.mdx)
> Canonical documentation: https://trigger.dev/docs/webhooks/providers/zendesk

# Zendesk webhooks

Receive and verify Zendesk webhooks with Trigger.dev. Check the HMAC-SHA256 signature in x-zendesk-webhook-signature and run a task for each Zendesk event, filtered on its event type.

**`webhooks.zendesk()` verifies the HMAC-SHA256 signature Zendesk sends in `x-zendesk-webhook-signature` on every request.**

```ts /trigger/zendesk.ts
import { webhook, webhooks } from "@trigger.dev/sdk";

export const zendesk = webhooks.endpoint.define({
  id: "zendesk",
  source: webhooks.zendesk(),
});

export const zendeskEvents = webhook({
  id: "zendesk-events",
  endpoint: zendesk,
  onEvent: async ({ event }) => {
    console.log(event);
  },
});
```

To run a subscriber only for some events, add a [filter](https://trigger.dev/docs/webhooks/filters) on `event.type` for Zendesk event subscriptions. For trigger and automation webhooks, you write the JSON body, so filter on a field your template sends.

| Setting      | Value                                                                                         |
| ------------ | --------------------------------------------------------------------------------------------- |
| Source       | `webhooks.zendesk()`                                                                          |
| Verification | HMAC-SHA256 in `x-zendesk-webhook-signature`                                                  |
| Credential   | Signing secret issued by Zendesk                                                              |
| Event type   | `event.type` for event subscriptions; a field from your template for triggers and automations |
| Zendesk docs | [Zendesk webhook docs](https://developer.zendesk.com/documentation/webhooks/verifying/)       |

## Set up Zendesk

1. Start `trigger dev` or deploy, then copy the endpoint's **Webhook URL** from the **Webhooks** page.
2. In Zendesk Admin Center, open **Apps and integrations > Webhooks** and create a webhook with the webhook URL. Subscribe it to Zendesk events, or connect it to a trigger or automation.
3. Zendesk generates the signing secret. On the webhook's details, choose **Reveal secret**, copy it, and choose **Set signing secret** on the Trigger.dev endpoint.
4. Send a test event from Zendesk, or use the endpoint's **Test** tab, and check the endpoint's **Deliveries** tab. See [Verify the connection](https://trigger.dev/docs/webhooks/connect#verify-the-connection) if nothing arrives.
