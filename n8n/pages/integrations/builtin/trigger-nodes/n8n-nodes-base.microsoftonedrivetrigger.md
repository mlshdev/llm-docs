> Commit-pinned source for n8n main: [docs/integrations/builtin/trigger-nodes/n8n-nodes-base.microsoftonedrivetrigger.md](https://github.com/n8n-io/n8n-docs/blob/0ece31e57a42e63cf2a2c7f9a33b42888e09a5b3/docs/integrations/builtin/trigger-nodes/n8n-nodes-base.microsoftonedrivetrigger.md)

# Microsoft OneDrive Trigger node <a id="microsoft-onedrive-trigger-node"></a>

Use the Microsoft OneDrive Trigger node to respond to events in [Microsoft OneDrive](https://www.microsoft.com/en-us/microsoft-365/onedrive/online-cloud-storage) and integrate Microsoft OneDrive with other applications. n8n has built-in support for file and folder events in OneDrive.

On this page, you'll find a list of events the Microsoft OneDrive Trigger node can respond to and links to more resources.

> **Info**
> **Credentials**
>
> You can find authentication information for this node [here](https://docs.n8n.io/integrations/builtin/credentials/microsoft). This node also supports the [Microsoft Entra Service Principal credentials](https://docs.n8n.io/integrations/builtin/credentials/microsoftentraserviceprincipal) for app-only access with no signed-in user: select **Microsoft Entra Service Principal (App-Only)** in the **Authentication** dropdown.

> **Info**
> **Government Cloud Support**
>
> If you're using a government cloud tenant (US Government, US Government DOD, or China), make sure to select the appropriate **Microsoft Graph API Base URL** in your Microsoft credentials configuration.

> **Info**
> **Examples and templates**
>
> For usage examples and templates to help you get started, refer to n8n's [Microsoft OneDrive integrations](https://n8n.io/integrations/microsoft-onedrive-trigger/) page.

## Events <a id="events"></a>

- On File Created
- On File Updated
- On Folder Created
- On Folder Updates

## Related resources <a id="related-resources"></a>

n8n provides an app node for Microsoft OneDrive. You can find the node docs [here](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.microsoftonedrive).

View [example workflows and related content](https://n8n.io/integrations/microsoft-onedrive-trigger/) on n8n's website.

Refer to [Microsoft's OneDrive API documentation](https://learn.microsoft.com/en-us/onedrive/developer/rest-api/) for more information about the service.
