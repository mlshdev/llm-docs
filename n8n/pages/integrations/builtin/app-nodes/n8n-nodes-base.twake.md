> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.twake.md](https://github.com/n8n-io/n8n-docs/blob/78fea4497784e9c1f3f34b12757ef7a2a6b363af/docs/integrations/builtin/app-nodes/n8n-nodes-base.twake.md)

# Twake node <a id="twake-node"></a>

Use the Twake node to automate work in Twake, and integrate Twake with other applications. n8n supports sending messages with Twake.

On this page, you'll find a list of operations the Twake node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [Twake credentials](https://docs.n8n.io/integrations/builtin/credentials/twake) for guidance on setting up authentication.

## Operations <a id="operations"></a>

- Message
  - Send a message

## Templates and examples <a id="templates-and-examples"></a>

[Browse Twake node documentation integration templates](https://n8n.io/integrations/twake) or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
