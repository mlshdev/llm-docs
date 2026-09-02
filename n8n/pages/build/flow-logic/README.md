> Commit-pinned source for n8n main: [docs/build/flow-logic/README.md](https://github.com/n8n-io/n8n-docs/blob/78fea4497784e9c1f3f34b12757ef7a2a6b363af/docs/build/flow-logic/README.md)

# Flow logic <a id="flow-logic"></a>

n8n allows you to represent complex logic in your workflows.

## Related sections <a id="related-sections"></a>

You need some understanding of [Data](https://docs.n8n.io/build/work-with-data/overview) in n8n, including [Data structure](https://docs.n8n.io/build/work-with-data/understand-n8ns-data-structure) and [Data flow within nodes](https://docs.n8n.io/build/work-with-data/understand-n8ns-data-structure#how-data-flows-within-nodes).

When building your logic, you'll use n8n's [Core nodes](https://docs.n8n.io/integrations/builtin/core-nodes), including:

- Splitting: [IF](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.if) and [Switch](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.switch).
- Merging: [Merge](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.merge), [Compare Datasets](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.comparedatasets), and [Code](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.code).
- Looping: [IF](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.if) and [Loop Over Items](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.splitinbatches).
- Waiting: [Wait](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.wait).
- Creating sub-workflows: [Execute Workflow](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.executeworkflow) and [Execute Workflow Trigger](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.executeworkflowtrigger).
- Error handling: [Stop And Error](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.stopanderror) and [Error Trigger](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.errortrigger).
