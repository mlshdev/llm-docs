> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/huggingface.md](https://github.com/n8n-io/n8n-docs/blob/e2348a766e0ed24d6420aae246e6f0bccbc2c50e/docs/integrations/builtin/credentials/huggingface.md)

# Hugging Face credentials <a id="hugging-face-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [Hugging Face Inference](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmopenhuggingfaceinference)
- [Embeddings Hugging Face Inference](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingshuggingfaceinference)

## Supported authentication methods <a id="supported-authentication-methods"></a>

- API key

## Related resources <a id="related-resources"></a>

Refer to [Hugging Face's documentation](https://huggingface.co/docs/api-inference/quicktour) for more information about the service.

View n8n's [Advanced AI](https://docs.n8n.io/build/integrate-ai) documentation.

## Using API key <a id="using-api-key"></a>

To configure this credential, you'll need a [Hugging Face](https://huggingface.co/) account and:

- An **API Key**: Hugging Face calls these API tokens.

To get your API token:

1. Open your Hugging Face profile and go to the [**Tokens**](https://huggingface.co/settings/tokens) section.
2. Copy the token listed there. It should begin with `hf_`.
3. Enter this API token as your n8n credential **API Key**.

Refer to [Get your API token](https://huggingface.co/docs/api-inference/quicktour#get-your-api-token) for more information.
