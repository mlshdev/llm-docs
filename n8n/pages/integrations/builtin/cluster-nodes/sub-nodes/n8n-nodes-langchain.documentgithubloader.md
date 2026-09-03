> Commit-pinned source for n8n main: [docs/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.documentgithubloader.md](https://github.com/n8n-io/n8n-docs/blob/b732ee99d015bf1b55668862de6e07bbcb573c0c/docs/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.documentgithubloader.md)

# GitHub Document Loader node <a id="github-document-loader-node"></a>

> **Warning**
> **Feature availability**
>
> The GitHub Document Loader node is deprecated from n8n 1.122.0. Refer to [Deprecated and versioned nodes](https://docs.n8n.io/integrations/builtin/deprecated-nodes) for more information.

Use the GitHub Document Loader node to load data from a GitHub repository for vector stores[^1] or summarization.

On this page, you'll find the node parameters for the GitHub Document Loader node, and links to more resources.

> **Info**
> **Credentials**
>
> You can find authentication information for this node [here](https://docs.n8n.io/integrations/builtin/credentials/github). This node doesn't support OAuth for authentication.

> **Info**
> **Parameter resolution in sub-nodes**
>
> Sub-nodes behave differently to other nodes when processing multiple items using an expression.
>
> Most nodes, including root nodes, take any number of items as input, process these items, and output the results. You can use expressions to refer to input items, and the node resolves the expression for each item in turn. For example, given an input of five `name` values, the expression `{{ $json.name }}` resolves to each name in turn.
>
> In sub-nodes, the expression always resolves to the first item. For example, given an input of five `name` values, the expression `{{ $json.name }}` always resolves to the first name.

## Node parameters <a id="node-parameters"></a>

- **Text Splitting**: Choose from:
  - **Simple**: Uses the [Recursive Character Text Splitter](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.textsplitterrecursivecharactertextsplitter) with a chunk size of 1000 and an overlap of 200.
  - **Custom**: Allows you to connect a text splitter of your choice.
- **Repository Link**: Enter the URL of your GitHub repository.
- **Branch**: Enter the branch name to use.

## Node options <a id="node-options"></a>

- **Recursive**: Select whether to include sub-folders and files (turned on) or not (turned off).
- **Ignore Paths**: Enter directories to ignore.

## Templates and examples <a id="templates-and-examples"></a>

[Browse GitHub Document Loader node documentation integration templates](https://n8n.io/integrations/github-document-loader) or [search all templates](https://n8n.io/workflows/)

## Related resources <a id="related-resources"></a>

Refer to [LangChain's documentation on document loaders](https://js.langchain.com/docs/modules/data_connection/document_loaders/integrations/file_loaders/) for more information about the service.

View n8n's [Advanced AI](https://docs.n8n.io/build/integrate-ai) documentation.

[^1]: A vector store, or vector database, stores mathematical representations of information. Use with embeddings and retrievers to create a database that your AI can access when answering questions.
