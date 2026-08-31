> Commit-pinned source for n8n main: [docs/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.outputparseritemlist.md](https://github.com/n8n-io/n8n-docs/blob/afebf5d9c6ff327fa215b3e6f99627e11fc9d3f2/docs/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.outputparseritemlist.md)

# Item List Output Parser node <a id="item-list-output-parser-node"></a>

Use the Item List Output Parser node to return a list of items with a specific length and separator.

> **Info**
> **Parameter resolution in sub-nodes**
>
> Sub-nodes behave differently to other nodes when processing multiple items using an expression.
>
> Most nodes, including root nodes, take any number of items as input, process these items, and output the results. You can use expressions to refer to input items, and the node resolves the expression for each item in turn. For example, given an input of five `name` values, the expression `{{ $json.name }}` resolves to each name in turn.
>
> In sub-nodes, the expression always resolves to the first item. For example, given an input of five `name` values, the expression `{{ $json.name }}` always resolves to the first name.

## Node options <a id="node-options"></a>

- **Number of Items**: Enter the maximum items to return. Set to `-1` for unlimited items.
- **Separator**: Select the separator used to split the results into separate items. Defaults to a new line.

## Templates and examples <a id="templates-and-examples"></a>

[Browse Item List Output Parser node documentation integration templates](https://n8n.io/integrations/item-list-output-parser) or [search all templates](https://n8n.io/workflows/)

## Related resources <a id="related-resources"></a>

Refer to [LangChain's output parser documentation](https://js.langchain.com/docs/concepts/output_parsers) for more information about the service.

View n8n's [Advanced AI](https://docs.n8n.io/build/integrate-ai) documentation.
