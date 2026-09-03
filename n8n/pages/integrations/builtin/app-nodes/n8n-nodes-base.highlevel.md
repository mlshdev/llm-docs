> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.highlevel.md](https://github.com/n8n-io/n8n-docs/blob/6f4b48e69e3ab9acbf023f18020c40c125c16d45/docs/integrations/builtin/app-nodes/n8n-nodes-base.highlevel.md)

# HighLevel node <a id="highlevel-node"></a>

Use the HighLevel node to automate work in HighLevel, and integrate HighLevel with other applications. n8n has built-in support for a wide range of HighLevel features, including creating, updating, deleting, and getting contacts, opportunities, and tasks, as well as booking appointments and getting free time slots in calendars.

On this page, you'll find a list of operations the HighLevel node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [HighLevel credentials](https://docs.n8n.io/integrations/builtin/credentials/highlevel) for guidance on setting up authentication.

## Operations <a id="operations"></a>

- Contact
  - Create or update
  - Delete
  - Get
  - Get many
  - Update
- Opportunity
  - Create
  - Delete
  - Get
  - Get many
  - Update
- Task
  - Create
  - Delete
  - Get
  - Get many
  - Update
- Calendar
  - Book an appointment
  - Get free slots

## Templates and examples <a id="templates-and-examples"></a>

[Browse HighLevel node documentation integration templates](https://n8n.io/integrations/highlevel) or [search all templates](https://n8n.io/workflows/)

## Related resources <a id="related-resources"></a>

Refer to [HighLevel's API documentation and support forums](https://help.gohighlevel.com/support/solutions/articles/48001060529-highlevel-api) for more information about the service.

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
