> Pinned source for Trigger.dev v4.8.7: [docs/webhooks/providers/docusign.mdx](https://github.com/triggerdotdev/trigger.dev/blob/fae01445473658369323ddc462b71eae51c790ff/docs/webhooks/providers/docusign.mdx)
> Canonical documentation: https://trigger.dev/docs/webhooks/providers/docusign

# DocuSign webhooks

Receive and verify DocuSign webhooks with Trigger.dev. Check the HMAC-SHA256 signature in x-docusign-signature-1 and run a task for each DocuSign event, filtered on event.event.

**`webhooks.docusign()` verifies the HMAC-SHA256 signature DocuSign sends in `x-docusign-signature-1` on every request.**

```ts /trigger/docusign.ts
import { webhook, webhooks } from "@trigger.dev/sdk";

export const docusign = webhooks.endpoint.define({
  id: "docusign",
  source: webhooks.docusign(),
});

export const docusignEvents = webhook({
  id: "docusign-events",
  endpoint: docusign,
  onEvent: async ({ event }) => {
    console.log(event);
  },
});
```

To run a subscriber only for some events, add a [filter](https://trigger.dev/docs/webhooks/filters) on `event.event`.

| Setting       | Value                                                                               |
| ------------- | ----------------------------------------------------------------------------------- |
| Source        | `webhooks.docusign()`                                                               |
| Verification  | HMAC-SHA256 in `x-docusign-signature-1`                                             |
| Credential    | Connect secret key issued by DocuSign                                               |
| Event type    | `event.event`                                                                       |
| DocuSign docs | [DocuSign webhook docs](https://developers.docusign.com/platform/webhooks/connect/) |

## Set up DocuSign

1. Start `trigger dev` or deploy, then copy the endpoint's **Webhook URL** from the **Webhooks** page.
2. In DocuSign eSignature Admin, open **Connect > Connect Keys** and choose **Add Secret Key**. Copy the key: DocuSign shows it in full only once. Choose **Set signing secret** on the Trigger.dev endpoint and paste it.
3. Add a Connect configuration with the webhook URL, select the events your subscribers need, and tick **Include HMAC Signature**. Without it, DocuSign doesn't sign deliveries and every one is rejected.
4. Send a test event from DocuSign, or use the endpoint's **Test** tab, and check the endpoint's **Deliveries** tab. See [Verify the connection](https://trigger.dev/docs/webhooks/connect#verify-the-connection) if nothing arrives.
