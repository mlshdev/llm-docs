> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.microsofttodo.md](https://github.com/n8n-io/n8n-docs/blob/191a04ec05b8df3fe1fb96f54726ed40db2518f7/docs/integrations/builtin/app-nodes/n8n-nodes-base.microsofttodo.md)

# Microsoft To Do node <a id="microsoft-to-do-node"></a>

Use the Microsoft To Do node to automate work in Microsoft To Do, and integrate Microsoft To Do with other applications. n8n has built-in support for a wide range of Microsoft To Do features, including creating, updating, deleting, and getting linked resources, lists, and tasks.

On this page, you'll find a list of operations the Microsoft To Do node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [Microsoft credentials](https://docs.n8n.io/integrations/builtin/credentials/microsoft) for guidance on setting up authentication. This node also supports the [Microsoft Entra Service Principal credentials](https://docs.n8n.io/integrations/builtin/credentials/microsoftentraserviceprincipal) for app-only access with no signed-in user: select **Microsoft Entra Service Principal (App-Only)** in the **Authentication** dropdown.

> **Info**
> **Government Cloud Support**
>
> If you're using a government cloud tenant (US Government, US Government DOD, or China), make sure to select the appropriate **Microsoft Graph API Base URL** in your Microsoft credentials configuration.

> **Info**
> **This node can be used as an AI tool**
>
> This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](https://docs.n8n.io/build/integrate-ai/ai-examples/use-ai-for-parameters).

## Operations <a id="operations"></a>

- Linked Resource
  - Create
  - Delete
  - Get
  - Get All
  - Update
- List
  - Create
  - Delete
  - Get
  - Get All
  - Update
- Task
  - Create
  - Delete
  - Get
  - Get All
  - Update

## Templates and examples <a id="templates-and-examples"></a>

[Browse Microsoft To Do node documentation integration templates](https://n8n.io/integrations/microsoft-to-do) or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
