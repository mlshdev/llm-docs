> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/nvidia.md](https://github.com/n8n-io/n8n-docs/blob/3317373ce39c3ce2406c8e3d99bb2da7f7180321/docs/integrations/builtin/credentials/nvidia.md)

# NVIDIA Nemotron credentials <a id="nvidia-nemotron-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [NVIDIA Nemotron Chat Model](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatnvidia)

A single credential covers both deployment modes:

- **Cloud**: NVIDIA-hosted Nemotron models on [build.nvidia.com](https://build.nvidia.com/).
- **Self-hosted NIM**: a [NVIDIA Inference Microservice](https://docs.nvidia.com/nim/) container running on your own infrastructure.

## Prerequisites <a id="prerequisites"></a>

For cloud access, create an [NVIDIA build](https://build.nvidia.com/) account.

For self-hosted access, run a NIM container that exposes an OpenAI-spec compatible endpoint. Refer to [NVIDIA NIM documentation](https://docs.nvidia.com/nim/) for setup guidance.

## Supported authentication methods <a id="supported-authentication-methods"></a>

- API key (optional when connecting to a self-hosted NIM that doesn't enforce authentication)

## Related resources <a id="related-resources"></a>

Refer to NVIDIA's [build catalogue](https://build.nvidia.com/models) for the list of available Nemotron models and to the [NIM documentation](https://docs.nvidia.com/nim/) for self-hosting guidance.

## Using API key <a id="using-api-key"></a>

To configure this credential, you'll need:

- A **Base URL**: the OpenAI-spec compatible endpoint to call. Use the default `https://integrate.api.nvidia.com/v1` for build.nvidia.com cloud, or replace it with your self-hosted NIM URL (for example, `http://localhost:8000/v1`).
- An **API Key**: required for build.nvidia.com cloud. Leave blank for a self-hosted NIM that doesn't require authentication.

To generate an API key for build.nvidia.com:

1. Sign in to your [NVIDIA build](https://build.nvidia.com/) account.
2. Open a Nemotron model in the catalogue and select **Get API Key**.
3. Copy your key and add it as the **API Key** in n8n.

To connect to a self-hosted NIM:

1. Set **Base URL** to your NIM endpoint, including the `/v1` path (for example, `http://localhost:8000/v1`).
2. If your NIM requires authentication, paste the token into **API Key**. Otherwise, leave the field blank.
