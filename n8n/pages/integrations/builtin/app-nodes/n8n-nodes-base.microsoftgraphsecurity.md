> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.microsoftgraphsecurity.md](https://github.com/n8n-io/n8n-docs/blob/3317373ce39c3ce2406c8e3d99bb2da7f7180321/docs/integrations/builtin/app-nodes/n8n-nodes-base.microsoftgraphsecurity.md)

# Microsoft Graph Security node <a id="microsoft-graph-security-node"></a>

Use the Microsoft Graph Security node to automate work in Microsoft Graph Security, and integrate Microsoft Graph Security with other applications. n8n has built-in support for a wide range of Microsoft Graph Security features, including getting, and updating scores, and profiles.

On this page, you'll find a list of operations the Microsoft Graph Security node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [Microsoft credentials](https://docs.n8n.io/integrations/builtin/credentials/microsoft) for guidance on setting up authentication.

> **Info**
> **Government Cloud Support**
>
> If you're using a government cloud tenant (US Government, US Government DOD, or China), make sure to select the appropriate **Microsoft Graph API Base URL** in your Microsoft credentials configuration.

## Operations <a id="operations"></a>

- Secure Score
  - Get
  - Get All
- Secure Score Control Profile
  - Get
  - Get All
  - Update

## Templates and examples <a id="templates-and-examples"></a>

[Browse Microsoft Graph Security node documentation integration templates](https://n8n.io/integrations/microsoft-graph-security) or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
