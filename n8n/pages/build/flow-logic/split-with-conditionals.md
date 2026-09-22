> Pinned source for n8n main: [docs/build/flow-logic/split-with-conditionals.md](https://github.com/n8n-io/n8n-docs/blob/c43a0ee7369b37df0ae8d4176b79365055c77a5b/docs/build/flow-logic/split-with-conditionals.md)

# Splitting workflows with conditional nodes <a id="splitting-workflows-with-conditional-nodes"></a>

Splitting uses the [IF](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.if) or [Switch](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.switch) nodes. It turns a single-branch workflow into a multi-branch workflow. This is a key piece of n8n's [flow logic](https://docs.n8n.io/build/flow-logic).

Compare these workflows:

![Diagram comparing a linear bug-report workflow with one that branches by urgency and support plan](https://raw.githubusercontent.com/n8n-io/n8n-docs/c43a0ee7369b37df0ae8d4176b79365055c77a5b/docs/build/.gitbook/assets/single-multi-branch-workflow.png)

The first workflow is linear: a user submits a bug and the workflow emails support. The second workflow starts the same way but splits depending on whether the user marked the issue urgent, then splits again by the user's support plan.

This is the power of splitting and conditional nodes in n8n.

Refer to the [IF](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.if) or [Switch](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.switch) documentation for usage details.

After splitting, you can [merge the branches back together](https://docs.n8n.io/build/flow-logic/merge-data). The [execution order](https://docs.n8n.io/build/flow-logic/understand-execution-order) of a multi-branch workflow depends on how you arrange the branches on the canvas.

## Related resources

- [Flow logic](https://docs.n8n.io/build/flow-logic)
- [Merge data](https://docs.n8n.io/build/flow-logic/merge-data)
- [Loop](https://docs.n8n.io/build/flow-logic/loop)
- [Wait](https://docs.n8n.io/build/flow-logic/wait)
- [Understand execution order](https://docs.n8n.io/build/flow-logic/understand-execution-order)
- [Break workflows into smaller parts](https://docs.n8n.io/build/flow-logic/break-workflows-into-smaller-parts)
- [Convert to sub-workflows](https://docs.n8n.io/build/flow-logic/convert-to-sub-workflows)
- [Handle errors gracefully](https://docs.n8n.io/build/flow-logic/handle-errors-gracefully)
