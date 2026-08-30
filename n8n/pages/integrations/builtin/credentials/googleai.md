> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/googleai.md](https://github.com/n8n-io/n8n-docs/blob/0ece31e57a42e63cf2a2c7f9a33b42888e09a5b3/docs/integrations/builtin/credentials/googleai.md)

# Google Gemini(PaLM) credentials <a id="google-geminipalm-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [Embeddings Google Gemini](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingsgooglegemini)
- [Google Gemini](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-langchain.googlegemini)
- [Google Gemini Chat Model](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatgooglegemini)
- [Embeddings Google PaLM](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingsgooglepalm)

## Prerequisites <a id="prerequisites"></a>

- Create a [Google Cloud](https://cloud.google.com/) account.
- Create a [Google Cloud Platform project](https://developers.google.com/workspace/marketplace/create-gcp-project).

## Supported authentication methods <a id="supported-authentication-methods"></a>

- Gemini(PaLM) API key

## Related resources <a id="related-resources"></a>

Refer to [Google's Gemini API documentation](https://ai.google.dev/gemini-api/docs) for more information about the service.

View n8n's [Advanced AI](https://docs.n8n.io/build/integrate-ai) documentation.

## Using Gemini(PaLM) API key <a id="using-geminipalm-api-key"></a>

To configure this credential, you'll need:

- The API **Host** URL: Both PaLM and Gemini use the default `https://generativelanguage.googleapis.com`.
- An **API Key**: Create a key in [Google AI Studio](https://aistudio.google.com/apikey).

> **Warning**
> **Custom hosts not supported**
>
> The related nodes don't yet support custom hosts or proxies for the API host and must use `https://generativelanguage.googleapis.com`.

To create an API key:

1. Go to the API Key page in Google AI Studio: <https://aistudio.google.com/apikey>.
2. Select **Create API Key**.
3. You can choose whether to **Create API key in new project** or search for an existing Google Cloud project to **Create API key in existing project**.
4. Copy the generated API key and add it to your n8n credential.
