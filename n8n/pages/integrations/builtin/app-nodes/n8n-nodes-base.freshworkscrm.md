> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.freshworkscrm.md](https://github.com/n8n-io/n8n-docs/blob/e2348a766e0ed24d6420aae246e6f0bccbc2c50e/docs/integrations/builtin/app-nodes/n8n-nodes-base.freshworkscrm.md)

# Freshworks CRM node <a id="freshworks-crm-node"></a>

Use the Freshworks CRM node to automate work in Freshworks CRM, and integrate Freshworks CRM with other applications. n8n has built-in support for a wide range of Freshworks CRM features, including creating, updating, deleting, and retrieve, accounts, appointments, contacts, deals, notes, sales activity and more.

On this page, you'll find a list of operations the Freshworks CRM node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [Freshworks CRM credentials](https://docs.n8n.io/integrations/builtin/credentials/freshworkscrm) for guidance on setting up authentication.

## Operations <a id="operations"></a>

- Account
  - Create an account
  - Delete an account
  - Retrieve an account
  - Retrieve all accounts
  - Update an account
- Appointment
  - Create an appointment
  - Delete an appointment
  - Retrieve an appointment
  - Retrieve all appointments
  - Update an appointment
- Contact
  - Create a contact
  - Delete a contact
  - Retrieve a contact
  - Retrieve all contacts
  - Update a contact
- Deal
  - Create a deal
  - Delete a deal
  - Retrieve a deal
  - Retrieve all deals
  - Update a deal
- Note
  - Create a note
  - Delete a note
  - Update a note
- Sales Activity
  - Retrieve a sales activity
  - Retrieve all sales activities
- Task
  - Create a task
  - Delete a task
  - Retrieve a task
  - Retrieve all tasks
  - Update a task

## Templates and examples <a id="templates-and-examples"></a>

[Browse Freshworks CRM node documentation integration templates](https://n8n.io/integrations/freshworks-crm) or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
