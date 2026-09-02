> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.gitlab.md](https://github.com/n8n-io/n8n-docs/blob/78fea4497784e9c1f3f34b12757ef7a2a6b363af/docs/integrations/builtin/app-nodes/n8n-nodes-base.gitlab.md)

# GitLab node <a id="gitlab-node"></a>

Use the GitLab node to automate work in GitLab, and integrate GitLab with other applications. n8n has built-in support for a wide range of GitLab features, including creating, updating, deleting, and editing issues, repositories, releases and users.

On this page, you'll find a list of operations the GitLab node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [GitLab credentials](https://docs.n8n.io/integrations/builtin/credentials/gitlab) for guidance on setting up authentication.

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
  - Create a new issue
  - Create a new comment on an issue
  - Edit an issue
  - Get the data of a single issue
  - Lock an issue
- Release
  - Create a new release
  - Delete a new release
  - Get a new release
  - Get all releases
  - Update a new release
- Repository
  - Get the data of a single repository
  - Returns issues of a repository
- User
  - Returns the repositories of a user

## Templates and examples <a id="templates-and-examples"></a>

[Browse GitLab node documentation integration templates](https://n8n.io/integrations/gitlab) or [search all templates](https://n8n.io/workflows/)

## Related resources <a id="related-resources"></a>

Refer to [GitLab's documentation](https://docs.gitlab.com/ee/api/rest/) for more information about the service.

n8n provides a trigger node for GitLab. You can find the trigger node docs [here](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.gitlabtrigger).

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
