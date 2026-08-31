> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.woocommerce.md](https://github.com/n8n-io/n8n-docs/blob/afebf5d9c6ff327fa215b3e6f99627e11fc9d3f2/docs/integrations/builtin/app-nodes/n8n-nodes-base.woocommerce.md)

# WooCommerce node <a id="woocommerce-node"></a>

Use the WooCommerce node to automate work in WooCommerce, and integrate WooCommerce with other applications. n8n has built-in support for a wide range of WooCommerce features, including creating and deleting customers, orders, and products.

On this page, you'll find a list of operations the WooCommerce node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [WooCommerce credentials](https://docs.n8n.io/integrations/builtin/credentials/woocommerce) for guidance on setting up authentication.

> **Info**
> **This node can be used as an AI tool**
>
> This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](https://docs.n8n.io/build/integrate-ai/ai-examples/use-ai-for-parameters).

## Operations <a id="operations"></a>

- Customer
  - Create a customer
  - Delete a customer
  - Retrieve a customer
  - Retrieve all customers
  - Update a customer
- Order
  - Create a order
  - Delete a order
  - Get a order
  - Get all orders
  - Update an order
- Product
  - Create a product
  - Delete a product
  - Get a product
  - Get all products
  - Update a product

## Templates and examples <a id="templates-and-examples"></a>

[Browse WooCommerce node documentation integration templates](https://n8n.io/integrations/woocommerce) or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
