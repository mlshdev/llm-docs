> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.clockify.md](https://github.com/n8n-io/n8n-docs/blob/78fea4497784e9c1f3f34b12757ef7a2a6b363af/docs/integrations/builtin/app-nodes/n8n-nodes-base.clockify.md)

# Clockify node <a id="clockify-node"></a>

Use the Clockify node to automate work in Clockify, and integrate Clockify with other applications. n8n has built-in support for a wide range of Clockify features, including creating, updating, getting, and deleting tasks, time entries, projects, and tags.

On this page, you'll find a list of operations the Clockify node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [Clockify credentials](https://docs.n8n.io/integrations/builtin/credentials/clockify) for guidance on setting up authentication.

## Operations <a id="operations"></a>

- Project
  - Create a project
  - Delete a project
  - Get a project
  - Get all projects
  - Update a project
- Tag
  - Create a tag
  - Delete a tag
  - Get all tags
  - Update a tag
- Task
  - Create a task
  - Delete a task
  - Get a task
  - Get all tasks
  - Update a task
- Time Entry
  - Create a time entry
  - Delete a time entry
  - Get time entry
  - Update a time entry

## Templates and examples <a id="templates-and-examples"></a>

[Browse Clockify node documentation integration templates](https://n8n.io/integrations/clockify) or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
