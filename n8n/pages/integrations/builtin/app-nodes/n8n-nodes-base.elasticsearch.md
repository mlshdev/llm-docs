> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.elasticsearch.md](https://github.com/n8n-io/n8n-docs/blob/3317373ce39c3ce2406c8e3d99bb2da7f7180321/docs/integrations/builtin/app-nodes/n8n-nodes-base.elasticsearch.md)

# Elasticsearch node <a id="elasticsearch-node"></a>

Use the Elasticsearch node to automate work in Elasticsearch, and integrate Elasticsearch with other applications. n8n has built-in support for a wide range of Elasticsearch features, including creating, updating, deleting, and getting documents and indexes.

On this page, you'll find a list of operations the Elasticsearch node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [Elasticsearch credentials](https://docs.n8n.io/integrations/builtin/credentials/elasticsearch) for guidance on setting up authentication.

> **Info**
> **This node can be used as an AI tool**
>
> This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](https://docs.n8n.io/build/integrate-ai/ai-examples/use-ai-for-parameters).

## Operations <a id="operations"></a>

- Document
  - Create a document
  - Delete a document
  - Get a document
  - Get all documents
  - Update a document
- Index
  - Create
  - Delete
  - Get
  - Get All

## Templates and examples <a id="templates-and-examples"></a>

[Browse Elasticsearch node documentation integration templates](https://n8n.io/integrations/elasticsearch) or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
