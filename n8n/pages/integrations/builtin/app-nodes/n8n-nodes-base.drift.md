> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.drift.md](https://github.com/n8n-io/n8n-docs/blob/32d4c1af45711af43703671a66f502ef7bd2b932/docs/integrations/builtin/app-nodes/n8n-nodes-base.drift.md)

# Drift node <a id="drift-node"></a>

Use the Drift node to automate work in Drift, and integrate Drift with other applications. n8n has built-in support for a wide range of Drift features, including creating, updating, deleting, and getting contacts.

On this page, you'll find a list of operations the Drift node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [Drift credentials](https://docs.n8n.io/integrations/builtin/credentials/drift) for guidance on setting up authentication.

## Operations <a id="operations"></a>

- Contact
  - Create a contact
  - Get custom attributes
  - Delete a contact
  - Get a contact
  - Update a contact

## Templates and examples <a id="templates-and-examples"></a>

[Browse Drift node documentation integration templates](https://n8n.io/integrations/drift) or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
