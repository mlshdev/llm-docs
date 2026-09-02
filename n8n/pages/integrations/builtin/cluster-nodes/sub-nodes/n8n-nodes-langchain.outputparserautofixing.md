> Commit-pinned source for n8n main: [docs/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.outputparserautofixing.md](https://github.com/n8n-io/n8n-docs/blob/0b69471cc64a4886de337982abd2f5d237dcd52a/docs/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.outputparserautofixing.md)

# Auto-fixing Output Parser node <a id="auto-fixing-output-parser-node"></a>

The Auto-fixing Output Parser node wraps another output parser. If the first one fails, it calls out to another LLM to fix any errors.

> **Info**
> **Parameter resolution in sub-nodes**
>
> Sub-nodes behave differently to other nodes when processing multiple items using an expression.
>
> Most nodes, including root nodes, take any number of items as input, process these items, and output the results. You can use expressions to refer to input items, and the node resolves the expression for each item in turn. For example, given an input of five `name` values, the expression `{{ $json.name }}` resolves to each name in turn.
>
> In sub-nodes, the expression always resolves to the first item. For example, given an input of five `name` values, the expression `{{ $json.name }}` always resolves to the first name.

## Templates and examples <a id="templates-and-examples"></a>

[Browse Auto-fixing Output Parser node documentation integration templates](https://n8n.io/integrations/auto-fixing-output-parser) or [search all templates](https://n8n.io/workflows/)

## Related resources <a id="related-resources"></a>

Refer to [LangChain's output parser documentation](https://js.langchain.com/docs/concepts/output_parsers/) for more information about the service.

View n8n's [Advanced AI](https://docs.n8n.io/build/integrate-ai) documentation.
