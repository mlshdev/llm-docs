> Commit-pinned source for n8n main: [docs/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.documentdefaultdataloader.md](https://github.com/n8n-io/n8n-docs/blob/3317373ce39c3ce2406c8e3d99bb2da7f7180321/docs/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.documentdefaultdataloader.md)

# Default Data Loader node <a id="default-data-loader-node"></a>

Use the Default Data Loader node to load binary data files or JSON data for vector stores[^1] or summarization.

On this page, you'll find a list of parameters the Default Data Loader node supports, and links to more resources.

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
- **Type of Data**: Select **Binary** or **JSON**.
- **Mode**: Choose from:
  - **Load All Input Data**: Use all the node's input data.
  - **Load Specific Data**: Use [expressions](https://docs.n8n.io/build/work-with-data/expressions-versus-data-nodes) to define the data you want to load. You can add text as well as expressions. This means you can create a custom document from a mix of text and expressions.
- **Data Format**: Displays when you set **Type of Data** to **Binary**. Select the file MIME type for your binary data. Set to **Automatically Detect by MIME Type** if you want n8n to set the data format for you. If you set a specific data format and the incoming file MIME type doesn't match it, the node errors. If you use **Automatically Detect by MIME Type**, the node falls back to text format if it can't match the file MIME type to a supported data format.

## Node options <a id="node-options"></a>

- **Metadata**: Set the metadata that should accompany the document in the vector store. This is what you match to using the **Metadata Filter** option when retrieving data using the vector store nodes.

## Templates and examples <a id="templates-and-examples"></a>

[Browse Default Data Loader node documentation integration templates](https://n8n.io/integrations/default-data-loader) or [search all templates](https://n8n.io/workflows/)

## Related resources <a id="related-resources"></a>

Refer to [LangChain's documentation on document loaders](https://js.langchain.com/docs/modules/data_connection/document_loaders/integrations/file_loaders/) for more information about the service.

View n8n's [Advanced AI](https://docs.n8n.io/build/integrate-ai) documentation.

[^1]: A vector store, or vector database, stores mathematical representations of information. Use with embeddings and retrievers to create a database that your AI can access when answering questions.
