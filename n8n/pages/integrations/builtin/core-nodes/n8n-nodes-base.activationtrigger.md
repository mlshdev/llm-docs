> Commit-pinned source for n8n main: [docs/integrations/builtin/core-nodes/n8n-nodes-base.activationtrigger.md](https://github.com/n8n-io/n8n-docs/blob/afebf5d9c6ff327fa215b3e6f99627e11fc9d3f2/docs/integrations/builtin/core-nodes/n8n-nodes-base.activationtrigger.md)

# Activation Trigger node <a id="activation-trigger-node"></a>

The Activation Trigger node gets triggered when an event gets fired by n8n or a workflow.

> **Warning**
> **Feature availability**
>
> The Activation Trigger node is deprecated from n8n 0.117.0. It was replaced with two new nodes: the [n8n Trigger node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.n8ntrigger) and the [Workflow Trigger node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.workflowtrigger). For more details, check out the entry in the [breaking changes](https://github.com/n8n-io/n8n/blob/master/packages/cli/BREAKING-CHANGES.md#01170) page, and see [Deprecated and versioned nodes](https://docs.n8n.io/integrations/builtin/deprecated-nodes).

> **Info**
> **Keep in mind**
>
> If you want to use the Activation Trigger node for a workflow, add the node to the workflow. You don't have to create a separate workflow.

The Activation Trigger node gets triggered for the workflow that it gets added to. You can use the Activation Trigger node to trigger a workflow to notify the state of the workflow.

## Node parameters <a id="node-parameters"></a>

- Events
  - **Activation**: Run when the workflow gets published
  - **Start**: Run when n8n starts or restarts
  - **Update**: Run when the workflow gets saved while it's active

## Templates and examples <a id="templates-and-examples"></a>

[Browse Activation Trigger node documentation integration templates](https://n8n.io/integrations/activation-trigger) or [search all templates](https://n8n.io/workflows/)
