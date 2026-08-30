> Commit-pinned source for n8n main: [docs/deploy/host-n8n/configure-n8n/scaling/control-concurrency.md](https://github.com/n8n-io/n8n-docs/blob/0ece31e57a42e63cf2a2c7f9a33b42888e09a5b3/docs/deploy/host-n8n/configure-n8n/scaling/control-concurrency.md)

# Self-hosted concurrency control <a id="self-hosted-concurrency-control"></a>

> **Info**
> **Only for self-hosted n8n**
>
> This document is for self-hosted concurrency control. Read [Cloud concurrency](https://docs.n8n.io/deploy/use-n8n-cloud/understand-concurrency) to learn how concurrency works with n8n Cloud accounts.

In regular mode, n8n doesn't limit how many production executions may run at the same time. This can lead to a scenario where too many concurrent executions thrash the event loop, causing performance degradation and unresponsiveness.

To prevent this, you can set a concurrency limit for production executions in regular mode. Use this to control how many production executions run concurrently, and queue up any concurrent production executions over the limit. These executions remain in the queue until concurrency capacity frees up, and are then processed in FIFO order.

Concurrency control is disabled by default. To enable it:

```sh
export N8N_CONCURRENCY_PRODUCTION_LIMIT=20
```

Keep in mind:

- Concurrency control applies only to production executions: those started from a webhook or trigger[^1] node. It doesn't apply to any other kinds, such as manual executions, sub-workflow executions, error executions, or started from CLI.

- You can't retry queued executions. Cancelling or deleting a queued execution also removes it from the queue.

- On instance startup, n8n resumes queued executions up to the concurrency limit and re-enqueues the rest.

- To monitor concurrency control, watch logs for executions being added to the queue and released. In a future version, n8n will show concurrency control in the UI.

When you enable concurrency control, you can view the number of active executions and the configured limit at the top of a project's or workflow's executions tab.

## Comparison to queue mode <a id="comparison-to-queue-mode"></a>

In queue mode, you can control how many jobs a worker may run concurrently using the [`--concurrency` flag](https://docs.n8n.io/deploy/host-n8n/configure-n8n/scaling/enable-queue-mode#configure-worker-concurrency).

Concurrency control in queue mode is a separate mechanism from concurrency control in regular mode, but the environment variable `N8N_CONCURRENCY_PRODUCTION_LIMIT` controls both of them. In queue mode, n8n takes the limit from this variable if set to a value other than `-1`, falling back to the `--concurrency` flag or its default.

## Evaluation concurrency <a id="evaluation-concurrency"></a>

Evaluation test runs use a separate concurrency limit from production executions. By default, the limit follows the instance's license tier (Community/Pro 1, Business 3, Enterprise 5). Override it with [`N8N_CONCURRENCY_EVALUATION_LIMIT`](https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/executions). Refer to [Metric-based evaluations](https://docs.n8n.io/build/integrate-ai/test-and-improve-ai-workflows/use-metrics-to-measure-quality#run-test-cases-in-parallel) for how the slider behaves in the UI.

[^1]: A trigger node is a special node responsible for executing the workflow in response to certain conditions. All production workflows need at least one trigger to determine when the workflow should run.
