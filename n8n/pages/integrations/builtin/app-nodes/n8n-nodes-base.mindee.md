> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.mindee.md](https://github.com/n8n-io/n8n-docs/blob/32d4c1af45711af43703671a66f502ef7bd2b932/docs/integrations/builtin/app-nodes/n8n-nodes-base.mindee.md)

# Mindee node <a id="mindee-node"></a>

Use the Mindee node to automate work in Mindee, and integrate Mindee with other applications. n8n has built-in support for a wide range of Mindee features, including predicting invoices.

On this page, you'll find a list of operations the Mindee node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [Mindee credentials](https://docs.n8n.io/integrations/builtin/credentials/mindee) for guidance on setting up authentication.

## Operations <a id="operations"></a>

- **Invoice**
  - Predict
- **Receipt**
  - Predict

## Templates and examples <a id="templates-and-examples"></a>

[Browse Mindee node documentation integration templates](https://n8n.io/integrations/mindee) or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
