> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/grafana.md](https://github.com/n8n-io/n8n-docs/blob/6f4b48e69e3ab9acbf023f18020c40c125c16d45/docs/integrations/builtin/credentials/grafana.md)

# Grafana credentials <a id="grafana-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [Grafana](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.grafana)

## Prerequisites <a id="prerequisites"></a>

- Create a [Grafana](https://grafana.com/) account.

## Supported authentication methods <a id="supported-authentication-methods"></a>

- API key

## Related resources <a id="related-resources"></a>

Refer to [Grafana's API documentation](https://grafana.com/docs/grafana/latest/developers/http_api/) for more information about authenticating with the service.

## Using API key <a id="using-api-key"></a>

To configure this credential, you'll need:

- An **API Key**: Refer to the [Create an API key documentation](https://grafana.com/docs/grafana/latest/administration/api-keys/#create-an-api-key) for detailed instructions on creating an API key.
- The **Base URL** for your Grafana instance, for example: `https://n8n.grafana.net`.
