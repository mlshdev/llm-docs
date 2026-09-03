> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.databricks.md](https://github.com/n8n-io/n8n-docs/blob/6f4b48e69e3ab9acbf023f18020c40c125c16d45/docs/integrations/builtin/app-nodes/n8n-nodes-base.databricks.md)

# Databricks node <a id="databricks-node"></a>

Use the Databricks node to automate work in Databricks, and integrate Databricks with other applications. n8n has built-in support for a wide range of Databricks features, including executing SQL queries, managing Unity Catalog objects, querying ML model serving endpoints, and working with vector search indexes.

On this page, you'll find a list of operations the Databricks node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [Databricks credentials](https://docs.n8n.io/integrations/builtin/credentials/databricks) for guidance on setting up authentication.

> **Info**
> **This node can be used as an AI tool**
>
> This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](https://docs.n8n.io/build/integrate-ai/ai-examples/use-ai-for-parameters).

## Operations <a id="operations"></a>

- Databricks SQL
  - Execute Query
- File
  - Create Directory
  - Delete Directory
  - Delete File
  - Download File
  - Get File Metadata
  - List Directory
  - Upload File
- Genie
  - Create Conversation Message
  - Execute Message SQL Query
  - Get Conversation Message
  - Get Genie Space
  - Get Query Results
  - Start Conversation
- Model Serving
  - Query Endpoint
- Unity Catalog
  - Create Catalog
  - Create Function
  - Create Volume
  - Delete Catalog
  - Delete Function
  - Delete Volume
  - Get Catalog
  - Get Function
  - Get Table
  - Get Volume
  - List Catalogs
  - List Functions
  - List Tables
  - List Volumes
  - Update Catalog
- Vector Search
  - Create Index
  - Get Index
  - List Indexes
  - Query Index

## Templates and examples <a id="templates-and-examples"></a>

[Browse Databricks node documentation integration templates](https://n8n.io/integrations/databricks) or [search all templates](https://n8n.io/workflows/)

## Related resources <a id="related-resources"></a>

Refer to [Databricks' REST API documentation](https://docs.databricks.com/api/) for details about their API.

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
