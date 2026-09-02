> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.npm.md](https://github.com/n8n-io/n8n-docs/blob/78fea4497784e9c1f3f34b12757ef7a2a6b363af/docs/integrations/builtin/app-nodes/n8n-nodes-base.npm.md)

# npm node <a id="npm-node"></a>

Use the npm node to automate work in npm, and integrate npm with other applications.

On this page, you'll find a list of operations the npm node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [npm credentials](https://docs.n8n.io/integrations/builtin/credentials/npm) for guidance on setting up authentication.

## Operations <a id="operations"></a>

- Package
  - Get Package Metadata
  - Get Package Versions
  - Search for Packages
- Distribution Tag
  - Get All Tags
  - Update a Tag

## Templates and examples <a id="templates-and-examples"></a>

[Browse npm node documentation integration templates](https://n8n.io/integrations/npm) or [search all templates](https://n8n.io/workflows/)

## Related resources <a id="related-resources"></a>

Refer to [npm's documentation](https://docs.npmjs.com/) for more information about the service.

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
