> Commit-pinned source for n8n main: [docs/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.textsplittercharactertextsplitter.md](https://github.com/n8n-io/n8n-docs/blob/3317373ce39c3ce2406c8e3d99bb2da7f7180321/docs/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.textsplittercharactertextsplitter.md)

# Character Text Splitter node <a id="character-text-splitter-node"></a>

Use the Character Text Splitter node to split document data based on characters.

On this page, you'll find the node parameters for the Character Text Splitter node, and links to more resources.

> **Info**
> **Parameter resolution in sub-nodes**
>
> Sub-nodes behave differently to other nodes when processing multiple items using an expression.
>
> Most nodes, including root nodes, take any number of items as input, process these items, and output the results. You can use expressions to refer to input items, and the node resolves the expression for each item in turn. For example, given an input of five `name` values, the expression `{{ $json.name }}` resolves to each name in turn.
>
> In sub-nodes, the expression always resolves to the first item. For example, given an input of five `name` values, the expression `{{ $json.name }}` always resolves to the first name.

## Node parameters <a id="node-parameters"></a>

- **Separator**: Select the separator used to split the document into separate items.
- **Chunk Size**: Enter the number of characters in each chunk.
- **Chunk Overlap**: Enter how much overlap to have between chunks.

## Templates and examples <a id="templates-and-examples"></a>

[Browse Character Text Splitter node documentation integration templates](https://n8n.io/integrations/character-text-splitter) or [search all templates](https://n8n.io/workflows/)

## Related resources <a id="related-resources"></a>

Refer to [LangChain's text splitter documentation](https://js.langchain.com/docs/concepts/text_splitters) and [LangChain's API documentation for character text splitting](https://v03.api.js.langchain.com/classes/langchain.text_splitter.CharacterTextSplitter.html) for more information about the service.

View n8n's [Advanced AI](https://docs.n8n.io/build/integrate-ai) documentation.
