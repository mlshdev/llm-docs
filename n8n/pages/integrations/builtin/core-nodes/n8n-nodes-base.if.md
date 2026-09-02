> Commit-pinned source for n8n main: [docs/integrations/builtin/core-nodes/n8n-nodes-base.if.md](https://github.com/n8n-io/n8n-docs/blob/0b69471cc64a4886de337982abd2f5d237dcd52a/docs/integrations/builtin/core-nodes/n8n-nodes-base.if.md)

# If <a id="if"></a>

Use the If node to split a workflow conditionally based on comparison operations.

## Add conditions <a id="add-conditions"></a>

Create comparison **Conditions** for your If node.

- Use the data type dropdown to select the data type and comparison operation type for your condition. For example, to filter for dates after a particular date, select **Date & Time > is after**.
- The fields and values to enter into the condition change based on the data type and comparison you select. Refer to [Available data type comparisons](#available-data-type-comparisons) for a full list of all comparisons by data type.

Select **Add condition** to create more conditions.

### Combining conditions <a id="combining-conditions"></a>

You can choose to keep data:

- When it meets all conditions: Create two or more conditions and select **AND** in the dropdown between them.
- When it meets any of the conditions: Create two or more conditions and select **OR** in the dropdown between them.

## Templates and examples <a id="templates-and-examples"></a>

[Browse If integration templates](https://n8n.io/integrations/if) or [search all templates](https://n8n.io/workflows/)

## Branch execution with If and Merge nodes <a id="branch-execution-with-if-and-merge-nodes"></a>

> **Info**
> **0.236.0 and below**
>
> n8n removed this execution behavior in n8n 1.0. This section applies to workflows using the **v0 (legacy)** workflow execution order. By default, this is all workflows built before n8n 1.0. You can change the execution order in your [workflow settings](https://docs.n8n.io/build/manage-workflows/configure-workflow-settings).

If you add a Merge node to a workflow containing an If node, it can result in both output data streams of the If node executing.

One data stream triggers the Merge node, which then goes and executes the other data stream.

For example, in the screenshot below there's a workflow containing an Edit Fields node, If node, and Merge node. The standard If node behavior is to execute one data stream (in the screenshot, this is the **true** output). However, due to the Merge node, both data streams execute, despite the If node not sending any data down the **false** data stream.

![A workflow with an Edit Fields node, an If node, and a Merge node connected in sequence](https://raw.githubusercontent.com/n8n-io/n8n-docs/0b69471cc64a4886de337982abd2f5d237dcd52a/docs/reusable-content/.gitbook/assets/if-merge-node.png)

## Related resources <a id="related-resources"></a>

Refer to [Splitting with conditionals](https://docs.n8n.io/build/flow-logic/split-with-conditionals) for more information on using conditionals to create complex logic in n8n.

If you need more than two conditional outputs, use the [Switch node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.switch).

## Available data type comparisons <a id="available-data-type-comparisons"></a>

### String <a id="string"></a>

String data type supports these comparisons:

- exists
- does not exist
- is empty
- is not empty
- is equal to
- is not equal to
- contains
- does not contain
- starts with
- does not start with
- ends with
- does not end with
- matches regex
- does not match regex

### Number <a id="number"></a>

Number data type supports these comparisons:

- exists
- does not exist
- is empty
- is not empty
- is equal to
- is not equal to
- is greater than
- is less than
- is greater than or equal to
- is less than or equal to

### Date & Time <a id="date-and-time"></a>

Date & Time data type supports these comparisons:

- exists
- does not exist
- is empty
- is not empty
- is equal to
- is not equal to
- is after
- is before
- is after or equal to
- is before or equal to

### Boolean <a id="boolean"></a>

Boolean data type supports these comparisons:

- exists
- does not exist
- is empty
- is not empty
- is true
- is false
- is equal to
- is not equal to

### Array <a id="array"></a>

Array data type supports these comparisons:

- exists
- does not exist
- is empty
- is not empty
- contains
- does not contain
- length equal to
- length not equal to
- length greater than
- length less than
- length greater than or equal to
- length less than or equal to

### Object <a id="object"></a>

Object data type supports these comparisons:

- exists
- does not exist
- is empty
- is not empty
