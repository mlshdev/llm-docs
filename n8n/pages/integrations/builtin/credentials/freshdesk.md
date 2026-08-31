> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/freshdesk.md](https://github.com/n8n-io/n8n-docs/blob/afebf5d9c6ff327fa215b3e6f99627e11fc9d3f2/docs/integrations/builtin/credentials/freshdesk.md)

# Freshdesk credentials <a id="freshdesk-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [Freshdesk](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.freshdesk)

## Prerequisites <a id="prerequisites"></a>

Create a [Freshdesk](https://freshdesk.com/) account.

## Supported authentication methods <a id="supported-authentication-methods"></a>

- API key

## Related resources <a id="related-resources"></a>

Refer to [Freshdesk's API documentation](https://developers.freshdesk.com/api/) for more information about the service.

## Using API key <a id="using-api-key"></a>

To configure this credential, you'll need:

- An **API Key**: Refer to the [Freshdesk API authenticaton documentation](https://developers.freshdesk.com/api/#authentication) for detailed instructions on getting your API key.
- A Freshdesk **Domain**: Use the subdomain of your Freshdesk account. This is part of the URL, for example `https://<subdomain>.freshdesk.com`. So if you access Freshdesk through `https://n8n.freshdesk.com`, enter `n8n` as your **Domain**.
