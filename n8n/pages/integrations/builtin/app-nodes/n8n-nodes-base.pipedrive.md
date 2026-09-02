> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.pipedrive.md](https://github.com/n8n-io/n8n-docs/blob/0b69471cc64a4886de337982abd2f5d237dcd52a/docs/integrations/builtin/app-nodes/n8n-nodes-base.pipedrive.md)

# Pipedrive node <a id="pipedrive-node"></a>

Use the Pipedrive node to automate work in Pipedrive, and integrate Pipedrive with other applications. n8n has built-in support for a wide range of Pipedrive features, including creating, updating, deleting, and getting activity, files, notes, organizations, and leads.

On this page, you'll find a list of operations the Pipedrive node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [Pipedrive credentials](https://docs.n8n.io/integrations/builtin/credentials/pipedrive) for guidance on setting up authentication.

> **Info**
> **This node can be used as an AI tool**
>
> This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](https://docs.n8n.io/build/integrate-ai/ai-examples/use-ai-for-parameters).

## Operations <a id="operations"></a>

- Activity
  - Create an activity
  - Delete an activity
  - Get data of an activity
  - Get data of all activities
  - Update an activity
- Deal
  - Create a deal
  - Delete a deal
  - Duplicate a deal
  - Get data of a deal
  - Get data of all deals
  - Search a deal
  - Update a deal
- Deal Activity
  - Get all activities of a deal
- Deal Product
  - Add a product to a deal
  - Get all products in a deal
  - Remove a product from a deal
  - Update a product in a deal
- File
  - Create a file
  - Delete a file
  - Download a file
  - Get data of a file
- Lead
  - Create a lead
  - Delete a lead
  - Get data of a lead
  - Get data of all leads
  - Update a lead
- Note
  - Create a note
  - Delete a note
  - Get data of a note
  - Get data of all notes
  - Update a note
- Organization
  - Create an organization
  - Delete an organization
  - Get data of an organization
  - Get data of all organizations
  - Update an organization
  - Search organizations
- Person
  - Create a person
  - Delete a person
  - Get data of a person
  - Get data of all persons
  - Search all persons
  - Update a person
- Product
  - Get data of all products

## Templates and examples <a id="templates-and-examples"></a>

[Browse Pipedrive node documentation integration templates](https://n8n.io/integrations/pipedrive) or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
