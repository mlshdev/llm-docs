> Commit-pinned source for n8n main: [docs/build/work-with-data/filter-out-unwanted-data.md](https://github.com/n8n-io/n8n-docs/blob/0b69471cc64a4886de337982abd2f5d237dcd52a/docs/build/work-with-data/filter-out-unwanted-data.md)

# Filtering data <a id="filtering-data"></a>

Filtering in n8n can mean different things depending on what you want to accomplish. This guide covers both visual filtering in the UI and data filtering during workflow execution.

## Filter data visually in the UI <a id="filter-data-visually-in-the-ui"></a>

> **Info**
> **Feature availability**
>
> Filtering data in the node **INPUT** and **OUTPUT** panels is available on:
>
> - **n8n Cloud:** Pro, Enterprise
> - **Self-hosted:** All editions

Search and filter data in the node **INPUT** and **OUTPUT** panels. Use this to check your node's data and find specific items.

To search:

1. In a node, select **Search** ![Search icon](https://raw.githubusercontent.com/n8n-io/n8n-docs/0b69471cc64a4886de337982abd2f5d237dcd52a/docs/build/.gitbook/assets/search.png) in the **INPUT** or **OUTPUT** panel.
2. Enter your search term.

n8n filters as you type, displaying the objects or rows containing the term.

Filtering is purely visual: n8n doesn't change or delete data. The filter resets when you close and reopen the node.

## Filter data during workflow execution <a id="filter-data-during-workflow-execution"></a>

To actually remove or filter data in your workflow, use these approaches:

### Filter out items <a id="filter-out-items"></a>

To remove entire items from your workflow based on conditions, use the [Filter node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.filter). This node evaluates conditions and only passes through items that meet your criteria.

### Filter out fields <a id="filter-out-fields"></a>

To remove specific fields from an item or object while keeping the item itself, use the [Edit Fields (Set) node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.set). Configure it to remove the fields you don't need.

### Filter array elements <a id="filter-array-elements"></a>

To filter elements within an array inside an item, use the `.filter()` method in an expression or Code node. For example:

```javascript
{{ $json.myArray.filter(item => item.value > 10) }}
```

This removes array elements that don't match your condition while preserving the item structure.

### Filter out duplicate items from previous executions <a id="filter-out-duplicate-items-from-previous-executions"></a>

To remove items that have been seen in previous executions of a workflow, use the [Remove Duplicates](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.removeduplicates) node. Use this when an event fires multiple times but you only want to process the first occurrence.
