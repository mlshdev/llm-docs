> Commit-pinned source for n8n main: [docs/integrations/builtin/core-nodes/n8n-nodes-base.n8n.md](https://github.com/n8n-io/n8n-docs/blob/0ece31e57a42e63cf2a2c7f9a33b42888e09a5b3/docs/integrations/builtin/core-nodes/n8n-nodes-base.n8n.md)

# n8n

A node to integrate with n8n itself. This node allows you to consume the [n8n API](https://docs.n8n.io/connect/n8n-api) in your workflows.

Refer to the [n8n REST API documentation](https://docs.n8n.io/connect/n8n-api) for more information on using the n8n API. Refer to [API endpoint reference](https://docs.n8n.io/connect/n8n-api/api-reference) for working with the API endpoints directly.

> **Info**
> **Credentials**
>
> You can find authentication information for this node in the [API authentication](https://docs.n8n.io/connect/n8n-api/authentication) documentation.

> **Warning**
> **SSL**
>
> This node doesn't support SSL. If your server requires an SSL connection, use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the [n8n API](https://docs.n8n.io/connect/n8n-api). The HTTP Request node has options to [provide the SSL certificate](https://docs.n8n.io/integrations/builtin/credentials/httprequest#provide-an-ssl-certificate).

## Operations <a id="operations"></a>

- Audit
  - [**Generate** a security audit](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.n8n#generate-audit)
- Credential
  - [**Create** a credential](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.n8n#create-credential)
  - [**Delete** a credential](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.n8n#delete-credential)
  - [**Get Schema**](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.n8n#get-credential-schema): Use this operation to get credential data schema for type
- Execution
  - [**Get** an execution](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.n8n#get-execution)
  - [**Get Many** executions](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.n8n#get-many-executions)
  - [**Delete** an execution](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.n8n#delete-execution)
- Workflow
  - [**Publish** a workflow](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.n8n#activate-deactivate-delete-and-get-workflow)
  - [**Create** a workflow](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.n8n#create-workflow)
  - [**Unpublish** a workflow](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.n8n#activate-deactivate-delete-and-get-workflow)
  - [**Delete** a workflow](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.n8n#activate-deactivate-delete-and-get-workflow)
  - [**Get** a workflow](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.n8n#activate-deactivate-delete-and-get-workflow)
  - [**Get Many** workflows](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.n8n#get-many-workflows)
  - [**Update** a workflow](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.n8n#update-workflow)

## Generate audit <a id="generate-audit"></a>

This operation has no parameters. Configure it with these options:

- **Categories**: Select the risk categories you want the audit to include. Options include:
  - **Credentials**
  - **Database**
  - **Filesystem**
  - **Instance**
  - **Nodes**
- **Days Abandoned Workflow**: Use this option to set the number of days without execution after which a workflow should be considered abandoned. Enter a number of days. The default is `90`.

## Create credential <a id="create-credential"></a>

Configure this operation with these parameters:

- **Name**: Enter the name of the credential you'd like to create.
- **Credential Type**: Enter the credential's type. The available types depend on nodes installed on the n8n instance. Some built-in types include `githubApi`, `notionApi`, and `slackApi`.
- **Data**: Enter a valid JSON object with the required properties for this **Credential Type**. To see the expected format, use the **Get Schema** operation.

## Delete credential <a id="delete-credential"></a>

Configure this operation with this parameter:

- **Credential ID**: Enter the ID of the credential you want to delete.

## Get credential schema <a id="get-credential-schema"></a>

Configure this operation with this parameter:

- **Credential Type**: Enter the credential's type. The available types depend on nodes installed on the n8n instance. Some built-in types include `githubApi`, `notionApi`, and `slackApi`.

## Get execution <a id="get-execution"></a>

Configure this operation with this parameter:

- **Execution ID**: Enter the ID of the execution you want to retrieve.

### Get execution option <a id="get-execution-option"></a>

You can further configure this operation with this **Option**:

- **Include Execution Details**: Use this control to set whether to include the detailed execution data (turned on) or not (turned off).

## Get many executions <a id="get-many-executions"></a>

Configure this operation with these parameters:

- **Return All**: Set whether to return all results (turned on) or whether to limit the results to the entered **Limit** (turned on).
- **Limit**: Set the number of results to return if the **Return All** control is turned off.

### Get many executions filters <a id="get-many-executions-filters"></a>

You can further configure this operation with these **Filters**:

- **Workflow**: Filter the executions by workflow. Options include:
  - **From list**: Select a workflow to use as a filter.
  - **By URL**: Enter a workflow URL to use as a filter.
  - **By ID**: Enter a workflow ID to use as a filter.
- **Status**: Filter the executions by status. Options include:
  - **Error**
  - **Success**
  - **Waiting**

### Get many execution options <a id="get-many-execution-options"></a>

You can further configure this operation with this **Option**:

- **Include Execution Details**: Use this control to set whether to include the detailed execution data (turned on) or not (turned off).

## Delete execution <a id="delete-execution"></a>

Configure this operation with this parameter:

- **Execution ID**: Enter the ID of the execution you want to delete.

## Publish, unpublish, delete, and get workflow <a id="activate-deactivate-delete-and-get-workflow"></a>

The **Publish**, **Unpublish**, **Delete**, and **Get** workflow operations all include the same parameter for you to select the **Workflow** you want to perform the operation on. Options include:

- **From list**: Select the workflow from the list.
- **By URL**: Enter the URL of the workflow.
- **By ID**: Enter the ID of the workflow.

## Create workflow <a id="create-workflow"></a>

Configure this operation with this parameter:

- **Workflow Object**: Enter a valid JSON object with the new workflow's details. The object requires these fields:
  - `name`
  - `nodes`
  - `connections`
  - `settings`

Refer to [n8n API reference](https://docs.n8n.io/connect/n8n-api/api-reference) for more information.

## Get many workflows <a id="get-many-workflows"></a>

Configure this operation with these parameters:

- **Return All**: Set whether to return all results (turned on) or whether to limit the results to the entered **Limit** (turned on).
- **Limit**: Set the number of results to return if the **Return All** control is turned off.

### Get many workflows filters <a id="get-many-workflows-filters"></a>

You can further configure this operation with these **Filters**:

- **Return Only Published Workflows**: Select whether to return only published workflows (turned on) or published and unpublished workflows (turned off).
- **Tags**: Enter a comma-separated list of tags the returned workflows must have.

## Update workflow <a id="update-workflow"></a>

Configure this operation with these parameters:

- **Workflow**: Select the workflow you want to update. Options include:
  - **From list**: Select the workflow from the list.
  - **By URL**: Enter the URL of the workflow.
  - **By ID**: Enter the ID of the workflow.
- **Workflow Object**: Enter a valid JSON object to update the workflow with. The object requires these fields:
  - `name`
  - `nodes`
  - `connections`
  - `settings`

Refer to the [n8n API | Update a workflow documentation](https://docs.n8n.io/api/api-reference/#tag/Workflow/paths/~1workflows~1%7Bid%7D/put) for more information.

## Templates and examples <a id="templates-and-examples"></a>

[Browse n8n integration templates](https://n8n.io/integrations/n8n) or [search all templates](https://n8n.io/workflows/)
