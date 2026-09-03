> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.googlebooks.md](https://github.com/n8n-io/n8n-docs/blob/e2348a766e0ed24d6420aae246e6f0bccbc2c50e/docs/integrations/builtin/app-nodes/n8n-nodes-base.googlebooks.md)

# Google Books node <a id="google-books-node"></a>

Use the Google Books node to automate work in Google Books, and integrate Google Books with other applications. n8n has built-in support for a wide range of Google Books features, including retrieving a specific bookshelf resource for the specified user, adding volume to a bookshelf, and getting volume.

On this page, you'll find a list of operations the Google Books node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [Google credentials](https://docs.n8n.io/integrations/builtin/credentials/google) for guidance on setting up authentication.

## Operations <a id="operations"></a>

- Bookshelf
  - Retrieve a specific bookshelf resource for the specified user
  - Get all public bookshelf resource for the specified user
- Bookshelf Volume
  - Add a volume to a bookshelf
  - Clears all volumes from a bookshelf
  - Get all volumes in a specific bookshelf for the specified user
  - Moves a volume within a bookshelf
  - Removes a volume from a bookshelf
- Volume
  - Get a volume resource based on ID
  - Get all volumes filtered by query

## Templates and examples <a id="templates-and-examples"></a>

[Browse Google Books node documentation integration templates](https://n8n.io/integrations/google-books) or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
