> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/milvus.md](https://github.com/n8n-io/n8n-docs/blob/e2348a766e0ed24d6420aae246e6f0bccbc2c50e/docs/integrations/builtin/credentials/milvus.md)

# Milvus credentials <a id="milvus-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [Milvus Vector Store](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoremilvus)

## Prerequisites <a id="prerequisites"></a>

Create and run an [Milvus](https://milvus.io/) instance. Refer to the [Install Milvus](https://milvus.io/docs/install-overview.md) for more information.

## Supported authentication methods <a id="supported-authentication-methods"></a>

- Basic auth

## Related resources <a id="related-resources"></a>

Refer to [Milvus's Authentication documentation](https://milvus.io/docs/authenticate.md?tab=docker#Authenticate-User-Access) for more information about setting up authentication.

View n8n's [Advanced AI](https://docs.n8n.io/build/integrate-ai) documentation.

## Using basic auth <a id="using-basic-auth"></a>

To configure this credential, you'll need:

- **Base URL**: The base URL of your Milvus instance. The default is `http://localhost:19530`.
- **Username**: The username to authenticate to your Milvus instance. The default value is `root`.
- **Password**: The password to authenticate to your Milvus instance. The default value is `Milvus`.
