> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.notion/README.md](https://github.com/n8n-io/n8n-docs/blob/1db58de3a8d474a1ba99f5a612beac694402d963/docs/integrations/builtin/app-nodes/n8n-nodes-base.notion/README.md)

# Notion node <a id="notion-node"></a>

Use the Notion node to automate work in Notion, and integrate Notion with other applications. n8n has built-in support for a wide range of Notion features, including getting and searching databases, creating pages, and getting users.

On this page, you'll find a list of operations the Notion node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [Notion credentials](https://docs.n8n.io/integrations/builtin/credentials/notion) for guidance on setting up authentication.

> **Info**
> **This node can be used as an AI tool**
>
> This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](https://docs.n8n.io/build/integrate-ai/ai-examples/use-ai-for-parameters).

## Operations <a id="operations"></a>

- Block
  - Append After
  - Get Many
  - Get Markdown
- Data Source
  - Get
  - Search
- Database
  - Get
- Database Page
  - Create
  - Get
  - Get Many
  - Update
- Page
  - Archive
  - Create
  - Get Markdown
  - Search
  - Update Markdown
- User
  - Get
  - Get Many

## Templates and examples <a id="templates-and-examples"></a>

[Browse n8n-nodes-base.notion integration templates](https://n8n.io/integrations/notion) or [search all templates](https://n8n.io/workflows/)

## Related resources <a id="related-resources"></a>

n8n provides an app node for Notion. You can find the trigger node docs [here](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.notiontrigger).

Refer to [Notion's documentation](https://developers.notion.com/) for details about their API.

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.

## Common issues <a id="common-issues"></a>

For common errors or issues and suggested resolution steps, refer to [Common issues](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.notion/common-issues).
