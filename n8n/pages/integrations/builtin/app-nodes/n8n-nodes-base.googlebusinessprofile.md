> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.googlebusinessprofile.md](https://github.com/n8n-io/n8n-docs/blob/191a04ec05b8df3fe1fb96f54726ed40db2518f7/docs/integrations/builtin/app-nodes/n8n-nodes-base.googlebusinessprofile.md)

# Google Business Profile node <a id="google-business-profile-node"></a>

Use the Google Business Profile node to automate work in Google Business Profile and integrate Google Business Profile with other applications. n8n has built-in support for a wide range of Google Business Profile features, which includes creating, updating, and deleting posts and reviews.

On this page, you'll find a list of operations the Google Business Profile node supports, and links to more resources.

> **Info**
> **Credentials**
>
> You can find authentication information for this node [here](https://docs.n8n.io/integrations/builtin/credentials/google).

## Operations <a id="operations"></a>

- Post
  - Create
  - Delete
  - Get
  - Get Many
  - Update
- Review
  - Delete Reply
  - Get
  - Get Many
  - Reply

## Templates and examples <a id="templates-and-examples"></a>

[Browse Google Business Profile node documentation integration templates](https://n8n.io/integrations/google-business-profile) or [search all templates](https://n8n.io/workflows/)

## Related resources <a id="related-resources"></a>

n8n provides a trigger node for Google Business Profile. You can find the trigger node docs [here](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.googlebusinessprofiletrigger).

Refer to [Google Business Profile's documentation](https://developers.google.com/my-business/reference/rest) for more information about the service.

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
