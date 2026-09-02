> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.okta.md](https://github.com/n8n-io/n8n-docs/blob/50a2c8dc6704c114ca2b241eac1e72867ed718fe/docs/integrations/builtin/app-nodes/n8n-nodes-base.okta.md)

# Okta node <a id="okta-node"></a>

Use the Okta node to automate work in Okta and integrate Okta with other applications. n8n has built-in support for a wide range of Okta features, which includes creating, updating, and deleting users.

On this page, you'll find a list of operations the Okta node supports, and links to more resources.

> **Info**
> **Credentials**
>
> You can find authentication information for this node [here](https://docs.n8n.io/integrations/builtin/credentials/okta).

## Operations <a id="operations"></a>

- User
  - Create a new user
  - Delete an existing user
  - Get details of a user
  - Get many users
  - Update an existing user

## Templates and examples <a id="templates-and-examples"></a>

[Browse Okta node documentation integration templates](https://n8n.io/integrations/okta) or [search all templates](https://n8n.io/workflows/)

## Related resources <a id="related-resources"></a>

Refer to [Okta's documentation](https://developer.okta.com/docs/guides/) for more information about the service.

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
