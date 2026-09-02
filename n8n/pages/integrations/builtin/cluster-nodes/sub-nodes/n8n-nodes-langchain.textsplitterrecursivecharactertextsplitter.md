> Commit-pinned source for n8n main: [docs/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.textsplitterrecursivecharactertextsplitter.md](https://github.com/n8n-io/n8n-docs/blob/1db58de3a8d474a1ba99f5a612beac694402d963/docs/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.textsplitterrecursivecharactertextsplitter.md)

# Recursive Character Text Splitter node <a id="recursive-character-text-splitter-node"></a>

The Recursive Character Text Splitter node splits document data recursively to keep all paragraphs, sentences then words together as long as possible.

On this page, you'll find the node parameters for the Recursive Character Text Splitter node, and links to more resources.

> **Info**
> **Parameter resolution in sub-nodes**
>
> Sub-nodes behave differently to other nodes when processing multiple items using an expression.
>
> Most nodes, including root nodes, take any number of items as input, process these items, and output the results. You can use expressions to refer to input items, and the node resolves the expression for each item in turn. For example, given an input of five `name` values, the expression `{{ $json.name }}` resolves to each name in turn.
>
> In sub-nodes, the expression always resolves to the first item. For example, given an input of five `name` values, the expression `{{ $json.name }}` always resolves to the first name.

## Node parameters <a id="node-parameters"></a>

- **Chunk Size**: Enter the number of characters in each chunk.
- **Chunk Overlap**: Enter how much overlap to have between chunks.

## Templates and examples <a id="templates-and-examples"></a>

[Browse Recursive Character Text Splitter node documentation integration templates](https://n8n.io/integrations/recursive-character-text-splitter) or [search all templates](https://n8n.io/workflows/)

## Related resources <a id="related-resources"></a>

Refer to [LangChain's text splitter documentation](https://js.langchain.com/docs/concepts/text_splitters) and [LangChain's recursively split by character documentation](https://v03.api.js.langchain.com/classes/langchain.text_splitter.RecursiveCharacterTextSplitter.html) for more information about the service.

View n8n's [Advanced AI](https://docs.n8n.io/build/integrate-ai) documentation.
