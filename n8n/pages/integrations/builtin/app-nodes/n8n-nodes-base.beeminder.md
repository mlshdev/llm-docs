> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.beeminder.md](https://github.com/n8n-io/n8n-docs/blob/3317373ce39c3ce2406c8e3d99bb2da7f7180321/docs/integrations/builtin/app-nodes/n8n-nodes-base.beeminder.md)

# Beeminder node <a id="beeminder-node"></a>

Use the Beeminder node to automate work in Beeminder, and integrate Beeminder with other applications. n8n has built-in support for a wide range of Beeminder features, including creating, deleting, and updating data points.

On this page, you'll find a list of operations the Beeminder node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [Beeminder credentials](https://docs.n8n.io/integrations/builtin/credentials/beeminder) for guidance on setting up authentication.

## Operations <a id="operations"></a>

**data point**

- Create data point for a goal
- Delete a data point
- Get all data points for a goal
- Update a data point

## Templates and examples <a id="templates-and-examples"></a>

[Browse Beeminder node documentation integration templates](https://n8n.io/integrations/beeminder) or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
