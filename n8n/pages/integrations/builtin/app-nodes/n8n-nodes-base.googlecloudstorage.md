> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.googlecloudstorage.md](https://github.com/n8n-io/n8n-docs/blob/afebf5d9c6ff327fa215b3e6f99627e11fc9d3f2/docs/integrations/builtin/app-nodes/n8n-nodes-base.googlecloudstorage.md)

# Google Cloud Storage node <a id="google-cloud-storage-node"></a>

Use the Google Cloud Storage node to automate work in Google Cloud Storage, and integrate Google Cloud Storage with other applications. n8n has built-in support for a wide range of Google Cloud Storage features, including creating, updating, deleting, and getting buckets and objects.

On this page, you'll find a list of operations the Google Cloud Storage node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [Google Cloud Storage credentials](https://docs.n8n.io/integrations/builtin/credentials/google) for guidance on setting up authentication.

## Operations <a id="operations"></a>

- Bucket
  - Create
  - Delete
  - Get
  - Get Many
  - Update
- Object
  - Create
  - Delete
  - Get
  - Get Many
  - Update

## Templates and examples <a id="templates-and-examples"></a>

[Browse Google Cloud Storage node documentation integration templates](https://n8n.io/integrations/google-cloud-storage) or [search all templates](https://n8n.io/workflows/)

## Related resources <a id="related-resources"></a>

Refer to Google's [Cloud Storage API documentation](https://cloud.google.com/storage/docs/apis) for detailed information about the API that this node integrates with.

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
