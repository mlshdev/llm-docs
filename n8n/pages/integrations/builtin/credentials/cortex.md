> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/cortex.md](https://github.com/n8n-io/n8n-docs/blob/e2348a766e0ed24d6420aae246e6f0bccbc2c50e/docs/integrations/builtin/credentials/cortex.md)

# Cortex credentials <a id="cortex-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [Cortex](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.cortex)

## Prerequisites <a id="prerequisites"></a>

Install [Cortex](https://docs.strangebee.com/cortex/installation-and-configuration/) on your server.

## Supported authentication methods <a id="supported-authentication-methods"></a>

- API key

## Related resources <a id="related-resources"></a>

Refer to [Cortex's API documentation](https://docs.strangebee.com/cortex/api/api-guide/) for more information about the service.

## Using API key <a id="using-api-key"></a>

To configure this credential, you'll need:

- An **API Key**: Refer to the [Cortex API Authentication documentation](https://docs.strangebee.com/cortex/api/api-guide/#authentication) for detailed instructions on generating API keys.
- The URL/Server Address for your **Cortex Instance** (defaults to `http://<your_server_address>:9001/`)
