> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/invoiceninja.md](https://github.com/n8n-io/n8n-docs/blob/78fea4497784e9c1f3f34b12757ef7a2a6b363af/docs/integrations/builtin/credentials/invoiceninja.md)

# Invoice Ninja credentials <a id="invoice-ninja-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [Invoice Ninja](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.invoiceninja)
- [Invoice Ninja Trigger](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.invoiceninjatrigger)

## Prerequisites <a id="prerequisites"></a>

Create an [Invoice Ninja](https://www.invoiceninja.com/) account. Only the Pro and Enterprise plans support API integrations.

## Supported authentication methods <a id="supported-authentication-methods"></a>

- API key

## Related resources <a id="related-resources"></a>

Refer to Invoice Ninja's [v4 API documentation](https://invoice-ninja.readthedocs.io/en/latest/api.html) and [v5 API documentation](https://api-docs.invoicing.co/) for more information about the APIs.

## Using API key <a id="using-api-key"></a>

To configure this credential, you'll need:

- A **URL**: If Invoice Ninja hosts your installation, use either of the default URLs mentioned. If you're self-hosting your installation, use the URL of your Invoice Ninja instance.
- An **API Token**: Generate an API token in **Settings > Account Management > API Tokens**.
- An optional **Secret**, available only for v5 API users
