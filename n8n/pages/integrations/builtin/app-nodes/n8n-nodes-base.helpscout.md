> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.helpscout.md](https://github.com/n8n-io/n8n-docs/blob/1db58de3a8d474a1ba99f5a612beac694402d963/docs/integrations/builtin/app-nodes/n8n-nodes-base.helpscout.md)

# Help Scout node <a id="help-scout-node"></a>

Use the Help Scout node to automate work in Help Scout, and integrate Help Scout with other applications. n8n has built-in support for a wide range of Help Scout features, including creating, updating, deleting, and getting conversations, and customers.

On this page, you'll find a list of operations the Help Scout node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [Help Scout credentials](https://docs.n8n.io/integrations/builtin/credentials/helpscout) for guidance on setting up authentication.

## Operations <a id="operations"></a>

- Conversation
  - Create a new conversation
  - Delete a conversation
  - Get a conversation
  - Get all conversations
- Customer
  - Create a new customer
  - Get a customer
  - Get all customers
  - Get customer property definitions
  - Update a customer
- Mailbox
  - Get data of a mailbox
  - Get all mailboxes
- Thread
  - Create a new chat thread
  - Get all chat threads

## Templates and examples <a id="templates-and-examples"></a>

[Browse Help Scout node documentation integration templates](https://n8n.io/integrations/helpscout) or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
