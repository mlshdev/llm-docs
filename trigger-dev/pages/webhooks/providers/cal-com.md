> Pinned source for Trigger.dev v4.8.6: [docs/webhooks/providers/cal-com.mdx](https://github.com/triggerdotdev/trigger.dev/blob/74765f97f1baafc7665d25b0f2f2af2dcf14436b/docs/webhooks/providers/cal-com.mdx)
> Canonical documentation: https://trigger.dev/docs/webhooks/providers/cal-com

# Cal.com webhooks

Receive and verify Cal.com webhooks with Trigger.dev. Check the HMAC-SHA256 signature in x-cal-signature-256 and run a task for each Cal.com event, filtered on event.triggerEvent.

**`webhooks.calCom()` verifies the HMAC-SHA256 signature Cal.com sends in `x-cal-signature-256` on every request.**

```ts /trigger/cal-com.ts
import { webhook, webhooks } from "@trigger.dev/sdk";

export const calCom = webhooks.endpoint.define({
  id: "cal-com",
  source: webhooks.calCom(),
});

export const calComEvents = webhook({
  id: "cal-com-events",
  endpoint: calCom,
  onEvent: async ({ event }) => {
    console.log(event);
  },
});
```

To run a subscriber only for some events, add a [filter](https://trigger.dev/docs/webhooks/filters) on `event.triggerEvent`.

| Setting      | Value                                                                              |
| ------------ | ---------------------------------------------------------------------------------- |
| Source       | `webhooks.calCom()`                                                                |
| Verification | HMAC-SHA256 in `x-cal-signature-256`                                               |
| Credential   | Secret you generate on Trigger.dev                                                 |
| Event type   | `event.triggerEvent`                                                               |
| Cal.com docs | [Cal.com webhook docs](https://cal.com/docs/developing/guides/automation/webhooks) |

## Set up Cal.com

1. Start `trigger dev` or deploy, then copy the endpoint's **Webhook URL** from the **Webhooks** page.
2. Choose **Generate secret** on the Trigger.dev endpoint and copy the value.
3. In Cal.com, open **Settings > Developer > Webhooks** and add a webhook with the webhook URL and the events your subscribers need. Paste the secret into its secret field. The secret is optional in Cal.com but required here: without it, Cal.com doesn't sign deliveries and every one is rejected. Cal.com hides the secret after you save.
4. Send a test event from Cal.com, or use the endpoint's **Test** tab, and check the endpoint's **Deliveries** tab. See [Verify the connection](https://trigger.dev/docs/webhooks/connect#verify-the-connection) if nothing arrives.
