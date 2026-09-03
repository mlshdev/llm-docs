> Commit-pinned source for n8n main: [docs/deploy/host-n8n/configure-n8n/scaling.md](https://github.com/n8n-io/n8n-docs/blob/e2348a766e0ed24d6420aae246e6f0bccbc2c50e/docs/deploy/host-n8n/configure-n8n/scaling.md)

# Scaling n8n <a id="scaling-n8n"></a>

When running n8n at scale, with a large number of users, workflows, or executions, you need to change your n8n configuration to ensure good performance.

n8n can run in different [modes](https://docs.n8n.io/deploy/host-n8n/configure-n8n/scaling/enable-queue-mode) depending on your needs. The `queue` mode provides the best scalability. Refer to [Queue mode](https://docs.n8n.io/deploy/host-n8n/configure-n8n/scaling/enable-queue-mode) for configuration details.

You can configure data saving and pruning to improve database performance. Refer to [Execution data](https://docs.n8n.io/deploy/host-n8n/configure-n8n/scaling/manage-execution-data) for details.
