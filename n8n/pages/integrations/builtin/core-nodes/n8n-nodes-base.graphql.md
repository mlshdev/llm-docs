> Commit-pinned source for n8n main: [docs/integrations/builtin/core-nodes/n8n-nodes-base.graphql.md](https://github.com/n8n-io/n8n-docs/blob/e2348a766e0ed24d6420aae246e6f0bccbc2c50e/docs/integrations/builtin/core-nodes/n8n-nodes-base.graphql.md)

# GraphQL <a id="graphql"></a>

[GraphQL](https://graphql.org/) is an open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data. Use the GraphQL node to query a GraphQL endpoint.

## Node parameters <a id="node-parameters"></a>

> **Info**
> **This node can be used as an AI tool**
>
> This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](https://docs.n8n.io/build/integrate-ai/ai-examples/use-ai-for-parameters).

### Authentication <a id="authentication"></a>

Select the type of authentication to use.

If you select anything other than **None**, the **Credential for <selected-auth-type>** parameter appears for you to select an existing or create a new authentication credential for that authentication type.

### HTTP Request Method <a id="http-request-method"></a>

Select the underlying HTTP Request method the node should use. Choose from:

- **GET**
- **POST**: If you select this method, you'll also need to select the **Request Format** the node should use for the query payload. Choose from:
  - **GraphQL (Raw)**
  - **JSON**

### Endpoint <a id="endpoint"></a>

Enter the GraphQL Endpoint you'd like to hit.

### Ignore SSL Issues <a id="ignore-ssl-issues"></a>

When you turn on this control, n8n ignores SSL certificate validation failure.

### Query <a id="query"></a>

Enter the GraphQL query you want to execute.

Refer to [Related Resources](#related-resources) for information on writing your query.

### Response Format <a id="response-format"></a>

Select the format you'd like to receive query results in. Choose between:

- **JSON**
- **String**: If you select this format, enter a **Response Data Property Name** to define the property the string is written to.

## Headers <a id="headers"></a>

Enter any **Headers** you want to pass as part of the query as **Name** / **Value** pairs.

## Templates and examples <a id="templates-and-examples"></a>

[Browse GraphQL integration templates](https://n8n.io/integrations/graphql) or [search all templates](https://n8n.io/workflows/)

## Related resources <a id="related-resources"></a>

To use the GraphQL node, you need to understand GraphQL query language. GraphQL have their own [Introduction to GraphQL](https://graphql.org/learn/) tutorial.
