> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.lonescale.md](https://github.com/n8n-io/n8n-docs/blob/78fea4497784e9c1f3f34b12757ef7a2a6b363af/docs/integrations/builtin/app-nodes/n8n-nodes-base.lonescale.md)

# LoneScale node <a id="lonescale-node"></a>

Use the LoneScale node to automate work in LoneScale and integrate LoneScale with other applications. n8n has built-in support for managing Lists and Items in LoneScale.

On this page, you'll find a list of operations the LoneScale node supports, and links to more resources.

> **Info**
> **Credentials**
>
> You can find authentication information for this node [here](https://docs.n8n.io/integrations/builtin/credentials/lonescale).

## Operations <a id="operations"></a>

- List
  - Create
- Item
  - Create

## Templates and examples <a id="templates-and-examples"></a>

[Browse LoneScale node documentation integration templates](https://n8n.io/integrations/lonescale) or [search all templates](https://n8n.io/workflows/)

## Related resources <a id="related-resources"></a>

Refer to [LoneScales documentation](https://help-center.lonescale.com/en/articles/6454360-lonescale-public-api) for more information about the service.

n8n provides a trigger node for LoneScale. You can find the trigger node docs [here](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.lonescaletrigger).

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
