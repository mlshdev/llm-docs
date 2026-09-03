> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.grafana.md](https://github.com/n8n-io/n8n-docs/blob/b732ee99d015bf1b55668862de6e07bbcb573c0c/docs/integrations/builtin/app-nodes/n8n-nodes-base.grafana.md)

# Grafana node <a id="grafana-node"></a>

Use the Grafana node to automate work in Grafana, and integrate Grafana with other applications. n8n has built-in support for a wide range of Grafana features, including creating, updating, deleting, and getting dashboards, teams, and users.

On this page, you'll find a list of operations the Grafana node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [Grafana credentials](https://docs.n8n.io/integrations/builtin/credentials/grafana) for guidance on setting up authentication.

> **Info**
> **This node can be used as an AI tool**
>
> This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](https://docs.n8n.io/build/integrate-ai/ai-examples/use-ai-for-parameters).

## Operations <a id="operations"></a>

- Dashboard
  - Create a dashboard
  - Delete a dashboard
  - Get a dashboard
  - Get all dashboards
  - Update a dashboard
- Team
  - Create a team
  - Delete a team
  - Get a team
  - Retrieve all teams
  - Update a team
- Team Member
  - Add a member to a team
  - Retrieve all team members
  - Remove a member from a team
- User
  - Delete a user from the current organization
  - Retrieve all users in the current organization
  - Update a user in the current organization

## Templates and examples <a id="templates-and-examples"></a>

[Browse Grafana node documentation integration templates](https://n8n.io/integrations/grafana) or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
