> Commit-pinned source for n8n main: [docs/build/flow-logic/understand-execution-order.md](https://github.com/n8n-io/n8n-docs/blob/0ece31e57a42e63cf2a2c7f9a33b42888e09a5b3/docs/build/flow-logic/understand-execution-order.md)

# Execution order in multi-branch workflows <a id="execution-order-in-multi-branch-workflows"></a>

n8n's node execution order depends on the version of n8n you're using:

- For workflows created before n8n 1.0: n8n executes the first node of each branch, then the second node of each branch, and so on.
- For workflows created from n8n 1.0: executes each branch in turn, completing one branch before starting another. n8n orders the branches based on their position on the canvas[^1], from topmost to bottommost. If two branches are at the same height, the leftmost branch executes first.

You can change the execution order in your [workflow settings](https://docs.n8n.io/build/manage-workflows/configure-workflow-settings).

[^1]: The canvas is the main interface for building workflows in n8n's editor UI. You use the canvas to add and connect nodes to compose workflows.
