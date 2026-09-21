> Pinned source for n8n main: [docs/build/flow-logic/understand-execution-order.md](https://github.com/n8n-io/n8n-docs/blob/c43a0ee7369b37df0ae8d4176b79365055c77a5b/docs/build/flow-logic/understand-execution-order.md)

# Execution order in multi-branch workflows <a id="execution-order-in-multi-branch-workflows"></a>

Execution order is part of your workflow's [flow logic](https://docs.n8n.io/build/flow-logic), and matters most in workflows that [split into multiple branches](https://docs.n8n.io/build/flow-logic/split-with-conditionals).

n8n's node execution order depends on the version of n8n you're using:

- For workflows created before n8n 1.0: n8n executes the first node of each branch, then the second node of each branch, and so on.
- For workflows created from n8n 1.0: executes each branch in turn, completing one branch before starting another. n8n orders the branches based on their position on the canvas[^1], from topmost to bottommost. If two branches are at the same height, the leftmost branch executes first.

You can change the execution order in your [workflow settings](https://docs.n8n.io/build/manage-workflows/configure-workflow-settings).

[^1]: The canvas is the main interface for building workflows in n8n's editor UI. You use the canvas to add and connect nodes to compose workflows.

## Related resources

- [Flow logic](https://docs.n8n.io/build/flow-logic)
- [Split with conditionals](https://docs.n8n.io/build/flow-logic/split-with-conditionals)
- [Merge data](https://docs.n8n.io/build/flow-logic/merge-data)
- [Loop](https://docs.n8n.io/build/flow-logic/loop)
- [Wait](https://docs.n8n.io/build/flow-logic/wait)
- [Break workflows into smaller parts](https://docs.n8n.io/build/flow-logic/break-workflows-into-smaller-parts)
- [Convert to sub-workflows](https://docs.n8n.io/build/flow-logic/convert-to-sub-workflows)
- [Handle errors gracefully](https://docs.n8n.io/build/flow-logic/handle-errors-gracefully)
