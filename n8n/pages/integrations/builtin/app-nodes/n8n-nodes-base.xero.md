> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.xero.md](https://github.com/n8n-io/n8n-docs/blob/0b69471cc64a4886de337982abd2f5d237dcd52a/docs/integrations/builtin/app-nodes/n8n-nodes-base.xero.md)

# Xero node <a id="xero-node"></a>

Use the Xero node to automate work in Xero, and integrate Xero with other applications. n8n has built-in support for a wide range of Xero features, including creating, updating, and getting contacts and invoices.

On this page, you'll find a list of operations the Xero node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [Xero credentials](https://docs.n8n.io/integrations/builtin/credentials/xero) for guidance on setting up authentication.

## Operations <a id="operations"></a>

- Contact
  - Create a contact
  - Get a contact
  - Get all contacts
  - Update a contact
- Invoice
  - Create a invoice
  - Get a invoice
  - Get all invoices
  - Update a invoice

## Templates and examples <a id="templates-and-examples"></a>

[Browse Xero node documentation integration templates](https://n8n.io/integrations/xero) or [search all templates](https://n8n.io/workflows/)

## Related resources <a id="related-resources"></a>

Refer to [Xero's API documentation](https://developer.xero.com/documentation/api/accounting/overview) for more information about the service.

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
