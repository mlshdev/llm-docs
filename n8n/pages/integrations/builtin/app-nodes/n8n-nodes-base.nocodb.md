> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.nocodb.md](https://github.com/n8n-io/n8n-docs/blob/32d4c1af45711af43703671a66f502ef7bd2b932/docs/integrations/builtin/app-nodes/n8n-nodes-base.nocodb.md)

# NocoDB node <a id="nocodb-node"></a>

Use the NocoDB node to automate work in NocoDB, and integrate NocoDB with other applications. n8n has built-in support for a wide range of NocoDB features, including creating, updating, deleting, and retrieving rows.

On this page, you'll find a list of operations the NocoDB node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [NocoDB credentials](https://docs.n8n.io/integrations/builtin/credentials/nocodb) for guidance on setting up authentication.

> **Info**
> **This node can be used as an AI tool**
>
> This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](https://docs.n8n.io/build/integrate-ai/ai-examples/use-ai-for-parameters).

## Operations <a id="operations"></a>

- Row
  - Create
  - Delete
  - Get
  - Get Many
  - Update a row

## Templates and examples <a id="templates-and-examples"></a>

[Browse NocoDB node documentation integration templates](https://n8n.io/integrations/nocodb) or [search all templates](https://n8n.io/workflows/)

## Relates resources <a id="relates-resources"></a>

Refer to [NocoDB's documentation](https://docs.nocodb.com/) for more information about the service.

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
