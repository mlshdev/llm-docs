> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.shopify.md](https://github.com/n8n-io/n8n-docs/blob/afebf5d9c6ff327fa215b3e6f99627e11fc9d3f2/docs/integrations/builtin/app-nodes/n8n-nodes-base.shopify.md)

# Shopify node <a id="shopify-node"></a>

Use the Shopify node to automate work in Shopify, and integrate Shopify with other applications. n8n has built-in support for a wide range of Shopify features, including creating, updating, deleting, and getting orders and products.

On this page, you'll find a list of operations the Shopify node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [Shopify credentials](https://docs.n8n.io/integrations/builtin/credentials/shopify) for guidance on setting up authentication.

## Operations <a id="operations"></a>

- Order
  - Create an order
  - Delete an order
  - Get an order
  - Get all orders
  - Update an order
- Product
  - Create a product
  - Delete a product
  - Get a product
  - Get all products
  - Update a product

## Templates and examples <a id="templates-and-examples"></a>

[Browse Shopify node documentation integration templates](https://n8n.io/integrations/shopify) or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
