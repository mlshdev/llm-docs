> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/cockpit.md](https://github.com/n8n-io/n8n-docs/blob/0ece31e57a42e63cf2a2c7f9a33b42888e09a5b3/docs/integrations/builtin/credentials/cockpit.md)

# Cockpit credentials <a id="cockpit-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [Cockpit](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.cockpit)

## Prerequisites <a id="prerequisites"></a>

- Create a [Cockpit](https://getcockpit.com/) account.
- Set up a [self-hosted instance of Cockpit](https://getcockpit.com/documentation/core/quickstart/installation).

## Supported authentication methods <a id="supported-authentication-methods"></a>

- API access token

## Related resources <a id="related-resources"></a>

Refer to [Cockpit's API documentation](https://getcockpit.com/documentation/core/api/introduction) for more information about the service.

## Using API access token <a id="using-api-access-token"></a>

To configure this credential, you'll need:

- Your **Cockpit URL**: The URL you use to access your Cockpit instance
- An **Access Token**: Refer to the [Cockpit Managing tokens documentation](https://getcockpit.com/documentation/core/api/authentication/#managing-tokens) for instructions on creating an API token. Use the **API token** as the n8n **Access Token**.
