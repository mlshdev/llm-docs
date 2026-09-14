> Pinned source for n8n main: [docs/build/flow-logic/wait.md](https://github.com/n8n-io/n8n-docs/blob/851fd6d5bc2948c1ba9bf393bb6f7126dcd8ae59/docs/build/flow-logic/wait.md)

# Waiting <a id="waiting"></a>

Waiting allows you to pause a workflow mid-execution, then resume where the workflow left off, with the same data. This is useful if you need to rate limit your calls to a service, or wait for an external event to complete. You can wait for a specified duration, or until a webhook fires.

Making a workflow wait uses the [Wait](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.wait) node. Refer to the node documentation for usage details.

n8n provides a workflow template with a basic example of [Rate limiting and waiting for external events](https://n8n.io/workflows/1749-rate-limiting-and-waiting-for-external-events/).
