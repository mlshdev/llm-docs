> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.googledrive/README.md](https://github.com/n8n-io/n8n-docs/blob/78fea4497784e9c1f3f34b12757ef7a2a6b363af/docs/integrations/builtin/app-nodes/n8n-nodes-base.googledrive/README.md)

# Google Drive node <a id="google-drive-node"></a>

Use the Google Drive node to automate work in Google Drive, and integrate Google Drive with other applications. n8n has built-in support for a wide range of Google Drive features, including creating, updating, listing, deleting, and getting drives, files, and folders.

On this page, you'll find a list of operations the Google Drive node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [Google Drive credentials](https://docs.n8n.io/integrations/builtin/credentials/google) for guidance on setting up authentication.

## Operations <a id="operations"></a>

- **File**
  - [**Copy**](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googledrive/file-operations#copy-a-file) a file
  - [**Create from text**](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googledrive/file-operations#create-from-text)
  - [**Delete**](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googledrive/file-operations#delete-a-file) a file
  - [**Download**](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googledrive/file-operations#download-a-file) a file
  - [**Move**](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googledrive/file-operations#move-a-file) a file
  - [**Share**](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googledrive/file-operations#share-a-file) a file
  - [**Update**](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googledrive/file-operations#update-a-file) a file
  - [**Upload**](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googledrive/file-operations#upload-a-file) a file
- **File/Folder**
  - [**Search**](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googledrive/file-folder-operations#search-files-and-folders) files and folders
- **Folder**
  - [**Create**](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googledrive/folder-operations#create-a-folder) a folder
  - [**Delete**](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googledrive/folder-operations#delete-a-folder) a folder
  - [**Share**](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googledrive/folder-operations#share-a-folder) a folder
- **Shared Drive**
  - [**Create**](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googledrive/shared-drive-operations#create-a-shared-drive) a shared drive
  - [**Delete**](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googledrive/shared-drive-operations#delete-a-shared-drive) a shared drive
  - [**Get**](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googledrive/shared-drive-operations#get-a-shared-drive) a shared drive
  - [**Get Many**](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googledrive/shared-drive-operations#get-many-shared-drives) shared drives
  - [**Update**](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googledrive/shared-drive-operations#update-a-shared-drive) a shared drive

## Templates and examples <a id="templates-and-examples"></a>

[Browse n8n-nodes-base.googledrive integration templates](https://n8n.io/integrations/google-drive) or [search all templates](https://n8n.io/workflows/)

## Common issues <a id="common-issues"></a>

For common questions or issues and suggested solutions, refer to [Common issues](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googledrive/common-issues).

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
