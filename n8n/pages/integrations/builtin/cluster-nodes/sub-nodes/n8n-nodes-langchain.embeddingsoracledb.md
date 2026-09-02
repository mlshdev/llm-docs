> Commit-pinned source for n8n main: [docs/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingsoracledb.md](https://github.com/n8n-io/n8n-docs/blob/0b69471cc64a4886de337982abd2f5d237dcd52a/docs/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingsoracledb.md)

# Embeddings Oracle Database node

Use the Embeddings Oracle Database node to generate embeddings[^1] with ONNX models stored in Oracle Database. This node is useful for workflows that perform semantic search, similarity matching, retrieval-augmented generation, or other tasks that require vector representations of text.

On this page, you'll find the node parameters for the Embeddings Oracle Database node, and links to more resources.

> **Info**
> **Credentials**
>
> You can find authentication information for this node [here](https://docs.n8n.io/integrations/builtin/credentials/oracledb).

> **Info**
> **ONNX models**
>
> Your Oracle Database instance must support Oracle AI Vector Search and ONNX model execution capabilities.
>
> Import one or more ONNX embedding models into Oracle Database before using this node. Only imported models are available for selection.

> **Info**
> **Parameter resolution in sub-nodes**
>
> Sub-nodes behave differently to other nodes when processing multiple items using an expression.
>
> Most nodes, including root nodes, take any number of items as input, process these items, and output the results. You can use expressions to refer to input items, and the node resolves the expression for each item in turn. For example, given an input of five `name` values, the expression `{{ $json.name }}` resolves to each name in turn.
>
> In sub-nodes, the expression always resolves to the first item. For example, given an input of five `name` values, the expression `{{ $json.name }}` always resolves to the first name.

## Node parameters

- **Model**: Select the ONNX model used to generate embeddings. Choose a model from the list of models available in your Oracle Database instance or specify a model ID manually. The selected model determines the embedding dimensions and supported input types.

The node loads available models from the `USER_MINING_MODELS` view in the configured Oracle Database connection. Only models accessible to the current database user are displayed.

## Templates and examples

[Browse Embeddings Oracle Database node documentation integration templates](https://n8n.io/integrations/embeddings-oracle-database) or [search all templates](https://n8n.io/workflows/)

## Related resources

Refer to [Oracle's ONNX model import documentation](https://docs.oracle.com/en/database/oracle/oracle-database/26/vecse/import-onnx-models-oracle-ai-database-end-end-example.html) for more information about importing ONNX models into Oracle Database.

View n8n's [Advanced AI](https://docs.n8n.io/build/integrate-ai) documentation.

[^1]: Embeddings are numerical representations of data using vectors. They're used by AI to interpret complex data and relationships by mapping values across many dimensions. Vector databases, or vector stores, are databases designed to store and access embeddings.
