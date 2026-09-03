> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/freshservice.md](https://github.com/n8n-io/n8n-docs/blob/6f4b48e69e3ab9acbf023f18020c40c125c16d45/docs/integrations/builtin/credentials/freshservice.md)

# Freshservice credentials <a id="freshservice-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [Freshservice](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.freshservice)

## Prerequisites <a id="prerequisites"></a>

Create a [Freshservice](https://freshservice.com/) account.

## Supported authentication methods <a id="supported-authentication-methods"></a>

- API key

## Related resources <a id="related-resources"></a>

Refer to [Freshservice's API documentation](https://api.freshservice.com/v2/) for more information about the service.

## Using API key <a id="using-api-key"></a>

To configure this credential, you'll need:

- An **API Key**: Refer to the [Freshservice API authenticaton documentation](https://api.freshservice.com/v2/#authentication) for detailed instructions on getting your API key.
- Your Freshservice **Domain**: Use the subdomain of your Freshservice account. This is part of the URL, for example `https://<subdomain>.freshservice.com`. So if you access Freshservice through `https://n8n.freshservice.com`, enter `n8n` as your **Domain**.
