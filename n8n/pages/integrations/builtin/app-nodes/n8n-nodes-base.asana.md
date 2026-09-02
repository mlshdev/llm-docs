> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.asana.md](https://github.com/n8n-io/n8n-docs/blob/50a2c8dc6704c114ca2b241eac1e72867ed718fe/docs/integrations/builtin/app-nodes/n8n-nodes-base.asana.md)

# Asana node <a id="asana-node"></a>

Use the Asana node to automate work in Asana, and integrate Asana with other applications. n8n has built-in support for a wide range of Asana features, including creating, updating, deleting, and getting users, tasks, projects, and subtasks.

On this page, you'll find a list of operations the Asana node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [Asana credentials](https://docs.n8n.io/integrations/builtin/credentials/asana) for guidance on setting up authentication.

> **Info**
> **Feature availability**
>
> Due to changes in Asana's API, some operations in this node stopped working on January 17, 2023. The Asana node requires n8n 1.22.2 to support these operations.

> **Info**
> **This node can be used as an AI tool**
>
> This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](https://docs.n8n.io/build/integrate-ai/ai-examples/use-ai-for-parameters).

## Operations <a id="operations"></a>

- Project
  - Create a new project
  - Delete a project
  - Get a project
  - Get all projects
  - Update a project
- Subtask
  - Create a subtask
  - Get all subtasks
- Task
  - Create a task
  - Delete a task
  - Get a task
  - Get all tasks
  - Move a task
  - Search for tasks
  - Update a task
- Task Comment
  - Add a comment to a task
  - Remove a comment from a task
- Task Tag
  - Add a tag to a task
  - Remove a tag from a task
- Task Project
  - Add a task to a project
  - Remove a task from a project
- User
  - Get a user
  - Get all users

## Templates and examples <a id="templates-and-examples"></a>

[Browse Asana node documentation integration templates](https://n8n.io/integrations/asana) or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
