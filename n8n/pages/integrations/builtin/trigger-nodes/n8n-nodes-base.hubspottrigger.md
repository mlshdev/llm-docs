> Commit-pinned source for n8n main: [docs/integrations/builtin/trigger-nodes/n8n-nodes-base.hubspottrigger.md](https://github.com/n8n-io/n8n-docs/blob/afebf5d9c6ff327fa215b3e6f99627e11fc9d3f2/docs/integrations/builtin/trigger-nodes/n8n-nodes-base.hubspottrigger.md)

# HubSpot Trigger node <a id="hubspot-trigger-node"></a>

[HubSpot](https://www.hubspot.com/) provides tools for social media marketing, content management, web analytics, landing pages, customer support, and search engine optimization.

> **Warning**
> **Webhooks**
>
> If you activate a second trigger, the previous trigger stops working. This is because the trigger registers a new webhook with HubSpot when activated. HubSpot only allows one webhook at a time.

> **Info**
> **Credentials**
>
> You can find authentication information for this node [here](https://docs.n8n.io/integrations/builtin/credentials/hubspot).

> **Info**
> **Examples and templates**
>
> For usage examples and templates to help you get started, refer to n8n's [HubSpot Trigger integrations](https://n8n.io/integrations/hubspot-trigger/) page.

## Events <a id="events"></a>

- Company
  - Created
  - Deleted
  - Property changed
- Contact
  - Created
  - Deleted
  - Privacy deleted
  - Property changed
- Conversation
  - Created
  - Deleted
  - New message
  - Privacy deletion
  - Property changed
- Deal
  - Created
  - Deleted
  - Property changed
- Ticket
  - Created
  - Deleted
  - Property changed

## Related resources <a id="related-resources"></a>

n8n provides an app node for HubSpot. You can find the node docs [here](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.hubspot).

View [example workflows and related content](https://n8n.io/integrations/hubspot-trigger/) on n8n's website.

Refer to [HubSpot's documentation](https://developers.hubspot.com/docs/api/overview) for details about their API.
