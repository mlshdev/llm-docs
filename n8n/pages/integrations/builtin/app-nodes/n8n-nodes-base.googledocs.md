> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.googledocs.md](https://github.com/n8n-io/n8n-docs/blob/e2348a766e0ed24d6420aae246e6f0bccbc2c50e/docs/integrations/builtin/app-nodes/n8n-nodes-base.googledocs.md)

# Google Docs node <a id="google-docs-node"></a>

Use the Google Docs node to automate work in Google Docs, and integrate Google Docs with other applications. n8n has built-in support for a wide range of Google Docs features, including creating, updating, and getting documents.

On this page, you'll find a list of operations the Google Docs node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [Google Docs credentials](https://docs.n8n.io/integrations/builtin/credentials/google) for guidance on setting up authentication.

> **Info**
> **This node can be used as an AI tool**
>
> This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](https://docs.n8n.io/build/integrate-ai/ai-examples/use-ai-for-parameters).

## Operations <a id="operations"></a>

- Document
  - Create
  - Get
  - Update

## Templates and examples <a id="templates-and-examples"></a>

[Browse Google Docs node documentation integration templates](https://n8n.io/integrations/google-docs) or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
