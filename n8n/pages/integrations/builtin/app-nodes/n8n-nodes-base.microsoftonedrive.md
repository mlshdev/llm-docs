> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.microsoftonedrive.md](https://github.com/n8n-io/n8n-docs/blob/b732ee99d015bf1b55668862de6e07bbcb573c0c/docs/integrations/builtin/app-nodes/n8n-nodes-base.microsoftonedrive.md)

# Microsoft OneDrive node <a id="microsoft-onedrive-node"></a>

Use the Microsoft OneDrive node to automate work in Microsoft OneDrive, and integrate Microsoft OneDrive with other applications. n8n has built-in support for a wide range of Microsoft OneDrive features, including creating, updating, deleting, and getting files, and folders.

On this page, you'll find a list of operations the Microsoft OneDrive node supports and links to more resources.

> **Info**
> **Credentials**
>
> This node's **Authentication** dropdown offers three options:
>
> - **OneDrive OAuth2**: the Microsoft OneDrive-specific OAuth2 credential (default).
> - **Microsoft OAuth2 (Graph)**: a generic Microsoft Graph credential that you can reuse across other Microsoft nodes. When you select this option, make sure you grant the credential the scopes this node needs (for example, `Files.ReadWrite.All`).
> - **Microsoft Entra Service Principal (App-Only)**: app-only access through a Microsoft Entra app registration, with no signed-in user. Refer to [Microsoft Entra Service Principal credentials](https://docs.n8n.io/integrations/builtin/credentials/microsoftentraserviceprincipal) for setup and required application permissions.
>
> Refer to [Microsoft credentials](https://docs.n8n.io/integrations/builtin/credentials/microsoft) for guidance on setting up authentication.

> **Info**
> **Government Cloud Support**
>
> If you're using a government cloud tenant (US Government, US Government DOD, or China), make sure to select the appropriate **Microsoft Graph API Base URL** in your Microsoft credentials configuration.

> **Info**
> **This node can be used as an AI tool**
>
> This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](https://docs.n8n.io/build/integrate-ai/ai-examples/use-ai-for-parameters).

## Operations <a id="operations"></a>

- File
  - Copy a file
  - Delete a file
  - Download a file
  - Get a file
  - Rename a file
  - Search a file
  - Share a file
  - Upload a file up to 4MB in size
- Folder
  - Create a folder
  - Delete a folder
  - Get Children (get items inside a folder)
  - Rename a folder
  - Search a folder
  - Share a folder

## Templates and examples <a id="templates-and-examples"></a>

[Browse Microsoft OneDrive node documentation integration templates](https://n8n.io/integrations/microsoft-onedrive) or [search all templates](https://n8n.io/workflows/)

## Related resources <a id="related-resources"></a>

Refer to [Microsoft's OneDrive API documentation](https://learn.microsoft.com/en-us/onedrive/developer/rest-api/) for more information about the service.

## Find the folder ID <a id="find-the-folder-id"></a>

To perform operations on folders, you need to supply the ID. You can find this:

- In the URL of the folder
- By searching for it using the node. You need to do this if using MS 365 (where OneDrive uses SharePoint behind the scenes):
  1. Select **Resource** > **Folder**.
  2. Select **Operation** > **Search**.
  3. In **Query**, enter the folder name.
  4. Select **Execute step**. n8n runs the query and returns data about the folder, including an `id` field containing the folder ID.
