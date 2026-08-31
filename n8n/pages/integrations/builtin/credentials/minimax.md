> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/minimax.md](https://github.com/n8n-io/n8n-docs/blob/afebf5d9c6ff327fa215b3e6f99627e11fc9d3f2/docs/integrations/builtin/credentials/minimax.md)

# MiniMax credentials <a id="minimax-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [MiniMax](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-langchain.minimax)
- [MiniMax Chat Model](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatminimax)

## Prerequisites <a id="prerequisites"></a>

Create a [MiniMax](https://platform.minimax.io/) account.

## Supported authentication methods <a id="supported-authentication-methods"></a>

- API key

## Related resources <a id="related-resources"></a>

Refer to [MiniMax's API documentation](https://platform.minimax.io/docs/guides/models-intro) for more information about the service.

View n8n's [Advanced AI](https://docs.n8n.io/build/integrate-ai) documentation.

## Using API key <a id="using-api-key"></a>

To configure this credential, you'll need:

- A **Region**: Select **International** or **China** depending on your MiniMax account.
- An **API Key**

To get your API key:

1. Log in to your [MiniMax account](https://platform.minimax.io/).
2. Go to **Account** > **API Keys**.
3. Select **Create API Key**.
4. Copy the key and enter it in your n8n credential.
