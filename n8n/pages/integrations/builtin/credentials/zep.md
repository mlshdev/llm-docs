> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/zep.md](https://github.com/n8n-io/n8n-docs/blob/78fea4497784e9c1f3f34b12757ef7a2a6b363af/docs/integrations/builtin/credentials/zep.md)

# Zep credentials <a id="zep-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [Zep](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memoryzep)
- [Zep Vector Store](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstorezep)

## Supported authentication methods <a id="supported-authentication-methods"></a>

- API key

## Related resources <a id="related-resources"></a>

Refer to [Zep's Cloud SDK documentation](https://help.getzep.com/install-sdks) for more information about the service. Refer to [Zep's REST API documentation](https://getzep.github.io/zep/) for information about the API.

View n8n's [Advanced AI](https://docs.n8n.io/build/integrate-ai) documentation.

## Using API key <a id="using-api-key"></a>

To configure this credential, you'll need a [Zep server](https://www.getzep.com/) with at least one project and:

- An **API URL**
- An **API Key**

Setup depends on whether you're using Zep Cloud or self-hosted Zep Open Source.

### Zep Cloud setup <a id="zep-cloud-setup"></a>

Follow these instructions if you're using [Zep Cloud](https://app.getzep.com):

1. In Zep, open the **Project Settings**.
2. In the **Project Keys** section, select **Add Key**.
3. Enter a **Key Name**, like `n8n integration`.
4. Select **Create**.
5. Copy the key and enter it in your n8n integration as the **API Key**.
6. Turn on the **Cloud** toggle.

### Self-hosted Zep Open Source setup <a id="self-hosted-zep-open-source-setup"></a>

> **Warning**
> **Feature availability**
>
> The Zep team [deprecated the open source Zep Community Edition](https://blog.getzep.com/announcing-a-new-direction-for-zeps-open-source-strategy/) in April 2025. These instructions may not work after that date.

Follow these instructions if you're self-hosting Zep Open Source:

1. Enter the JWT token for your Zep server as the **API Key** in n8n.
2. Make sure the **Cloud** toggle is off.
3. Enter the URL for your Zep server as the **API URL**.
