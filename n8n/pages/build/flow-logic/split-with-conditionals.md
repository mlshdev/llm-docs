> Commit-pinned source for n8n main: [docs/build/flow-logic/split-with-conditionals.md](https://github.com/n8n-io/n8n-docs/blob/afebf5d9c6ff327fa215b3e6f99627e11fc9d3f2/docs/build/flow-logic/split-with-conditionals.md)

# Splitting workflows with conditional nodes <a id="splitting-workflows-with-conditional-nodes"></a>

Splitting uses the [IF](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.if) or [Switch](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.switch) nodes. It turns a single-branch workflow into a multi-branch workflow. This is a key piece of representing complex logic in n8n.

Compare these workflows:

![Diagram comparing a linear bug-report workflow with one that branches by urgency and support plan](https://raw.githubusercontent.com/n8n-io/n8n-docs/afebf5d9c6ff327fa215b3e6f99627e11fc9d3f2/docs/build/.gitbook/assets/single-multi-branch-workflow.png)

The first workflow is linear: a user submits a bug and the workflow emails support. The second workflow starts the same way but splits depending on whether the user marked the issue urgent, then splits again by the user's support plan.

This is the power of splitting and conditional nodes in n8n.

Refer to the [IF](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.if) or [Switch](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.switch) documentation for usage details.
