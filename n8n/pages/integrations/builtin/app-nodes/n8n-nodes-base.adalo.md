> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.adalo.md](https://github.com/n8n-io/n8n-docs/blob/afebf5d9c6ff327fa215b3e6f99627e11fc9d3f2/docs/integrations/builtin/app-nodes/n8n-nodes-base.adalo.md)

# Adalo node <a id="adalo-node"></a>

Use the Adalo node to automate work in Adalo, and integrate Adalo with other applications. n8n has built-in support for a wide range of Adalo features, including like creating, getting, updating and deleting databases, records, and collections.

On this page, you'll find a list of operations the Adalo node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [Adalo credentials](https://docs.n8n.io/integrations/builtin/credentials/adalo) for guidance on setting up authentication.

## Operations <a id="operations"></a>

- Collection
  - Create
  - Delete
  - Get
  - Get Many
  - Update

## Templates and examples <a id="templates-and-examples"></a>

[Browse Adalo node documentation integration templates](https://n8n.io/integrations/adalo) or [search all templates](https://n8n.io/workflows/)

## Related resources <a id="related-resources"></a>

Refer to [Adalo's documentation](https://help.adalo.com/) for more information on using Adalo. Their [External Collections with APIs](https://help.adalo.com/integrations/external-collections-with-apis) page gives more detail about what you can do with Adalo collections.

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
