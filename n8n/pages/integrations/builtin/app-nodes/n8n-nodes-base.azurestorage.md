> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.azurestorage.md](https://github.com/n8n-io/n8n-docs/blob/1db58de3a8d474a1ba99f5a612beac694402d963/docs/integrations/builtin/app-nodes/n8n-nodes-base.azurestorage.md)

# Azure Storage node <a id="azure-storage-node"></a>

The Azure Storage node has built-in support for a wide range of features, which includes creating, getting, and deleting blobs and containers. Use this node to automate work within the Azure Storage service or integrate it with other services in your workflow.

On this page, you'll find a list of operations the Azure Storage node supports, and links to more resources.

> **Info**
> **Credentials**
>
> You can find authentication information for this node [here](https://docs.n8n.io/integrations/builtin/credentials/azurestorage).

## Operations <a id="operations"></a>

- **Blob**
  - **Create blob**: Create a new blob or replace an existing one.
  - **Delete blob**: Delete an existing blob.
  - **Get blob**: Retrieve data for a specific blob.
  - **Get many blobs**: Retrieve a list of blobs.
- **Container**
  - **Create container**: Create a new container.
  - **Delete container**: Delete an existing container.
  - **Get container**: Retrieve data for a specific container.
  - **Get many containers**: Retrieve a list of containers.

## Templates and examples <a id="templates-and-examples"></a>

[Browse Azure Storage node documentation integration templates](https://n8n.io/integrations/azure-storage) or [search all templates](https://n8n.io/workflows/)

## Related resources <a id="related-resources"></a>

Refer to [Microsoft's Azure Storage documentation](https://learn.microsoft.com/en-us/rest/api/storageservices/) for more information about the service.

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
