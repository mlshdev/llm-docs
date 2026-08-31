> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.servicenow.md](https://github.com/n8n-io/n8n-docs/blob/afebf5d9c6ff327fa215b3e6f99627e11fc9d3f2/docs/integrations/builtin/app-nodes/n8n-nodes-base.servicenow.md)

# ServiceNow node <a id="servicenow-node"></a>

Use the ServiceNow node to automate work in ServiceNow, and integrate ServiceNow with other applications. n8n has built-in support for a wide range of ServiceNow features, including getting business services, departments, configuration items, and dictionary as well as creating, updating, and deleting incidents, users, and table records.

On this page, you'll find a list of operations the ServiceNow node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [ServiceNow credentials](https://docs.n8n.io/integrations/builtin/credentials/servicenow) for guidance on setting up authentication.

## Operations <a id="operations"></a>

- Business Service
  - Get All
- Configuration Items
  - Get All
- Department
  - Get All
- Dictionary
  - Get All
- Incident
  - Create
  - Delete
  - Get
  - Get All
  - Update
- Table Record
  - Create
  - Delete
  - Get
  - Get All
  - Update
- User
  - Create
  - Delete
  - Get
  - Get All
  - Update
- User Group
  - Get All
- User Role
  - Get All

## Templates and examples <a id="templates-and-examples"></a>

[Browse ServiceNow node documentation integration templates](https://n8n.io/integrations/servicenow) or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
