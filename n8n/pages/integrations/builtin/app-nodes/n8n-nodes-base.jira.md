> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.jira.md](https://github.com/n8n-io/n8n-docs/blob/e2348a766e0ed24d6420aae246e6f0bccbc2c50e/docs/integrations/builtin/app-nodes/n8n-nodes-base.jira.md)

# Jira Software node <a id="jira-software-node"></a>

Use the Jira Software node to automate work in Jira, and integrate Jira with other applications. n8n has built-in support for a wide range of Jira features, including creating, updating, deleting, and getting issues, and users.

On this page, you'll find a list of operations the Jira Software node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [Jira credentials](https://docs.n8n.io/integrations/builtin/credentials/jira) for guidance on setting up authentication.

> **Info**
> **This node can be used as an AI tool**
>
> This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](https://docs.n8n.io/build/integrate-ai/ai-examples/use-ai-for-parameters).

## Operations <a id="operations"></a>

- Issue
  - Get issue changelog
  - Create a new issue
  - Delete an issue
  - Get an issue
  - Get all issues
  - Create an email notification for an issue and add it to the mail queue
  - Return either all transitions or a transition that can be performed by the user on an issue, based on the issue's status
  - Update an issue
- Issue Attachment
  - Add attachment to issue
  - Get an attachment
  - Get all attachments
  - Remove an attachment
- Issue Comment
  - Add comment to issue
  - Get a comment
  - Get all comments
  - Remove a comment
  - Update a comment
- User
  - Create a new user.
  - Delete a user.
  - Retrieve a user.

## Templates and examples <a id="templates-and-examples"></a>

[Browse Jira Software node documentation integration templates](https://n8n.io/integrations/jira-software) or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.

## Related resources <a id="related-resources"></a>

Refer to the [official JQL documentation](https://www.atlassian.com/software/jira/guides/expand-jira/jql) about Jira Query Language (JQL) to learn more about it.

## Fetch issues for a specific project <a id="fetch-issues-for-a-specific-project"></a>

The **Get All** operation returns all the issues from Jira. To fetch issues for a particular project, you need to use Jira Query Language (JQL).

For example, if you want to receive all the issues of a project named `n8n`, you'd do something like this:

- Select **Get All** from the **Operation** dropdown list.
- Toggle **Return All** to true.
- Select **Add Option** and select **JQL**.
- Enter `project=n8n` in the **JQL** field.

This query will fetch all the issues in the project named `n8n`. Enter the name of your project instead of `n8n` to fetch all the issues for your project.
