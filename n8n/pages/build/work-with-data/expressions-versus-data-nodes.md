> Commit-pinned source for n8n main: [docs/build/work-with-data/expressions-versus-data-nodes.md](https://github.com/n8n-io/n8n-docs/blob/e2348a766e0ed24d6420aae246e6f0bccbc2c50e/docs/build/work-with-data/expressions-versus-data-nodes.md)

# Expressions versus data nodes <a id="expressions-versus-data-nodes"></a>

n8n provides multiple ways to work with and transform data. Understanding when to use each approach helps you build efficient workflows.

| Approach                        | Use when you need to...                                  | Examples                                                     | Available on          |
| ------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------ | --------------------- |
| Expressions                     | Set a single parameter value using existing data         | Pull `{{$json.city}}`, format dates, simple math             | Cloud and Self-hosted |
| Code node                       | Write full JavaScript/Python for complex transformations | Restructure data, loop through items, use external libraries | Cloud and Self-hosted |
| AI Transform node               | Generate transformation code from natural language       | `Group by user and sum totals`, `categorize by sentiment`    | Cloud only            |
| Other data transformation nodes | Perform common operations with a visual interface        | Aggregate items, split arrays, sort data, remove duplicates  | Cloud and Self-hosted |

### Expressions <a id="expressions"></a>

Expressions are small pieces of JavaScript-like code you put directly into node parameters using n8n's `{{ ... }}` syntax. They can dynamically set parameter values by using data from previous nodes, workflow metadata, or environment variables.

> **Info**
> **Use expressions when you can**
>
> Expressions have the advantage of providing an immediate preview of the computed values, so use expressions where you can.

**When to use expressions:**

- To pull a value from previous node data. For example, `{{$json.body.city}}`.
- To perform light transformations or calculations directly in a field.
- To avoid adding extra nodes and to keep logic close to the parameter that you are setting.

### Code node <a id="code-node"></a>

The [Code node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.code) is a dedicated node where you write JavaScript or Python that runs as a workflow step. It gives you access to incoming data from previous nodes, which you can manipulate by adding, removing, or updating items. You can create any custom function you need and use n8n's built-in methods and variables through `$` syntax.

**When to use the Code node:**

- You need more complex logic or data transformation than an expression can provide, such as restructuring arrays and objects, aggregating or splitting items, and custom algorithms.
- You want to transform many items at once.
- You want to use promises, `console.log`, or, for self-hosted setups, external npm modules.

### AI Transform node <a id="ai-transform-node"></a>

This node generates code snippets based on a short natural-language prompt. It's context-aware and understands your workflow's nodes and data types. The generated code is read-only in the node. You can copy it into a Code node to edit.

**When to use the AI Transform node:**

- You know what transformation you want but don't want to hand-write the code.
- You want AI to draft the transformation logic and then run it directly in the node, or copy into a Code node for further customization.

### Other data transformation nodes <a id="other-data-transformation-nodes"></a>

n8n provides a collection of nodes to transform data:

- [Aggregate](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.aggregate): take separate items, or portions of them, and group them together into individual items.
- [Limit](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.limit): remove items beyond a defined maximum number.
- [Remove Duplicates](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.removeduplicates): identify and delete items that are identical across all fields or a subset of fields.
- [Sort](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.sort): organize lists in a desired ordering, or generate a random selection.
- [Split Out](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.splitout): separate a single data item containing a list into multiple items.
- [Summarize](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.summarize): aggregate items together, like Excel pivot tables.

**When to use data transformation nodes:**

- The operation you need matches a specific transformation node's purpose.
- You want a no-code solution with a guided UI.
- You prefer visual workflow building over writing expressions or code.

See [Work with data](https://docs.n8n.io/build/work-with-data) for other ways to reference, transform, and structure data.
