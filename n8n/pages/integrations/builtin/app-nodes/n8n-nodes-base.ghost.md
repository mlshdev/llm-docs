> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.ghost.md](https://github.com/n8n-io/n8n-docs/blob/1db58de3a8d474a1ba99f5a612beac694402d963/docs/integrations/builtin/app-nodes/n8n-nodes-base.ghost.md)

# Ghost node <a id="ghost-node"></a>

Use the Ghost node to automate work in Ghost, and integrate Ghost with other applications. n8n has built-in support for a wide range of Ghost features, including creating, updating, deleting, and getting posts for the Admin and content API.

On this page, you'll find a list of operations the Ghost node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [Ghost credentials](https://docs.n8n.io/integrations/builtin/credentials/ghost) for guidance on setting up authentication.

> **Info**
> **This node can be used as an AI tool**
>
> This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](https://docs.n8n.io/build/integrate-ai/ai-examples/use-ai-for-parameters).

## Operations <a id="operations"></a>

### Admin API <a id="admin-api"></a>

- **Post**
  - Create a post
  - Delete a post
  - Get a post
  - Get all posts
  - Update a post

### Content API <a id="content-api"></a>

- **Post**
  - Get a post
  - Get all posts

## Templates and examples <a id="templates-and-examples"></a>

[Browse Ghost node documentation integration templates](https://n8n.io/integrations/ghost) or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
