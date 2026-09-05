> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.cloudflare.md](https://github.com/n8n-io/n8n-docs/blob/3317373ce39c3ce2406c8e3d99bb2da7f7180321/docs/integrations/builtin/app-nodes/n8n-nodes-base.cloudflare.md)

# Cloudflare node <a id="cloudflare-node"></a>

Use the Cloudflare node to automate work in Cloudflare, and integrate Cloudflare with other applications. n8n has built-in support for a wide range of Cloudflare features, including deleting, getting, and uploading zone certificates.

On this page, you'll find a list of operations the Cloudflare node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [Cloudflare  credentials](https://docs.n8n.io/integrations/builtin/credentials/cloudflare) for guidance on setting up authentication.

## Operations <a id="operations"></a>

- Zone Certificate
  - Delete
  - Get
  - Get Many
  - Upload

## Templates and examples <a id="templates-and-examples"></a>

[Browse Cloudflare node documentation integration templates](https://n8n.io/integrations/cloudflare) or [search all templates](https://n8n.io/workflows/)

## Related resources <a id="related-resources"></a>

Refer to [Cloudflare's API documentation on zone-level authentication](https://api.cloudflare.com/#zone-level-authenticated-origin-pulls-properties) for more information on this service.

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
