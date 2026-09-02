> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/moonshot.md](https://github.com/n8n-io/n8n-docs/blob/32d4c1af45711af43703671a66f502ef7bd2b932/docs/integrations/builtin/credentials/moonshot.md)

# Moonshot credentials <a id="moonshot-credentials"></a>

> **Info**
> On n8n Cloud, you can skip setting up Moonshot credentials by selecting **Use Gateway credits** in the credential field of nodes that support it. Refer to [Gateway credits](https://docs.n8n.io/deploy/use-n8n-cloud/gateway-credits) for details.

You can use these credentials to authenticate the following nodes:

- [Moonshot Kimi](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-langchain.moonshot)
- [Moonshot Kimi Chat Model](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatmoonshot)

## Prerequisites <a id="prerequisites"></a>

Create a [Kimi API Platform account](https://platform.kimi.ai/).

## Supported authentication methods <a id="supported-authentication-methods"></a>

- API key

## Related resources <a id="related-resources"></a>

Refer to [Moonshot's documentation](https://platform.kimi.ai/docs/) for more information about the service.

View n8n's [Advanced AI](https://docs.n8n.io/build/integrate-ai) documentation.

## Using API key <a id="using-api-key"></a>

To configure this credential, you'll need a [Kimi API Platform](https://platform.kimi.ai/) account and an API key:

1. In the [Kimi API Platform console](https://platform.kimi.ai/console/api-keys), select **API Keys**.
2. Select **Create API Key**.
3. Enter a **name** and **project** for the API key.
4. Copy the API key and enter it in your n8n credential.
