> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.nextcloud.md](https://github.com/n8n-io/n8n-docs/blob/6f4b48e69e3ab9acbf023f18020c40c125c16d45/docs/integrations/builtin/app-nodes/n8n-nodes-base.nextcloud.md)

# Nextcloud node <a id="nextcloud-node"></a>

Use the Nextcloud node to automate work in Nextcloud, and integrate Nextcloud with other applications. n8n has built-in support for a wide range of Nextcloud features, including creating, updating, deleting, and getting files, and folders as well as retrieving, and inviting users.

On this page, you'll find a list of operations the Nextcloud node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [Nextcloud credentials](https://docs.n8n.io/integrations/builtin/credentials/nextcloud) for guidance on setting up authentication.

> **Info**
> **This node can be used as an AI tool**
>
> This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](https://docs.n8n.io/build/integrate-ai/ai-examples/use-ai-for-parameters).

## Operations <a id="operations"></a>

- File
  - Copy a file
  - Delete a file
  - Download a file
  - Move a file
  - Share a file
  - Upload a file
- Folder
  - Copy a folder
  - Create a folder
  - Delete a folder
  - Return the contents of a given folder
  - Move a folder
  - Share a folder
- User
  - Invite a user to a Nextcloud organization
  - Delete a user.
  - Retrieve information about a single user.
  - Retrieve a list of users.
  - Edit attributes related to a user.

## Templates and examples <a id="templates-and-examples"></a>

[Browse Nextcloud node documentation integration templates](https://n8n.io/integrations/nextcloud) or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
