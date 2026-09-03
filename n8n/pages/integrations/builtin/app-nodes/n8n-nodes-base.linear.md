> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.linear.md](https://github.com/n8n-io/n8n-docs/blob/191a04ec05b8df3fe1fb96f54726ed40db2518f7/docs/integrations/builtin/app-nodes/n8n-nodes-base.linear.md)

# Linear node <a id="linear-node"></a>

Use the Linear node to automate work in Linear, and integrate Linear with other applications. n8n has built-in support for a wide range of Linear features, including creating, updating, deleting, and getting issues.

On this page, you'll find a list of operations the Linear node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [Linear credentials](https://docs.n8n.io/integrations/builtin/credentials/linear) for guidance on setting up authentication.

## Operations <a id="operations"></a>

- Comment
  - Add Comment
- Issue
  - Add Link
  - Create
  - Delete
  - Get
  - Get Many
  - Update

## Templates and examples <a id="templates-and-examples"></a>

[Browse Linear node documentation integration templates](https://n8n.io/integrations/linear) or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
