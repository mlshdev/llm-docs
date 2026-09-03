> Commit-pinned source for n8n main: [docs/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.modelselector.md](https://github.com/n8n-io/n8n-docs/blob/b732ee99d015bf1b55668862de6e07bbcb573c0c/docs/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.modelselector.md)

# Model Selector <a id="model-selector"></a>

The Model Selector node dynamically selects one of the connected language models during workflow execution based on a set of defined conditions. This enables implementing fallback mechanisms for error handling or choosing the optimal model for specific tasks.

This page covers node parameters for the Model Selector node and includes links to related resources.

> **Info**
> **Parameter resolution in sub-nodes**
>
> Sub-nodes behave differently to other nodes when processing multiple items using an expression.
>
> Most nodes, including root nodes, take any number of items as input, process these items, and output the results. You can use expressions to refer to input items, and the node resolves the expression for each item in turn. For example, given an input of five `name` values, the expression `{{ $json.name }}` resolves to each name in turn.
>
> In sub-nodes, the expression always resolves to the first item. For example, given an input of five `name` values, the expression `{{ $json.name }}` always resolves to the first name.

## Node parameters <a id="node-parameters"></a>

### Number of Inputs <a id="number-of-inputs"></a>

Specifies the number of input connections available for attaching language models.

### Rules <a id="rules"></a>

Each rule defines the model to use when specific conditions match.

The Model Selector node evaluates rules sequentially, starting from the first input, and stops evaluation as soon as it finds a match. This means that if multiple rules would match, n8n will only use the model defined by the first matching rule.

## Templates and examples <a id="templates-and-examples"></a>

[Browse Model Selector integration templates](https://n8n.io/integrations/model-selector) or [search all templates](https://n8n.io/workflows/)

## Related resources <a id="related-resources"></a>

View n8n's [Advanced AI](https://docs.n8n.io/build/integrate-ai) documentation.
