> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.wordpress.md](https://github.com/n8n-io/n8n-docs/blob/e2348a766e0ed24d6420aae246e6f0bccbc2c50e/docs/integrations/builtin/app-nodes/n8n-nodes-base.wordpress.md)

# WordPress node <a id="wordpress-node"></a>

Use the WordPress node to automate work in WordPress, and integrate WordPress with other applications. n8n has built-in support for a wide range of WordPress features, including creating, updating, and getting posts and users.

On this page, you'll find a list of operations the WordPress node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [WordPress credentials](https://docs.n8n.io/integrations/builtin/credentials/wordpress) for guidance on setting up authentication.

> **Info**
> **This node can be used as an AI tool**
>
> This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](https://docs.n8n.io/build/integrate-ai/ai-examples/use-ai-for-parameters).

## Operations <a id="operations"></a>

- Post
  - Create a post
  - Get a post
  - Get all posts
  - Update a post
- Pages
  - Create a page
  - Get a page
  - Get all pages
  - Update a page
- User
  - Create a user
  - Get a user
  - Get all users
  - Update a user

## Templates and examples <a id="templates-and-examples"></a>

[Browse WordPress node documentation integration templates](https://n8n.io/integrations/wordpress) or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
