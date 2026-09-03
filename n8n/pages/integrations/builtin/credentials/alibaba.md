> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/alibaba.md](https://github.com/n8n-io/n8n-docs/blob/e2348a766e0ed24d6420aae246e6f0bccbc2c50e/docs/integrations/builtin/credentials/alibaba.md)

# Qwen Cloud credentials <a id="alibaba-cloud-credentials"></a>

> **Info**
> On n8n Cloud, you can skip setting up Qwen Cloud credentials by selecting **Use Gateway credits** in the credential field of nodes that support it. Refer to [Gateway credits](https://docs.n8n.io/deploy/use-n8n-cloud/gateway-credits) for details.

You can use these credentials to authenticate the following nodes:

- [Qwen Cloud](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-langchain.alibabacloud)
- [Qwen Cloud Chat Model](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatalibabacloud)

## Prerequisites <a id="prerequisites"></a>

Create a [Qwen Cloud](https://qwencloud.com/) account.

## Supported authentication methods <a id="supported-authentication-methods"></a>

- API key

## Related resources <a id="related-resources"></a>

Refer to [Qwen Cloud API key documentation](https://docs.qwencloud.com/developer-guides/administration/api-keys) for more information about the service.

View n8n's [Advanced AI](https://docs.n8n.io/build/integrate-ai) documentation.

## Using API key <a id="using-api-key"></a>

To configure this credential, you'll need:

- An **API Key**

1. Sign in to [Qwen Cloud](https://qwencloud.com/).
2. Go to **API Keys**.
3. Use the workspace switcher at the bottom of the sidebar to select the workspace where you want to create the key.
4. Select **Create API key**.
5. Enter a description, then select **Generate Key**.
6. Copy the API key. It displays only once.
7. Enter the API key in your n8n credential.
8. For Qwen Cloud accounts, set **Region** to **Singapore**. Select another region only if you're using Alibaba Cloud Model Studio.

Refer to [Qwen Cloud API key documentation](https://docs.qwencloud.com/developer-guides/administration/api-keys) for more information.
