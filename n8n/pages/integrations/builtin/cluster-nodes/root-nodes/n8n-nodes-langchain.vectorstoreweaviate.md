> Commit-pinned source for n8n main: [docs/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreweaviate.md](https://github.com/n8n-io/n8n-docs/blob/32d4c1af45711af43703671a66f502ef7bd2b932/docs/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreweaviate.md)

# Weaviate Vector Store

Use the Weaviate node to interact with your Weaviate collection as a vector store[^1]. You can insert documents into or retrieve documents from a vector database. You can also retrieve documents to provide them to a retriever connected to a chain[^2] or connect this node directly to an agent[^3] to use as a tool[^4]. On this page, you'll find the node parameters for the Weaviate node, and links to more resources.

> **Info**
> **Credentials**
>
> You can find authentication information for this node [here](https://docs.n8n.io/integrations/builtin/credentials/weaviate).

> **Info**
> **Parameter resolution in sub-nodes**
>
> Sub-nodes behave differently to other nodes when processing multiple items using an expression.
>
> Most nodes, including root nodes, take any number of items as input, process these items, and output the results. You can use expressions to refer to input items, and the node resolves the expression for each item in turn. For example, given an input of five `name` values, the expression `{{ $json.name }}` resolves to each name in turn.
>
> In sub-nodes, the expression always resolves to the first item. For example, given an input of five `name` values, the expression `{{ $json.name }}` always resolves to the first name.

## Node usage patterns <a id="node-usage-patterns"></a>

You can use the Weaviate Vector Store node in the following patterns.

### Use as a regular node to insert and retrieve documents <a id="use-as-a-regular-node-to-insert-and-retrieve-documents"></a>

You can use the Weaviate Vector Store as a regular node to insert or get documents. This pattern places the Weaviate Vector Store in the regular connection flow without using an agent.

### Connect directly to an AI agent as a tool <a id="connect-directly-to-an-ai-agent-as-a-tool"></a>

You can connect the Weaviate Vector Store node directly to the tool connector of an [AI agent](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent) to use a vector store as a resource when answering queries.

Here, the connection would be: AI agent (tools connector) -> Weaviate Vector Store node.

### Use a retriever to fetch documents <a id="use-a-retriever-to-fetch-documents"></a>

You can use the [Vector Store Retriever](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.retrievervectorstore) node with the Weaviate Vector Store node to fetch documents from the Weaviate Vector Store node. This is often used with the [Question and Answer Chain](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.chainretrievalqa) node to fetch documents from the vector store that match the given chat input.

### Use the Vector Store Question Answer Tool to answer questions <a id="use-the-vector-store-question-answer-tool-to-answer-questions"></a>

Another pattern uses the [Vector Store Question Answer Tool](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolvectorstore) to summarize results and answer questions from the Weaviate Vector Store node. Rather than connecting the Weaviate Vector Store directly as a tool, this pattern uses a tool specifically designed to summarizes data in the vector store.

## Node parameters <a id="node-parameters"></a>

> **Info**
> **Multitenancy**
>
> You can separate your data into isolated tenants for the same collection (for example, for different customers). For that, you must always provide a [Tenant Name](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreweaviate#tenant-name) both when inserting and retrieving objects. [Read more about multi tenancy in Weaviate docs](https://docs.weaviate.io/weaviate/manage-collections/multi-tenancy).

This Vector Store node has four modes: **Get Many**, **Insert Documents**, **Retrieve Documents (As Vector Store for Chain/Tool)**, and **Retrieve Documents (As Tool for AI Agent)**. The mode you select determines the operations you can perform with the node and what inputs and outputs are available.

### Get Many parameters <a id="get-many-parameters"></a>

- **Weaviate Collection**: Enter the name of the Weaviate collection to use.
- **Prompt**: Enter the search query.
- **Limit**: Enter how many results to retrieve from the vector store. For example, set this to `10` to get the ten best results.

### Insert Documents parameters <a id="insert-documents-parameters"></a>

- **Weaviate Collection**: Enter the name of the Weaviate collection to use.
- **Embedding Batch Size**: The number of documents to embed in a single batch. The default is 200 documents.

### Retrieve Documents (As Vector Store for Chain/Tool) parameters <a id="retrieve-documents-as-vector-store-for-chaintool-parameters"></a>

- **Weaviate Collection**: Enter the name of the Weaviate collection to use.

### Retrieve Documents (As Tool for AI Agent) parameters <a id="retrieve-documents-as-tool-for-ai-agent-parameters"></a>

- **Weaviate Collection**: The name of the vector store.
- **Description**: Explain to the LLM what this tool does. A good, specific description allows LLMs to produce expected results more often.
- **Weaviate Collection**: Enter the name of the Weaviate collection to use.
- **Limit**: Enter how many results to retrieve from the vector store. For example, set this to `10` to get the ten best results.

### Include Metadata <a id="include-metadata"></a>

Whether to include document metadata.

You can use this with the [Get Many](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreweaviate#get-many-parameters) and [Retrieve Documents (As Tool for AI Agent)](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreweaviate#retrieve-documents-as-tool-for-ai-agent-parameters) modes.

### Rerank Results <a id="rerank-results"></a>

Enables [reranking](https://docs.n8n.io/get-started/key-concept-glossary#ai-reranking). If you enable this option, you must connect a reranking node to the vector store. That node will then rerank the results for queries. You can use this option with the `Get Many`, `Retrieve Documents (As Vector Store for Chain/Tool)` and `Retrieve Documents (As Tool for AI Agent)` modes.

## Node options <a id="node-options"></a>

### Search Filters <a id="search-filters"></a>

Available for the [Get Many](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreweaviate#get-many-parameters), [Retrieve Documents (As Vector Store for Chain/Tool)](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreweaviate#retrieve-documents-as-vector-store-for-chaintool-parameters), and [Retrieve Documents (As Tool for AI Agent)](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreweaviate#retrieve-documents-as-tool-for-ai-agent-parameters) operation modes.

When searching for data, use this to match metadata associated with documents. You can learn more about the operators and query structure in [Weaviate's conditional filters documentation](https://docs.weaviate.io/weaviate/api/graphql/filters).

You can use both `AND` and `OR` with different operators. Operators are case insensitive:

```json
{
  "OR": [
    {
        "path": ["source"],
        "operator": "Equal",
        "valueString": "source1"
    },
    {
        "path": ["source"],
        "operator": "Equal",
        "valueString": "source1"
    }
  ]
}
```

Supported operators:

| Operator           | Required Field(s)                                    | Description                                                                                                                                                                       |
| ------------------ | ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `'equal'`          | `valueString` or `valueNumber`                       | Checks if the property is equal to the given string or number.                                                                                                                    |
| `'like'`           | `valueString`                                        | Checks if the string property matches a pattern (for example, sub-string match).                                                                                                  |
| `'containsAny'`    | `valueTextArray` (string\[])                         | Checks if the property contains **any** of the given values.                                                                                                                      |
| `'containsAll'`    | `valueTextArray` (string\[])                         | Checks if the property contains **all** of the given values.                                                                                                                      |
| `'greaterThan'`    | `valueNumber`                                        | Checks if the property value is greater than the given number.                                                                                                                    |
| `'lessThan'`       | `valueNumber`                                        | Checks if the property value is less than the given number.                                                                                                                       |
| `'isNull'`         | `valueBoolean` (true/false)                          | Checks if the property is null or not. ([must enable before ingestion](https://docs.weaviate.io/weaviate/manage-collections/collection-operations#set-inverted-index-parameters)) |
| `'withinGeoRange'` | `valueGeoCoordinates` (object with geolocation data) | Filters by proximity to geographic coordinates.                                                                                                                                   |

When inserting data, the document loader sets the metadata. Refer to [Default Data Loader](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.documentdefaultdataloader) for more information on loading documents.

### Metadata Keys <a id="metadata-keys"></a>

You can define which metadata keys you want Weaviate to return on your queries. This can reduce network load, as you will only get properties you have defined. Returns all properties from the server by default.

Available for the [Get Many](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreweaviate#get-many-parameters), [Retrieve Documents (As Vector Store for Chain/Tool)](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreweaviate#retrieve-documents-as-vector-store-for-chaintool-parameters), and [Retrieve Documents (As Tool for AI Agent)](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreweaviate#retrieve-documents-as-tool-for-ai-agent-parameters) operation modes.

### Hybrid: Query Text <a id="hybrid-query-text"></a>

Provide a query text to combine vector search with a keyword/text search.

### Hybrid: Explain Score <a id="hybrid-explain-score"></a>

Whether to show the score fused between hybrid and vector search explanation.

### Hybrid: Fusion Type <a id="hybrid-fusion-type"></a>

Select the fusion type for combining vector and keyword search results. [Learn more about fusion algorithms](https://weaviate.io/learn/knowledgecards/fusion-algorithm).

Options:

- **Relative Score**: Uses relative score fusion
- **Ranked**: Uses ranked fusion

### Hybrid: Auto Cut Limit <a id="hybrid-auto-cut-limit"></a>

Limit result groups by detecting sudden jumps in score. [Learn more about autocut](https://docs.weaviate.io/weaviate/api/graphql/additional-operators#autocut).

### Hybrid: Alpha <a id="hybrid-alpha"></a>

Change the relative weights of the keyword and vector components. 1.0 = pure vector, 0.0 = pure keyword. Default is 0.5. [Learn more about the alpha parameter](https://weaviate.io/learn/knowledgecards/alpha-parameter).

### Hybrid: Query Properties <a id="hybrid-query-properties"></a>

Comma-separated list of properties to include in the query with optionally weighted values, e.g., "question^2,answer". [Learn more about setting weights on property values](https://docs.weaviate.io/weaviate/search/hybrid#set-weights-on-property-values).

### Hybrid: Max Vector Distance <a id="hybrid-max-vector-distance"></a>

Set the maximum allowable distance for the vector search component.

### Tenant Name <a id="tenant-name"></a>

The specific tenant to store or retrieve documents for. [Learn more about multi-tenancy](https://weaviate.io/learn/knowledgecards/multi-tenancy).

> **Info**
> **Must enable at creation**
>
> You must pass a tenant name at first ingestion to enable multitenancy for a collection. You can't enable or disable multitenancy after creation.

### Text Key <a id="text-key"></a>

The key in the document that contains the embedded text.

### Skip Init Checks <a id="skip-init-checks"></a>

Whether to [skip initialization checks](https://docs.weaviate.io/weaviate/client-libraries/typescript/notes-best-practices#initial-connection-checks) when instantiating the client.

### Init Timeout <a id="init-timeout"></a>

Number of seconds to wait before [timing out](https://docs.weaviate.io/weaviate/client-libraries/typescript/notes-best-practices#timeout-values) during initial checks.

### Insert Timeout <a id="insert-timeout"></a>

Number of seconds to wait before [timing out](https://docs.weaviate.io/weaviate/client-libraries/typescript/notes-best-practices#timeout-values) during inserts.

### Query Timeout <a id="query-timeout"></a>

Number of seconds to wait before [timing out](https://docs.weaviate.io/weaviate/client-libraries/typescript/notes-best-practices#timeout-values) during queries.

### GRPC Proxy <a id="grpc-proxy"></a>

A proxy to use for gRPC requests.

### Clear Data <a id="clear-data"></a>

Available for the [Insert Documents](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreweaviate#insert-documents-parameters) operation mode.

Whether to clear the collection or tenant before inserting new data.

## Templates and examples <a id="templates-and-examples"></a>

[Browse Weaviate Vector Store node documentation integration templates](https://n8n.io/integrations/weaviate-vector-store) or [search all templates](https://n8n.io/workflows/)

## Related resources <a id="related-resources"></a>

Refer to [LangChain's Weaviate documentation](https://js.langchain.com/docs/integrations/vectorstores/weaviate/) for more information about the service.

Refer to [Weaviate Installation](https://docs.weaviate.io/deploy) for a self hosted Weaviate Cluster.

View n8n's [Advanced AI](https://docs.n8n.io/build/integrate-ai) documentation.

[^1]: A vector store, or vector database, stores mathematical representations of information. Use with embeddings and retrievers to create a database that your AI can access when answering questions.

[^2]: AI chains allow you to interact with large language models (LLMs) and other resources in sequences of calls to components. AI chains in n8n don't use persistent memory, so you can't use them to reference previous context (use AI agents for this).

[^3]: AI agents are artificial intelligence systems capable of responding to requests, making decisions, and performing real-world tasks for users. They use large language models (LLMs) to interpret user input and make decisions about how to best process requests using the information and resources they have available.

[^4]: In an AI context, a tool is an add-on resource that the AI can refer to for specific information or functionality when responding to a request. The AI model can use a tool to interact with external systems or complete specific, focused tasks.
