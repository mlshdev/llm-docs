> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.mailchimp.md](https://github.com/n8n-io/n8n-docs/blob/6f4b48e69e3ab9acbf023f18020c40c125c16d45/docs/integrations/builtin/app-nodes/n8n-nodes-base.mailchimp.md)

# Mailchimp node <a id="mailchimp-node"></a>

Use the Mailchimp node to automate work in Mailchimp, and integrate Mailchimp with other applications. n8n has built-in support for a wide range of Mailchimp features, including creating, updating, and deleting campaigns, as well as getting list groups.

On this page, you'll find a list of operations the Mailchimp node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [Mailchimp credentials](https://docs.n8n.io/integrations/builtin/credentials/mailchimp) for guidance on setting up authentication.

## Operations <a id="operations"></a>

- Campaign
  - Delete a campaign
  - Get a campaign
  - Get all the campaigns
  - Replicate a campaign
  - Creates a Resend to Non-Openers version of this campaign
  - Send a campaign
- List Group
  - Get all groups
- Member
  - Create a new member on list
  - Delete a member on list
  - Get a member on list
  - Get all members on list
  - Update a new member on list
- Member Tag
  - Add tags from a list member
  - Remove tags from a list member

## Templates and examples <a id="templates-and-examples"></a>

[Browse Mailchimp node documentation integration templates](https://n8n.io/integrations/mailchimp) or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
