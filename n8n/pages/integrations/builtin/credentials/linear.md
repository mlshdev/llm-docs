> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/linear.md](https://github.com/n8n-io/n8n-docs/blob/78fea4497784e9c1f3f34b12757ef7a2a6b363af/docs/integrations/builtin/credentials/linear.md)

# Linear credentials <a id="linear-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [Linear Trigger](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.lineartrigger)
- [Linear](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.linear)

## Prerequisites <a id="prerequisites"></a>

Create a [Linear](https://linear.app/) account.

## Supported authentication methods <a id="supported-authentication-methods"></a>

- API key
- OAuth2

## Related resources <a id="related-resources"></a>

Refer to [Linear's API documentation](https://developers.linear.app/docs/graphql/working-with-the-graphql-api) for more information about the service.

## Using API key <a id="using-api-key"></a>

To configure this credential, you'll need:

- A personal **API Key**: Create a dedicated personal API key in your [**Settings** > **Security & access**](https://linear.app/n8n/settings/account/security). Refer to the [Linear Personal API keys documentation](https://linear.app/developers/graphql#personal-api-keys) for more information.

## Using OAuth2 <a id="using-oauth2"></a>

To configure this credential, you'll need:

- A **Client ID**: Generated when you create a new OAuth2 application.
- A **Client Secret**: Generated when you create a new OAuth2 application.
- Select the **Actor**: The actor defines how the OAuth2 application should create issues, comments and other changes. Options include:
  - **User** (Linear's default): The application creates resources as the authorizing user. Use this option if you want each user to do their own authentication.
  - **Application**: The application creates resources as itself. Use this option if you have only one user (like an admin) authorizing the application.
- To use this credential with the [Linear Trigger](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.lineartrigger) node, you must enable the **Include Admin Scope** toggle.

Refer to the [Linear OAuth2 Authentication documentation](https://developers.linear.app/docs/oauth/authentication) for more detailed instructions and explanations. Use the n8n **OAuth Redirect URL** as the **Redirect callback URL** in your Linear OAuth2 application.
