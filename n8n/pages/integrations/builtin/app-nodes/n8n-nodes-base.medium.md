> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.medium.md](https://github.com/n8n-io/n8n-docs/blob/0b69471cc64a4886de337982abd2f5d237dcd52a/docs/integrations/builtin/app-nodes/n8n-nodes-base.medium.md)

# Medium node <a id="medium-node"></a>

Use the Medium node to automate work in Medium, and integrate Medium with other applications. n8n has built-in support for a wide range of Medium features, including creating posts, and getting publications.

On this page, you'll find a list of operations the Medium node supports and links to more resources.

> **Warning**
> **Medium API no longer supported**
>
> Medium has stopped supporting the Medium API. The Medium node still appears within n8n, but you won't be able to configure new API keys to authenticate with.
>
> Refer to [Medium credentials](https://docs.n8n.io/integrations/builtin/credentials/medium) for guidance on setting up existing API keys.

> **Info**
> **This node can be used as an AI tool**
>
> This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](https://docs.n8n.io/build/integrate-ai/ai-examples/use-ai-for-parameters).

## Operations <a id="operations"></a>

- Post
  - Create a post
- Publication
  - Get all publications

## Templates and examples <a id="templates-and-examples"></a>

[Browse Medium node documentation integration templates](https://n8n.io/integrations/medium) or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
