> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.getresponse.md](https://github.com/n8n-io/n8n-docs/blob/6f4b48e69e3ab9acbf023f18020c40c125c16d45/docs/integrations/builtin/app-nodes/n8n-nodes-base.getresponse.md)

# GetResponse node <a id="getresponse-node"></a>

Use the GetResponse node to automate work in GetResponse, and integrate GetResponse with other applications. n8n has built-in support for a wide range of GetResponse features, including creating, updating, deleting, and getting contacts.

On this page, you'll find a list of operations the GetResponse node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [GetResponse credentials](https://docs.n8n.io/integrations/builtin/credentials/getresponse) for guidance on setting up authentication.

## Operations <a id="operations"></a>

- Contact
  - Create a new contact
  - Delete a contact
  - Get a contact
  - Get all contacts
  - Update contact properties

## Templates and examples <a id="templates-and-examples"></a>

[Browse GetResponse node documentation integration templates](https://n8n.io/integrations/getresponse) or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
