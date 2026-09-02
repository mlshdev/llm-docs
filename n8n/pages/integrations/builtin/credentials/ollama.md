> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/ollama.md](https://github.com/n8n-io/n8n-docs/blob/1db58de3a8d474a1ba99f5a612beac694402d963/docs/integrations/builtin/credentials/ollama.md)

# Ollama credentials

You can use these credentials to authenticate the following nodes:

- [Ollama](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmollama)
- [Chat Ollama](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatollama)
- [Embeddings Ollama](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingsollama)

## Prerequisites <a id="prerequisites"></a>

Create and run an [Ollama](https://ollama.com/) instance with one user. Refer to the Ollama [Quick Start](https://github.com/ollama/ollama/blob/main/README.md#quickstart) for more information.

## Supported authentication methods <a id="supported-authentication-methods"></a>

- Instance URL

## Related resources <a id="related-resources"></a>

Refer to [Ollama's API documentation](https://github.com/ollama/ollama/blob/main/docs/api.md) for more information about the service.

View n8n's [Advanced AI](https://docs.n8n.io/build/integrate-ai) documentation.

## Using instance URL <a id="using-instance-url"></a>

To configure this credential, you'll need:

- The **Base URL** of your Ollama instance or remote authenticated Ollama instances.
- (Optional) The **API Key** for Bearer token authentication if connecting to a remote, authenticated proxy.

The default **Base URL** is `http://localhost:11434`, but if you've set the `OLLAMA_HOST` environment variable, enter that value. If you have issues connecting to a local n8n server, try `127.0.0.1` instead of `localhost`.

If you're connecting to Ollama through authenticated proxy services (such as [Open WebUI](https://docs.openwebui.com/getting-started/api-endpoints/#-ollama-api-proxy-support)) you must include an API key. If you don't need authentication, leave this field empty. When provided, the API key is sent as a Bearer token in the `Authorization` header of the request to the Ollama API.

Refer to [How do I configure Ollama server?](https://github.com/ollama/ollama/blob/main/docs/faq.mdx#how-do-i-configure-ollama-server) for more information.

### Ollama and self-hosted n8n <a id="ollama-and-self-hosted-n8n"></a>

If you're self-hosting n8n on the same machine as Ollama, you may run into issues if they're running in different containers.

For this setup, open a specific port for n8n to communicate with Ollama by setting the `OLLAMA_ORIGINS` variable or adjusting `OLLAMA_HOST` to an address the other container can access.

Refer to Ollama's [How can I allow additional web origins to access Ollama?](https://docs.ollama.com/faq#how-can-i-allow-additional-web-origins-to-access-ollama) for more information.
