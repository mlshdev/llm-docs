> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/auth0management.md](https://github.com/n8n-io/n8n-docs/blob/afebf5d9c6ff327fa215b3e6f99627e11fc9d3f2/docs/integrations/builtin/credentials/auth0management.md)

# Auth0 Management credentials <a id="auth0-management-credentials"></a>

You can use these credentials to authenticate when using the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to make a [Custom API call](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes).

## Prerequisites <a id="prerequisites"></a>

Create an [Auth0](https://auth0.com) account.

## Supported authentication methods <a id="supported-authentication-methods"></a>

- API client secret

## Related resources <a id="related-resources"></a>

Refer to [Auth0 Management's documentation](https://auth0.com/docs/api/management/v2) for more information about the service.

This is a credential-only node. Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) to learn more. View [example workflows and related content](https://n8n.io/integrations/auth0-management-api/) on n8n's website.

## Using API client secret <a id="using-api-client-secret"></a>

To configure this credential, you'll need:

- An Auth0 **Domain**
- A **Client ID**
- A **Client Secret**

Refer to the [Auth0 Management API Get Access Tokens documentation](https://auth0.com/docs/secure/tokens/access-tokens/get-access-tokens) for instructions on obtaining the Client ID and Client Secret from the application's **Settings** tab.
