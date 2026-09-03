> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.sendgrid.md](https://github.com/n8n-io/n8n-docs/blob/b732ee99d015bf1b55668862de6e07bbcb573c0c/docs/integrations/builtin/app-nodes/n8n-nodes-base.sendgrid.md)

# SendGrid node <a id="sendgrid-node"></a>

Use the SendGrid node to automate work in SendGrid, and integrate SendGrid with other applications. n8n has built-in support for a wide range of SendGrid features, including creating, updating, deleting, and getting contacts, and lists, as well as sending emails.

On this page, you'll find a list of operations the SendGrid node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [SendGrid credentials](https://docs.n8n.io/integrations/builtin/credentials/sendgrid) for guidance on setting up authentication.

> **Info**
> **This node can be used as an AI tool**
>
> This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](https://docs.n8n.io/build/integrate-ai/ai-examples/use-ai-for-parameters).

## Operations <a id="operations"></a>

- Contact
  - Create/update a contact
  - Delete a contact
  - Get a contact by ID
  - Get all contacts
- List
  - Create a list
  - Delete a list
  - Get a list
  - Get all lists
  - Update a list
- Mail
  - Send an email.

## Templates and examples <a id="templates-and-examples"></a>

[Browse SendGrid node documentation integration templates](https://n8n.io/integrations/sendgrid) or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
