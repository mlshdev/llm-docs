> Commit-pinned source for n8n main: [docs/integrations/builtin/core-nodes/n8n-nodes-base.n8ntrigger.md](https://github.com/n8n-io/n8n-docs/blob/6f4b48e69e3ab9acbf023f18020c40c125c16d45/docs/integrations/builtin/core-nodes/n8n-nodes-base.n8ntrigger.md)

# n8n Trigger node <a id="n8n-trigger-node"></a>

The n8n Trigger node triggers when the workflow containing this node updates or gets published, or when the n8n instance starts or restarts. This node only responds to events in its own workflow; changes to other workflows won't trigger it.

## Node parameters <a id="node-parameters"></a>

The node includes a single parameter to identify the **Events** that should trigger it. Choose from these events:

- **Published Workflow Updated**: If you select this event, the node triggers when the workflow containing this node is updated. Changes to other workflows won't trigger this node.
- **Instance started**: If you select this event, the node triggers when the n8n instance starts or restarts.
- **Workflow Published**: If you select this event, the node triggers when the workflow containing this node is published. Publishing other workflows won't trigger this node.

You can select one or more of these events.

## Templates and examples <a id="templates-and-examples"></a>

[Browse n8n Trigger node documentation integration templates](https://n8n.io/integrations/n8n-trigger) or [search all templates](https://n8n.io/workflows/)
