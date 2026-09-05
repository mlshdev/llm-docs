> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/mistral.md](https://github.com/n8n-io/n8n-docs/blob/3317373ce39c3ce2406c8e3d99bb2da7f7180321/docs/integrations/builtin/credentials/mistral.md)

# Mistral Cloud credentials <a id="mistral-cloud-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [Mistral AI](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.mistralai)
- [Mistral Cloud](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatmistralcloud)
- [Embeddings Mistral Cloud](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingsmistralcloud)

## Prerequisites <a id="prerequisites"></a>

- Create a [Mistral](https://mistral.ai/) La Plateforme account.
- You must add payment information in **Workspace >** [**Billing**](https://admin.mistral.ai/organization/billing) and activate payments to enable API keys. Refer to [Account setup](https://docs.mistral.ai/getting-started/quickstart/#account-setup) for more information.

## Supported authentication methods <a id="supported-authentication-methods"></a>

- API key

## Related resources <a id="related-resources"></a>

Refer to [Mistral's API documentation](https://docs.mistral.ai/api/) for more information about the APIs.

View n8n's [Advanced AI](https://docs.n8n.io/build/integrate-ai) documentation.

## Using API key <a id="using-api-key"></a>

To configure this credential, you'll need:

- An **API Key**

Once you've added payment information to your Mistral Cloud account:

1. Sign in to your [Mistral account](https://console.mistral.ai/home).
2. Go to the **API Keys** page.
3. Select **Create new key**.
4. Copy the API key and enter it in your n8n credential.

Refer to [Account setup](https://docs.mistral.ai/getting-started/quickstart/#account-setup) for more information.

> **Info**
> **Paid account required**
>
> Mistral requires you to add payment information and activate payments to use API keys. Refer to the [Prerequisites](#prerequisites) section above for more information.
