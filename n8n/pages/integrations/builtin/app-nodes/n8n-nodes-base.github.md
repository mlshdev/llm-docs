> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.github.md](https://github.com/n8n-io/n8n-docs/blob/6f4b48e69e3ab9acbf023f18020c40c125c16d45/docs/integrations/builtin/app-nodes/n8n-nodes-base.github.md)

# GitHub node <a id="github-node"></a>

Use the GitHub node to automate work in GitHub, and integrate GitHub with other applications. n8n has built-in support for a wide range of GitHub features, including creating, updating, deleting, and editing files, repositories, issues, pull requests, releases, and users.

On this page, you'll find a list of operations the GitHub node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [GitHub credentials](https://docs.n8n.io/integrations/builtin/credentials/github) for guidance on setting up authentication.

> **Info**
> **This node can be used as an AI tool**
>
> This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](https://docs.n8n.io/build/integrate-ai/ai-examples/use-ai-for-parameters).

## Operations <a id="operations"></a>

- File
  - Create
  - Delete
  - Edit
  - Get
  - List
- Issue
  - Create
  - Create Comment
  - Edit
  - Get
  - Lock
- Organization
  - Get Repositories
- Pull Request
  - Close
  - Create
  - Create Comment
  - Edit Comment
  - Get
  - Get Diff
  - Get Patch
  - Merge
  - Reopen
  - Update
- Release
  - Create
  - Delete
  - Get
  - Get Many
  - Update
- Repository
  - Get
  - Get Issues
  - Get License
  - Get Profile
  - Get Pull Requests
  - List Popular Paths
  - List Referrers
- Review
  - Create
  - Get
  - Get Many
  - Update
- User
  - Get Repositories
  - Invite
- Workflow
  - Disable
  - Dispatch
  - Enable
  - Get
  - Get Usage
  - List

## Templates and examples <a id="templates-and-examples"></a>

[Browse GitHub node documentation integration templates](https://n8n.io/integrations/github) or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
