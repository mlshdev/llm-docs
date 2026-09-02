> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.raindrop.md](https://github.com/n8n-io/n8n-docs/blob/0b69471cc64a4886de337982abd2f5d237dcd52a/docs/integrations/builtin/app-nodes/n8n-nodes-base.raindrop.md)

# Raindrop node <a id="raindrop-node"></a>

Use the Raindrop node to automate work in Raindrop, and integrate Raindrop with other applications. n8n has built-in support for a wide range of Raindrop features, including getting users, deleting tags, and creating, updating, deleting and getting collections and bookmarks.

On this page, you'll find a list of operations the Raindrop node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [Raindrop credentials](https://docs.n8n.io/integrations/builtin/credentials/raindrop) for guidance on setting up authentication.

## Operations <a id="operations"></a>

- Bookmark
  - Create
  - Delete
  - Get
  - Get All
  - Update
- Collection
  - Create
  - Delete
  - Get
  - Get All
  - Update
- Tag
  - Delete
  - Get All
- User
  - Get

## Templates and examples <a id="templates-and-examples"></a>

[Browse Raindrop node documentation integration templates](https://n8n.io/integrations/raindrop) or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
