> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.linkedin.md](https://github.com/n8n-io/n8n-docs/blob/b732ee99d015bf1b55668862de6e07bbcb573c0c/docs/integrations/builtin/app-nodes/n8n-nodes-base.linkedin.md)

# LinkedIn node <a id="linkedin-node"></a>

Use the LinkedIn node to automate work in LinkedIn, and integrate LinkedIn with other applications. n8n supports creating posts.

On this page, you'll find a list of operations the LinkedIn node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [LinkedIn credentials](https://docs.n8n.io/integrations/builtin/credentials/linkedin) for guidance on setting up authentication.

> **Info**
> **This node can be used as an AI tool**
>
> This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](https://docs.n8n.io/build/integrate-ai/ai-examples/use-ai-for-parameters).

## Operations <a id="operations"></a>

- Post
  - Create

## Parameters <a id="parameters"></a>

- **Post As**: choose whether to post as a **Person** or **Organization**.

- **Person Name or ID** and **Organization URN**: enter an identifier for the person or organization.<br>

  > **Info**
  > **Posting as organization**
  >
  > If posting as an Organization enter the organization number in the URN field. For example, `03262013` not `urn:li:company:03262013`.

- **Text**: the post contents.

- **Media Category**: use this when including images or article URLs in your post.

## Templates and examples <a id="templates-and-examples"></a>

[Browse LinkedIn node documentation integration templates](https://n8n.io/integrations/linkedin) or [search all templates](https://n8n.io/workflows/)

## Related resources <a id="related-resources"></a>

Refer to [LinkedIn's API documentation](https://learn.microsoft.com/en-us/linkedin/) for more information about the service.

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
