> Commit-pinned source for n8n main: [docs/integrations/builtin/trigger-nodes/n8n-nodes-base.calendlytrigger.md](https://github.com/n8n-io/n8n-docs/blob/78fea4497784e9c1f3f34b12757ef7a2a6b363af/docs/integrations/builtin/trigger-nodes/n8n-nodes-base.calendlytrigger.md)

# Calendly Trigger node <a id="calendly-trigger-node"></a>

[Calendly](https://calendly.com/) is an automated scheduling software that's designed to help find meeting times.

> **Info**
> **Credentials**
>
> You can find authentication information for this node [here](https://docs.n8n.io/integrations/builtin/credentials/calendly).

> **Info**
> **Examples and templates**
>
> For usage examples and templates to help you get started, refer to n8n's [Calendly Trigger integrations](https://n8n.io/integrations/calendly-trigger/) page.

## Events <a id="events"></a>

- Event created
- Event canceled

## Common issues <a id="common-issues"></a>

Here are some common errors and issues with the Calendly Trigger node and steps to resolve or troubleshoot them.

### Node only triggers for Calendly-managed bookings <a id="node-only-triggers-for-calendly-managed-bookings"></a>

Calendly webhooks only fire for bookings and cancellations managed by Calendly. Creating or editing an event directly in a connected calendar, such as Google Calendar, won't trigger the Calendly Trigger node.

### Webhook callback URL must be public HTTPS <a id="webhook-callback-url-must-be-public-https"></a>

The Calendly Trigger node uses Calendly webhooks, and Calendly requires webhook callback URLs to be public HTTPS URLs. For local testing, use a tunnel such as [ngrok](https://ngrok.com/) or [Cloudflare Tunnel](https://www.cloudflare.com/products/tunnel/) and configure n8n to use that public HTTPS URL for webhooks. Refer to [Configuration > Webhook URL](https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/configuration-examples/configure-webhook-urls-with-reverse-proxy) for setup details.
