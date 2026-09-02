> Commit-pinned source for n8n main: [docs/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreredis.md](https://github.com/n8n-io/n8n-docs/blob/0b69471cc64a4886de337982abd2f5d237dcd52a/docs/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreredis.md)

# Redis Vector Store

Use the Redis Vector Store node to interact with your Redis database as a vector store[^1]. You can insert documents into the vector database, get documents from the vector database, retrieve documents using a retriever connected to a chain[^2], or connect it directly to an agent[^3] to use as a tool[^4].

On this page, you'll find the node parameters for the Redis Vector Store node, and links to more resources.

> **Info**
> **Credentials**
>
> You can find authentication information for this node [here](https://docs.n8n.io/integrations/builtin/credentials/redis).

> **Info**
> **Parameter resolution in sub-nodes**
>
> Sub-nodes behave differently to other nodes when processing multiple items using an expression.
>
> Most nodes, including root nodes, take any number of items as input, process these items, and output the results. You can use expressions to refer to input items, and the node resolves the expression for each item in turn. For example, given an input of five `name` values, the expression `{{ $json.name }}` resolves to each name in turn.
>
> In sub-nodes, the expression always resolves to the first item. For example, given an input of five `name` values, the expression `{{ $json.name }}` always resolves to the first name.

## Prerequisites <a id="prerequisites"></a>

Before using this node, you need a Redis database with the [Redis Query Engine](https://redis.io/docs/latest/develop/ai/search-and-query/?utm_source=n8n\&utm_medium=docs) enabled. Use one of the following:

- **Redis Open Source (v8.0 and later)** : includes the Redis Query Engine by default
- [**Redis Cloud**](https://cloud.redis.io/?utm_source=n8n\&utm_medium=docs) : fully managed service
- [**Redis Software**](https://redis.io/software/?utm_source=n8n\&utm_medium=docs) : self-managed deployment

> **Info**
> **A new index will be created if you don't have one.**
>
> Creating your own indices in advance is only necessary if you want to use a custom index schema or reuse an existing index. Otherwise, you can skip this step and let the node create a new index for you based on the options you specify.

## Node usage patterns <a id="node-usage-patterns"></a>

You can use the Redis Vector Store node in the following patterns:

### Use as a regular node to insert and retrieve documents <a id="use-as-a-regular-node-to-insert-and-retrieve-documents"></a>

You can use the Redis Vector Store as a regular node to insert or get documents. This pattern places the Redis Vector Store in the regular connection flow without using an agent.

You can see an example in [this template](https://n8n.io/workflows/10887-reduce-llm-costs-with-semantic-caching-using-redis-vector-store-and-huggingface/) where the semantic cache is stored in Redis and retrieved using the Redis Vector Store node in the start of the workflow.

### Connect directly to an AI agent as a tool <a id="connect-directly-to-an-ai-agent-as-a-tool"></a>

You can connect the Redis Vector Store node directly to the tool[^4] connector of an [AI agent](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent) to use a vector store as a resource when answering queries.

Here, the connection would be: AI agent (tools connector) -> Redis Vector Store node.

### Use a retriever to fetch documents <a id="use-a-retriever-to-fetch-documents"></a>

You can use the [Vector Store Retriever](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.retrievervectorstore) node with the Redis Vector Store node to fetch documents from the Redis Vector Store node. This is often used with the [Question and Answer Chain](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.chainretrievalqa) node to fetch documents from the vector store that match the given chat input.

An [example of the connection flow](https://n8n.io/workflows/1960-ask-questions-about-a-pdf-using-ai/) (the linked example uses Pinecone, but the pattern is the same) would be: Question and Answer Chain (Retriever connector) -> Vector Store Retriever (Vector Store connector) -> Redis Vector Store.

### Use the Vector Store Question Answer Tool to answer questions <a id="use-the-vector-store-question-answer-tool-to-answer-questions"></a>

Another pattern uses the [Vector Store Question Answer Tool](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolvectorstore) to summarize results and answer questions from the Redis Vector Store node. Rather than connecting the Redis Vector Store directly as a tool, this pattern uses a tool specifically designed to summarizes data in the vector store.

This [template](https://n8n.io/workflows/10837-chat-with-github-issues-using-openai-and-redis-vector-search/) shows how to use the Vector Store Question Answer Tool with the Redis Vector Store node. The connections flow in this case would look like this: AI agent (tools connector) -> Vector Store Question Answer Tool (Vector Store connector) -> Redis Vector store.

## Node parameters <a id="node-parameters"></a>

This Vector Store node has four modes: **Get Many**, **Insert Documents**, **Retrieve Documents (As Vector Store for Chain/Tool)**, and **Retrieve Documents (As Tool for AI Agent)**. The mode you select determines the operations you can perform with the node and what inputs and outputs are available.

### Rerank Results <a id="rerank-results"></a>

Enables [reranking](https://docs.n8n.io/get-started/key-concept-glossary#ai-reranking). If you enable this option, you must connect a reranking node to the vector store. That node will then rerank the results for queries. You can use this option with the `Get Many`, `Retrieve Documents (As Vector Store for Chain/Tool)` and `Retrieve Documents (As Tool for AI Agent)` modes.

### Get Many parameters <a id="get-many-parameters"></a>

- **Redis Index**: Enter the name of the Redis vector search index to use. Optionally choose an existing one from the list.
- **Prompt**: Enter the search query.
- **Limit**: Enter how many results to retrieve from the vector store. For example, set this to `10` to get the ten best results.

This Operation Mode includes one **Node option**, the [Metadata Filter](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreredis#metadata-filter).

### Insert Documents parameters <a id="insert-documents-parameters"></a>

- **Redis Index**: Enter the name of the Redis vector search index to use. Optionally choose an existing one from the list.

### Retrieve Documents (As Vector Store for Chain/Tool) parameters <a id="retrieve-documents-as-vector-store-for-chaintool-parameters"></a>

- **Redis Index**: Enter the name of the Redis vector search index to use. Optionally choose an existing one from the list.

This Operation Mode includes one **Node option**, the [Metadata Filter](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreredis#metadata-filter).

### Retrieve Documents (As Tool for AI Agent) parameters <a id="retrieve-documents-as-tool-for-ai-agent-parameters"></a>

- **Name**: The name of the vector store.
- **Description**: Explain to the LLM what this tool does. A good, specific description allows LLMs to produce expected results more often.
- **Redis Index**: Enter the name of the Redis vector search index to use. Optionally choose an existing one from the list.
- **Limit**: Enter how many results to retrieve from the vector store. For example, set this to `10` to get the ten best results.

### Include Metadata <a id="include-metadata"></a>

Whether to include document metadata.

You can use this with the [Get Many](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreredis#get-many-parameters) and [Retrieve Documents (As Tool for AI Agent)](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreredis#retrieve-documents-as-tool-for-ai-agent-parameters) modes.

## Node options <a id="node-options"></a>

### Metadata Filter <a id="metadata-filter"></a>

Metadata filters are available for the [Get Many](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreredis#get-many-parameters), [Retrieve Documents (As Vector Store for Chain/Tool)](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreredis#retrieve-documents-as-vector-store-for-chaintool-parameters), and [Retrieve Documents (As Tool for AI Agent)](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreredis#retrieve-documents-as-tool-for-ai-agent-parameters) operation modes. This is an `OR` query. If you specify more than one metadata filter field, at least one of them must match. When inserting data, the metadata is set using the document loader. Refer to [Default Data Loader](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.documentdefaultdataloader) for more information on loading documents.

### Redis Configuration Options <a id="redis-configuration-options"></a>

Available for all operation modes:

- **Metadata Key**: Enter the key for the metadata field in the Redis hash (default: `metadata`).
- **Key Prefix**: Enter the key prefix for storing documents (default: `doc:`).
- **Content Key**: Enter the key for the content field in the Redis hash (default: `content`).
- **Embedding Key**: Enter the key for the embedding field in the Redis hash (default: `embedding`).

### Insert Options <a id="insert-options"></a>

Available for the [Insert Documents](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreredis#insert-documents-parameters) operation mode:

- **Overwrite Documents**: Select whether to overwrite existing documents (turned on) or not (turned off). Also deletes the index.
- **Time-to-Live**: Enter the time-to-live for documents in seconds. Does not expire the index.

## Templates and examples <a id="templates-and-examples"></a>

[Browse Redis Vector Store node documentation integration templates](https://n8n.io/integrations/redis-vector-store) or [search all templates](https://n8n.io/workflows/)

## Related resources <a id="related-resources"></a>

Refer to:

- [Redis Vector Search documentation](https://redis.io/docs/latest/develop/ai/search-and-query/vectors/) for more information about Redis vector capabilities.
- [RediSearch documentation](https://redis.io/docs/latest/develop/interact/search-and-query/) for more information about RediSearch.
- [LangChain's Redis Vector Store documentation](https://js.langchain.com/docs/integrations/vectorstores/redis) for more information about the service.

View n8n's [Advanced AI](https://docs.n8n.io/build/integrate-ai) documentation.

## Self-hosted AI Starter Kit <a id="self-hosted-ai-starter-kit"></a>

New to working with AI and using self-hosted n8n? Try n8n's [self-hosted AI Starter Kit](https://docs.n8n.io/deploy/host-n8n/deploy-with-the-ai-starter-kit) to get started with a proof-of-concept or demo playground using Ollama, Qdrant, and PostgreSQL.

[^1]: A vector store, or vector database, stores mathematical representations of information. Use with embeddings and retrievers to create a database that your AI can access when answering questions.

[^2]: AI chains allow you to interact with large language models (LLMs) and other resources in sequences of calls to components. AI chains in n8n don't use persistent memory, so you can't use them to reference previous context (use AI agents for this).

[^3]: AI agents are artificial intelligence systems capable of responding to requests, making decisions, and performing real-world tasks for users. They use large language models (LLMs) to interpret user input and make decisions about how to best process requests using the information and resources they have available.

[^4]: In an AI context, a tool is an add-on resource that the AI can refer to for specific information or functionality when responding to a request. The AI model can use a tool to interact with external systems or complete specific, focused tasks.
