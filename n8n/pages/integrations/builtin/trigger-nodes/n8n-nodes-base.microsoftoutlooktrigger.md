> Commit-pinned source for n8n main: [docs/integrations/builtin/trigger-nodes/n8n-nodes-base.microsoftoutlooktrigger.md](https://github.com/n8n-io/n8n-docs/blob/b732ee99d015bf1b55668862de6e07bbcb573c0c/docs/integrations/builtin/trigger-nodes/n8n-nodes-base.microsoftoutlooktrigger.md)

# Microsoft Outlook Trigger node <a id="microsoft-outlook-trigger-node"></a>

Use the Microsoft Outlook Trigger node to respond to events in [Microsoft Outlook](https://www.microsoft.com/en-us/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook) and integrate Microsoft Outlook with other applications.

On this page, you'll find a list of events the Microsoft Outlook Trigger node can respond to, and links to more resources.

> **Info**
> **Credentials**
>
> This node's **Authentication** dropdown offers three options:
>
> - **Outlook OAuth2**: the Microsoft Outlook-specific OAuth2 credential (default).
> - **Microsoft OAuth2 (Graph)**: a generic Microsoft Graph credential that you can reuse across other Microsoft nodes. When you select this option, make sure you grant the credential the scopes this node needs (for example, `Mail.ReadWrite`).
> - **Microsoft Entra Service Principal (App-Only)**: app-only access through a Microsoft Entra app registration, with no signed-in user. Refer to [Microsoft Entra Service Principal credentials](https://docs.n8n.io/integrations/builtin/credentials/microsoftentraserviceprincipal) for setup and required application permissions.
>
> You can find authentication information for this node [here](https://docs.n8n.io/integrations/builtin/credentials/microsoft).

> **Info**
> **Government Cloud Support**
>
> If you're using a government cloud tenant (US Government, US Government DOD, or China), make sure to select the appropriate **Microsoft Graph API Base URL** in your Microsoft credentials configuration.

> **Info**
> **Examples and templates**
>
> For usage examples and templates to help you get started, refer to n8n's [Microsoft Outlook integrations](https://n8n.io/integrations/microsoft-outlook-trigger/) page.

## Events <a id="events"></a>

- Message Received

## Related resources <a id="related-resources"></a>

n8n provides an app node for Microsoft Outlook. You can find the node docs [here](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.microsoftoutlook).

View [example workflows and related content](https://n8n.io/integrations/microsoft-outlook-trigger/) on n8n's website.
