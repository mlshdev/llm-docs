> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.invoiceninja.md](https://github.com/n8n-io/n8n-docs/blob/e2348a766e0ed24d6420aae246e6f0bccbc2c50e/docs/integrations/builtin/app-nodes/n8n-nodes-base.invoiceninja.md)

# Invoice Ninja node <a id="invoice-ninja-node"></a>

Use the Invoice Ninja node to automate work in Invoice Ninja, and integrate Invoice Ninja with other applications. n8n has built-in support for a wide range of Invoice Ninja features, including creating, updating, deleting, and getting clients, expense, invoice, payments and quotes.

On this page, you'll find a list of operations the Invoice Ninja node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [Invoice Ninja credentials](https://docs.n8n.io/integrations/builtin/credentials/invoiceninja) for guidance on setting up authentication.

## Operations <a id="operations"></a>

- Client
  - Create a new client
  - Delete a client
  - Get data of a client
  - Get data of all clients
- Expense
  - Create a new expense
  - Delete an expense
  - Get data of an expense
  - Get data of all expenses
- Invoice
  - Create a new invoice
  - Delete a invoice
  - Email an invoice
  - Get data of a invoice
  - Get data of all invoices
- Payment
  - Create a new payment
  - Delete a payment
  - Get data of a payment
  - Get data of all payments
- Quote
  - Create a new quote
  - Delete a quote
  - Email an quote
  - Get data of a quote
  - Get data of all quotes
- Task
  - Create a new task
  - Delete a task
  - Get data of a task
  - Get data of all tasks

## Templates and examples <a id="templates-and-examples"></a>

[Browse Invoice Ninja node documentation integration templates](https://n8n.io/integrations/invoice-ninja) or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
